// src/api/routes.ts
import { FastifyInstance } from "fastify";
import { listProducts, listVendors, findProductById } from "../services";
import {ProductParams, VendorParams} from '../interfaces'

const HEADER_RESPONSE = "application/json"

export async function Routes(server: FastifyInstance) {
  server.get("/products", async (_request, response) => {
    const result = listProducts();
    response.type(HEADER_RESPONSE).code(result.statusCode);
    return result.body;
  });

  server.get("/vendors", async (_request, response) => {
    const result = listVendors();
    response.type(HEADER_RESPONSE).code(result.statusCode);
    return result.body;
  });

  server.get<{ Params: ProductParams }>("/products/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const result = findProductById(id);
    response.type(HEADER_RESPONSE).code(result.statusCode);
    return result.body;
  });

  server.get<{ Params: VendorParams }>("/vendors/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const result = findProductById(id);
    response.type(HEADER_RESPONSE).code(result.statusCode);
    return result.body;
  });
}
