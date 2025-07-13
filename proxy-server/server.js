import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

const API_BASE_URL = "https://www.azki.com/api/";

app.use(
  "/api",
  createProxyMiddleware({
    target: API_BASE_URL,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    },
  })
);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
