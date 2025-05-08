const config = {
  API_URL:
    import.meta.env.VITE_API_URL ||
    'https://product-store-app-1-r3ik.onrender.com',
};

// Remove debug log in production
if (import.meta.env.DEV) {
  console.log('API URL:', config.API_URL);
}

export default config;
