const config = {
  API_URL: import.meta.env.PROD
    ? 'https://your-backend-url.onrender.com'
    : 'http://localhost:5000',
};

export default config;
