const dev = {
  API_URL: "http://localhost:4000",
};

const prod = {
  API_URL: "https://animestreaming-zb0n.onrender.com",
};

const config = process.env.NODE_ENV === 'development' ? dev : prod;

export default config;
