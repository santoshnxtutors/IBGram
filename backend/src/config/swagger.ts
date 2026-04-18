import path from "node:path";
import swaggerJsdoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.3",
    info: {
      title: "IB Gram Backend API",
      version: "1.0.0",
      description: "Backend service for tutors, content, SEO pages, and admin workflows."
    },
    servers: [{ url: "/api/v1", description: "Versioned API" }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    }
  },
  apis: [path.join(process.cwd(), "src/modules/**/*.ts")]
});
