import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-for-saar';

app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Auth Middleware
const authMiddleware = (req, res, next) => {
  const token = req.cookies.admin_token;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// API Routes

// Login
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1d' });
  
  res.cookie('admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  });

  res.json({ success: true, message: 'Logged in successfully' });
});

app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('admin_token');
  res.json({ success: true });
});

app.get('/api/auth/verify', authMiddleware, (req, res) => {
  res.json({ success: true, user: req.user });
});

// Content Routes

// GET All Content (Public)
app.get('/api/content', async (req, res) => {
  try {
    const pages = await prisma.pageContent.findMany();
    const contactInfo = await prisma.contactInfo.findFirst();

    const formattedContent = {};
    for (const page of pages) {
      formattedContent[page.pageKey] = {
        title: page.title,
        sections: JSON.parse(page.sections),
      };
    }

    res.json({ 
      content: formattedContent,
      contactInfo 
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch content' });
  }
});

// Update Content (Protected)
app.put('/api/content', authMiddleware, async (req, res) => {
  const { content, contactInfo } = req.body;
  
  try {
    if (content) {
      for (const [key, value] of Object.entries(content)) {
        await prisma.pageContent.updateMany({
          where: { pageKey: key },
          data: {
            title: value.title,
            sections: JSON.stringify(value.sections),
          }
        });
      }
    }

    if (contactInfo) {
      const existing = await prisma.contactInfo.findFirst();
      if (existing) {
        await prisma.contactInfo.update({
          where: { id: existing.id },
          data: contactInfo
        });
      }
    }

    res.json({ success: true, message: 'Content updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update content' });
  }
});

export default app;
