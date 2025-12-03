# Library Management System API  
A secure, fully functional REST API built using **Node.js**, **Express**, **TypeScript**, **Firebase Authentication**, and **Firestore**.  
This API supports complete CRUD operations, authentication, authorization (role-based), and real-time database storage in Firestore.

---

## Features Implemented

### Authentication & Authorization
- Firebase Email/Password authentication
- Secure ID token validation using middleware
- Admin/User role-based access
- Protected API routes
- Custom claims stored in Firebase Authentication

### CRUD Operations
The API includes full Create, Read, Update, Delete operations for:

- **Books**
- **Authors**
- **Members**
- **Loans (Borrow & Return)**
- **Notifications**

All data is stored in **Firestore**.

### Firestore Integration
- All entities stored in separate Firestore collections:
  - `/books`
  - `/authors`
  - `/members`
  - `/loans`
  - `/notifications`
- Auto-ID document creation
- Server-side validation using Joi

### Middleware Implemented
- `authenticate` → verifies Firebase ID token  
- `authorize` → checks user roles  
- `logger` → logs every request  
- `errorHandler` → handles all API errors consistently

---

## Tech Stack

| Component | Technology |
|----------|------------|
| Language | TypeScript |
| Framework | Express.js |
| Auth | Firebase Authentication |
| Database | Firestore |
| Validation | Joi |
| Documentation | Swagger |
| Runtime | Node.js |

---

## Project Structure

```txt
src/
│
├── config/
│   └── firebase.ts
│
├── controllers/
│   ├── books.controller.ts
│   ├── authors.controller.ts
│   ├── members.controller.ts
│   ├── loans.controller.ts
│   └── notifications.controller.ts
│
├── middleware/
│   ├── authenticate.ts
│   ├── authorize.ts
│   ├── logger.ts
│   └── errorHandler.ts
│
├── routes/
│   ├── books.routes.ts
│   ├── authors.routes.ts
│   ├── members.routes.ts
│   ├── loans.routes.ts
│   └── notifications.routes.ts
│
├── validators/
│   ├── bookValidators.ts
│   ├── authorValidators.ts
│   ├── memberValidators.ts
│   └── loanValidators.ts
│
└── app.ts

## Quick Start
## Clone the Repository
```bash
git clone https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
cd <YOUR_REPO>

### Install dependencies
```bash
npm install

### .env
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-client-email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nKEY\n-----END PRIVATE KEY-----\n"
PORT=5000

### Run The Project
npm run dev

## Server will run at:
http://localhost:5000

##Swagger documentation:
http://localhost:5000/api-docs
