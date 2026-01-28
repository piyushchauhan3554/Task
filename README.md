# 🔐 Authentication System (Node.js + Express + MongoDB)

A secure and scalable **authentication system** built using **Node.js, Express, MongoDB, JWT, and bcrypt**, following the **MVC architecture**.  
The project supports user registration, login, authentication middleware, and protected user profile routes.

---

## 🚀 Features

- ✅ User Registration
- ✅ User Login
- ✅ Password hashing using **bcrypt**
- ✅ JWT-based Authentication
- ✅ Protected Routes
- ✅ User Profile Page
- ✅ MVC Folder Structure
- ✅ Environment Variable Security
- ✅ MongoDB Database Integration
- ✅ EJS-based UI

---


## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Authentication:** JWT (JSON Web Token)  
- **Security:** bcrypt, dotenv  
- **Frontend:** EJS, CSS  
- **Tools:** Nodemon, Git  

---


## Auth flow
**Register** → Password hashed (bcrypt) → Stored in DB
**Login** → Password verified → JWT generated
**JWT** → Stored in cookie / header
**Protected Routes** → JWT verified using middleware
---


---

## ⚙️ Environment Variables

### Create a `.env` file in the root directory:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```
---

## Steps to run this Repo

1️⃣ Clone the repository
git clone https://github.com/piyushchauhan3554/Task.git

2️⃣ Install dependencies
npm install

3️⃣ Start the server
npm run start

Server will run at:
http://localhost:4000






