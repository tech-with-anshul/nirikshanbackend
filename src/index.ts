import app from "./app";
import { SERVER_CONFIG, APP_CONFIG } from "./config";

// Start the server
app.listen(SERVER_CONFIG.port, "0.0.0.0", () => {
  console.log(`🚀 ${APP_CONFIG.name} v${APP_CONFIG.version}`);
  console.log(`🌍 Environment: ${SERVER_CONFIG.nodeEnv}`);
  console.log(`🎯 Server running on all interfaces (0.0.0.0:${SERVER_CONFIG.port})`);
  console.log(`📊 Health check: http://localhost:${SERVER_CONFIG.port}/health`);
  console.log(`📱 Mobile access: http://192.168.1.36:${SERVER_CONFIG.port}/health`);
  console.log(`🔐 Auth API: http://localhost:${SERVER_CONFIG.port}/api/auth`);
  console.log(`📱 Mobile Auth API: http://192.168.1.36:${SERVER_CONFIG.port}/api/auth`);
  console.log(`✨ All systems operational!`);
});
