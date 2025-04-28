# Projeto Canvi

Sistema de doações e pagamentos PIX integrado com a API Canvi.

## Requisitos

- Node.js 18+
- Docker e Docker Compose

## Configuração

1. Clone o repositório

```bash
git https://github.com/MendoncaGabriel/projeto-canvi.git
cd projeto-canvi
```

2. Configure as variáveis de ambiente:

- Copie o arquivo `.env.example` para `.env`
- Preencha as variáveis necessárias:
  - Credenciais do banco de dados
  - Chaves da API Canvi
  - Demais configurações do ambiente

3. Inicie o banco de dados com Docker:

```bash
cd backend
docker-compose up -d
```

4. Instale as dependências:

Frontend:

```bash
cd frontend
npm install
```

Backend:

```bash
cd backend
npm install
```

5. Execute as migrações do banco:

```bash
cd backend
npx prisma migrate deploy
```

## Executando o Projeto

Frontend (desenvolvimento):

```bash
cd frontend
npm run dev
# porta 3000 por padrão
```

Backend (desenvolvimento):

```bash
cd backend
npm run dev
# porta 3333 por padrão
```

## Build para Produção

Frontend:

```bash
cd frontend
npm run build
```

Backend:

```bash
cd backend
npm run build
```

## Principais Funcionalidades

- Geração de QR Code PIX para doações
- Pagamentos com PIX dinâmico e estático
- Webhook para notificações de pagamento
- Interface responsiva para desktop e mobile
- Registro de redundância de pagamentos

## Estrutura do Projeto

```
projeto-canvi/
├── frontend/         # Next.js + Next
├── backend/          # Node.js + Fastify
```

## Tecnologias Utilizadas

- Frontend: Next.js, React, TailwindCSS
- Backend: Node.js, Fastify, Prisma
- Banco de Dados: MySQL
- Containerização: Docker
