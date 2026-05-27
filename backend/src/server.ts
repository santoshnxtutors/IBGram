import { createApp } from "./app";
import { getEnv } from "./config/env";
import { logger } from "./config/logger";

const env = getEnv();
const app = createApp();

const server = app.listen(env.BACKEND_PORT, () => {
  logger.info({ port: env.BACKEND_PORT, url: env.BACKEND_URL }, "IBGram backend listening");
});

function shutdown(signal: NodeJS.Signals) {
  logger.info({ signal }, "Shutting down backend");
  server.close(() => {
    logger.info("Backend stopped");
    process.exit(0);
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
