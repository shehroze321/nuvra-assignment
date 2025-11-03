# Nuvra Assignment

This repo contains a small full-stack app: an Express + TypeScript backend (Prisma + SQLite) and a Next.js frontend.

Quick notes
- Backend: `backend/` — API, Zod validation, Prisma/SQLite
- Frontend: `frontend/` — Next.js app

Prerequisites
- Node.js (v18+), npm or yarn

Backend — quick start
1. Open terminal, go to `backend` and install deps:

```powershell
cd backend
npm install
```
2. Create `.env` file according to env.exmpale file

3. Generate Prisma client and migrate once:

```powershell
npm run prisma:generate
npm run prisma:migrate
```
4. Run dev server:

```powershell
npm run dev
```

Frontend — quick start
1. Open a new terminal, go to `frontend` and install:

```powershell
cd frontend
npm install
npm run dev
```

API usage (examples)
- Register (POST): `http://localhost:4000/auth/register`
  Body (JSON): { "name": "John", "email": "john@x.com", "password": "secret" }
- Login (POST): `http://localhost:4000/auth/login`

Make sure your requests include header `Content-Type: application/json`.

Response format
- Validation errors are returned as:

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [ { "field": "email", "message": "Email is required" } ]
}
```

If you want a short Postman collection, `.env.example`, or a script to run both servers concurrently, tell me which and I'll add it.

