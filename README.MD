# 🧱 API Mínima Boilerplate

Este projeto é um **boilerplate de uma API mínima** construída com Fastify, TypeScript e boas práticas de organização de código. Ideal para ser a base de APIs pequenas, rápidas e seguras — com suporte para ambiente de desenvolvimento, tipagem robusta e facilidade de manutenção.

---

## 🚀 Stacks Utilizadas

- [Node.js](https://nodejs.org/docs/latest/api/) – Runtime JavaScript
- [TypeScript](https://www.typescriptlang.org/docs/) – Tipagem estática
- [Fastify](https://fastify.dev/docs/latest/) – Framework HTTP leve e performático
- [Dotenv](https://www.npmjs.com/package/dotenv) – Variáveis de ambiente
- [Http Status Codes](https://www.npmjs.com/package/http-status-codes) – Código de status HTTP sem números mágicos
- [@fastify/cors](https://www.npmjs.com/package/@fastify/cors) – Middleware para CORS

---

## 📦 Estrutura do Projeto
```
src/
├── interfaces/
│ └── index.ts # Interfaces de produtos e fornecedores
├── repository/
│ └── index.ts # Dados simulados de produtos e fornecedores
├── routes.ts # Definição das rotas da API
├── services/
│ └── index.ts # Regras de negócio (busca e listagem)
└── server.ts # Ponto de entrada da aplicação
```

---

## 📌 Funcionalidades

### Produtos

- `GET /products` – Lista todos os produtos disponíveis
- `GET /products/:id` – Busca um produto por ID

### Fornecedores

- `GET /vendors` – Lista todos os fornecedores
- `GET /vendors/:id` – Busca um fornecedor por ID

---

## 🧪 Como utilizar

### 🔧 Clonando o projeto
```
git clone https://github.com/gustavomob/api-minima-boilerplate
```
### ⚙️ Instalando dependências
```
npm install
```

📁 Variáveis de Ambiente:
Crie um arquivo .env na raiz com o conteúdo:
```
PORT=3333
```

▶️ Executando a aplicação:

1. Ambiente de desenvolvimento:
```
npm run start:dev
```

2. Observando alterações automaticamente:
```
npm run start:watch
```

3. Build de produção:
```
npm run start:dist
```

🧠 Boas práticas aplicadas:
- Separação de camadas: organização por responsabilidades (interfaces, serviços, dados e rotas).
- Uso de .env: flexibilidade de configuração para múltiplos ambientes.
- Evita "números mágicos": uso de http-status-codes para respostas padronizadas.
- Modularidade: componentes reutilizáveis com tipagem forte.
- Pronto para escalar: fácil de adicionar novos endpoints e lógica.

