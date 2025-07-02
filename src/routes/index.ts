import { FastifyInstance } from "fastify";
import { products, vendors } from "../repository/db";

export async function Routes(server: FastifyInstance) {
  server.get("/products", async (request, response) => {
    response.type("application/json").code(200);
    return { products };
  });

  server.get("/vendors", async (request, response) => {
    response.type("application/json").code(200);
    return { vendors };
  });
}
