export type HealthStatus = {
  status: "ok";
  service: "ibgram-backend";
  timestamp: string;
  uptimeSeconds: number;
};

export function getHealthStatus(): HealthStatus {
  return {
    status: "ok",
    service: "ibgram-backend",
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.round(process.uptime()),
  };
}

export function getApiVersion() {
  return {
    name: "ibgram-backend",
    version: process.env.npm_package_version ?? "0.1.0",
  };
}
