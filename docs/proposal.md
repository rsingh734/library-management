# Capstone Project Proposal: Digital Library Management API

## 1. Project Concept

**Purpose and Theme:** I will develop a Digital Library Management API focused on tracking books in a digital ecosystem. This system will manage the complete lifecycle of digital assets, member registrations, and author information in a centralized platform.

**Why Chosen:** Library management is a classic domain that perfectly demonstrates back-end principles while allowing for modern digital adaptations. A digital book tracking system solves real-world problems of inventory management, member access control, and automated notifications, making it relevant and practical.

## 2. Scope and Functionality

**Planned Resources (3 main resources beyond Users):**
- **Books:** Digital resource tracking with fields including `title`, `authorId`, `ISBN`, `publicationYear`, `genre`, `availableCopies`, `totalCopies`, `description`
- **Authors:** Creator management with fields including `name`, `biography`, `nationality`, `birthDate`, `books` (array of book references)
- **Members:** Extended user profiles with fields including `memberId`, `joinDate`, `membershipType`, `borrowedBooks`, `contactPreferences`

**Core Functionality & Endpoints:**
- **Authentication:** `POST /auth/login`, `POST /auth/register`
- **Books:** `GET /books`, `POST /books`, `GET /books/:id`, `PUT /books/:id`, `DELETE /books/:id`
- **Authors:** `GET /authors`, `POST /authors`, `GET /authors/:id`, `PUT /authors/:id`, `DELETE /authors/:id`
- **Members:** `GET /members`, `GET /members/:id`, `PUT /members/:id` (role-protected)
- **Loans:** `POST /loans/borrow`, `POST /loans/return` (handling book availability)
- **Notifications:** `POST /notifications/reminder` (internal trigger for email notifications)

**Data Needs:** Firebase Firestore for primary data, Firebase Authentication for user management, and integration with an email service provider for notifications.

## 3. Course Content Alignment

**Aligned with Course Content:**
- RESTful API with Express.js and TypeScript
- Firebase Authentication with role-based authorization (Librarian vs. Member)
- CRUD operations for Books, Authors, and Members resources
- Data validation using Joi
- Error handling middleware
- Layered architecture (Routes → Controllers → Services → Repository)
- Unit testing with Jest (aiming for 65%+ coverage)
- API documentation with Swagger/OpenAPI
- Security implementation with helmet.js and CORS

**Requiring Instructor Approval:**
- **Email Notifications Component:** Research and implementation of automated email notifications for events such as:
  - Book return reminders
  - Reservation availability notices
  - Membership registration confirmations
  - This extends beyond core course content and requires research into email service integration (e.g., Nodemailer, SendGrid, or AWS SES).

## 4. GitHub Project Setup

**Repository Structure:**
- **Main Branch:** Production-ready code only
- **Development Branch:** Integration branch for completed features
- **Feature Branches:** Individual branches for each functionality

**Initial Project Board Columns:**
- Backlog
- To Do (Milestone 1)
- In Progress
- Review
- Done

**High-Level Tasks by Milestone:**

**Milestone 1 (Week 3):**
- [ ] Set up project structure with TypeScript and Express
- [ ] Configure Firebase Firestore and Authentication
- [ ] Implement basic Book CRUD operations
- [ ] Create GitHub Actions CI pipeline
- [ ] Set up Jest testing environment

**Milestone 2:**
- [ ] Implement Author and Member resources
- [ ] Add role-based authentication middleware
- [ ] Create loan/return functionality
- [ ] Add data validation with Joi
- [ ] Write unit tests for existing functionality

**Milestone 3:**
- [ ] Research and implement email notification system
- [ ] Add Swagger/OpenAPI documentation
- [ ] Achieve 65%+ test coverage
- [ ] Final security and performance review
- [ ] Deploy application

**Branch Naming Convention:** `feature/books-crud`, `feature/email-notifications`, `fix/auth-validation`, etc.
