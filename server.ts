import app from './api/index.ts';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});
