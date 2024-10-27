const express = require("express");
const app = express();
const path = require("path");
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = process.env.PORT || 5173;

// Proxy middleware configuration
app.use('/api', createProxyMiddleware({
  target: 'http://localhost:3000/api',
  changeOrigin: true
}));

app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});