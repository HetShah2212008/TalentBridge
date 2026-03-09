# Talent Bridge 

## Project Overview
Talent Bridge is a recruitment platform designed to connect job seekers with recruiters in an efficient and structured way. The goal of the project is to build a full-stack web application where recruiters can post job openings and candidates can search and apply for them.

The platform aims to simplify the recruitment process by providing a centralized system for job postings, candidate applications, and resume management.

This project is being developed as part of a learning journey in **full-stack web development**, focusing on building real-world scalable applications.

---

# Technologies Used

## Frontend (Planned)
- React
- Axios
- Tailwind CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer (for file uploads)
- bcrypt (for password hashing)

## Development Tools
- Git
- GitHub
- Visual Studio Code
- Thunder Client (API testing)

---

# Project Architecture

The project follows a **full-stack architecture** with separate directories for frontend and backend.

Talent_Bridge_console

client/ → Frontend application (React – planned)  
server/ → Backend application (Node.js + Express)  
.gitignore → Git ignored files  
README.md → Project documentation  

---

# Backend Folder Structure

server/

config/ → Database configuration  
controllers/ → Business logic  
middleware/ → Authentication middleware  
models/ → MongoDB models  
routes/ → API routes  
uploads/ → Uploaded resume files  
server.js → Main backend server  

This modular structure improves maintainability and scalability of the backend.

---

# Work Completed So Far

## 1. Project Initialization
The project repository was created and organized for development.

Key actions:
- Created the main project directory
- Organized the project into frontend and backend folders
- Prepared the environment for development

---

## 2. Version Control Setup
Git was initialized to track changes and maintain project history.

Commands used:

git init  
git add .  
git commit -m "Initial commit"

---

## 3. GitHub Repository Integration
The project was connected to a remote repository on GitHub.

Commands used:

git remote add origin <repository-url>  
git branch -M main  
git push -u origin main  

This allows the project to be stored, managed, and shared online.

---

## 4. .gitignore Configuration
A `.gitignore` file was added to prevent unnecessary or sensitive files from being uploaded.

Examples of ignored files:

node_modules/  
.env  
*.log  

---

## 5. Repository Cleanup
Unnecessary files were removed to keep the repository clean.

Files removed:
- BuildVerse_Phase_A.pdf
- Console_project.pdf

---

## 6. Project Refactoring
The folder structure was improved by removing an unnecessary parent directory.

Old structure:

Recruitment_portal/  
  client/  
  server/  

New structure:

client/  
server/  

---

## 7. Backend Environment Setup
The backend server environment was initialized inside the `server` directory.

Key steps:
- Created Node.js project
- Installed required backend dependencies
- Configured Express server

Dependencies installed:

express  
mongoose  
bcryptjs  
multer  
cors  

---

## 8. MongoDB Integration
The backend server was successfully connected to a MongoDB database.

MongoDB is used to store:
- User information
- Job listings
- Candidate applications

The connection was configured using Mongoose.

---

## 9. Candidate Registration API
A registration API was implemented to allow candidates to create accounts.

API Endpoint:

POST /api/auth/register

Features implemented:
- Candidate registration
- Password hashing
- Resume upload
- Data storage in MongoDB

---

## 10. Password Security
User passwords are encrypted before being stored in the database using bcrypt hashing.

This ensures that user credentials remain secure.

---

## 11. Resume Upload Feature
Candidates can upload their CV during registration.

Uploaded resumes are stored in:

server/uploads/

The file path is saved in the database along with user information.

---

## 12. API Testing
Backend APIs were tested using Thunder Client inside Visual Studio Code.

Testing included:
- Creating new candidate accounts
- Uploading resumes
- Verifying data stored in MongoDB

---

# Current Development Status

The backend server is now functional and supports:

- Candidate registration
- Password hashing
- Resume uploads
- Data storage in MongoDB
- API testing via Thunder Client

The project has moved from the **initial setup phase** to the **backend feature development phase**.

---

# Future Development Goals

The next development stages will include implementing more backend features and then integrating the frontend.

Upcoming tasks include:

### Backend Development
- User login API
- Recruiter job posting API
- Job listing API
- Job application system
- Candidate application tracking

### Frontend Development
- React-based user interface
- Candidate dashboard
- Recruiter dashboard
- Job browsing interface

---

# Long-Term Vision

Future enhancements planned for the platform include:

- AI-based resume filtering
- Candidate-job matching system
- Interview scheduling system
- Recruiter analytics dashboard
- Notification system

---

# Author

This project is being developed as part of a personal learning journey in full-stack web development, focusing on building scalable and real-world applications.