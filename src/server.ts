import * as dotenv from "dotenv";
import fastify from "fastify";
import { Routes } from "./routes";
import cors from "@fastify/cors";

dotenv.config();

const PORT = Number(process.env.PORT) || 3333; 

const server = fastify({logger: true})

server.register(cors, {
  origin:"*",
  methods: ["GET"]
} )

Routes(server)

server.listen({ port: PORT }).then(() => {
  console.log(`🚀 Servidor iniciado na porta ${PORT}`);
}).catch((err) => {
  server.log.error(err);
  process.exit(1);
});
