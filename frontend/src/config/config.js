const config = {
  API_URL: import.meta.env.VITE_API_URL?.trim() || 'http://localhost:5000',
};

console.log('API URL:', config.API_URL); // Debug the API URL
export default config;
