# Complaint-tracker

Complaint / Issue Tracker API

A backend REST API built using Node.js and Express.js to manage complaints.
This project demonstrates clean backend architecture using routes, controllers, middleware, and in-memory data storage (No database).

🚀 Features

RESTful API structure

Clean separation of:

Routes

Controllers

Middleware

Uses express.Router()

App-level Logger Middleware

Router-level Auth Middleware

ES Modules (import / export)

In-memory data storage (No database)

Runs on port 3000

📁 Folder Structure
<img width="553" height="469" alt="Screenshot 2026-02-05 092155" src="https://github.com/user-attachments/assets/27892092-32c8-4211-8bab-901d5cdce951" />

📦 Installation & Setup
1️⃣ Clone the Repository
git clone <your-repo-link>
cd complaint-api

2️⃣ Install Dependencies
npm install

3️⃣ Start the Server
npm start


Server will run at:

http://localhost:3000


Console output:

Server running on port 3000

📌 API Endpoints
🔹 GET /complaints

Fetch all complaints
Access: Public

🔹 POST /complaints

Create a new complaint
Access: Public

Request Body:

{
  "title": "Internet Issue",
  "description": "WiFi not working properly"
}

🔹 PUT /complaints/:id/resolve

Resolve a complaint
Access: Protected (Auth Middleware)

🔹 DELETE /complaints/:id

Delete a complaint
Access: Protected (Auth Middleware)

📄 Complaint Object Structure
{
  "id": 1,
  "title": "Internet Issue",
  "description": "WiFi not working properly",
  "status": "open"
}

🛠 Middleware
✅ Logger Middleware (App-level)

Logs HTTP Method and URL

Runs for every request

Example:

GET /complaints

✅ Auth Middleware (Router-level)

Logs: Auth checked

Protects:

Resolve route

Delete route

⚠ Important Rules Followed

❌ No database used

✅ In-memory JavaScript arrays

✅ Business logic inside controllers only

✅ Clean architecture maintained

✅ Proper middleware order

🎯 Evaluation Checklist

✔ Correct folder structure

✔ Proper use of express.Router()

✔ Clean route-controller separation

✔ Middleware execution order visible

✔ Project runs using npm start

👨‍💻 Author

Phaneendra
B.Tech CSE – Lovely Professional University
