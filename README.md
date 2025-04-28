# Projeto Canvi

Sistema de doações e pagamentos via PIX integrado com a API Canvi.

---

## Requisitos

- Node.js 18+
- Docker e Docker Compose

---

## Configuração Inicial

1. **Clone o repositório:**

```bash
git clone https://github.com/MendoncaGabriel/projeto-canvi.git
cd projeto-canvi
```

2. **Configure as variáveis de ambiente:**

- Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

- Preencha as variáveis necessárias:
  - Credenciais do banco de dados
  - Chaves da API Canvi
  - Outras configurações específicas do ambiente

3. **Inicie o banco de dados via Docker:**

```bash
cd backend
docker-compose up -d
```

4. **Instale as dependências:**

- **Frontend:**

```bash
cd frontend
npm install
```

- **Backend:**

```bash
cd backend
npm install
```

5. **Execute as migrações do banco de dados:**

```bash
cd backend
npx prisma migrate deploy
```

---

## Executando o Projeto

- **Frontend (modo de desenvolvimento):**

```bash
cd frontend
npm run dev
# A aplicação será iniciada na porta 3000
```

- **Frontend (modo de produção):**

```bash
cd frontend
npm run start
```

- **Backend (modo de desenvolvimento):**

```bash
cd backend
npm run dev
# O servidor será iniciado na porta 3333
```

- **Backend (modo de produção):**

```bash
cd backend
npm start
```

---

## Build para Produção

- **Frontend:**

```bash
cd frontend
npm run build
```

- **Backend:**

```bash
cd backend
npm run build
```

---

## Principais Funcionalidades

- Geração de QR Code para pagamentos via PIX
- Pagamentos via PIX dinâmico e estático
- Webhook para notificações de status de pagamento
- Interface responsiva (desktop e mobile)
- Registro de redundância de transações de pagamento

---

## Estrutura do Projeto

```
projeto-canvi/
├── frontend/         # Frontend desenvolvido com Next.js
├── backend/          # Backend desenvolvido com Node.js e Fastify
```

---

## Tecnologias Utilizadas

- **Frontend:** Next.js, React, TailwindCSS
- **Backend:** Node.js, Fastify, Prisma, Jest
- **Banco de Dados:** MySQL
- **Containerização:** Docker

---

## Funcionalidades Futuras

- Implementação de sistema de jobs assíncronos para processamento de pagamentos
- Sistema de autenticação de usuários (JWT e bcrypt)
- Sistema de autorização com RBAC (Role-Based Access Control)
- Cache utilizando Redis
- Melhoria na configuração de virtualização via Docker

---

## Testes

Para rodar os testes no backend:

```bash
cd backend
npm run test
```

---

## Sobre o Projeto

Projeto técnico desenvolvido para a empresa **CANVI**.
