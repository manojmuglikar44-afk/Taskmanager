# Taskmanager
ON_GOING PROJECT open for Contribution.. Feel free to fork...


📘 Student Task Manager

A simple web-based task manager built with Python (FastAPI + SQLAlchemy) to help students organize assignments, deadlines, and daily tasks.

This project is currently under development 🚧.

🧠 Project Goal

To create a mobile-friendly web app where students can:

Register and log in

Add and manage their tasks

Track deadlines and completion status

Stay organized and productive

🏗️ Current Structure
student_task_manager/
│
├── requirements.txt
├── README.md
│
└── Taskmanager/
    │
    ├── backend/
    │   ├── main.py
    │   ├── database.py
    │   ├── models.py
    │   └── routes/
    │       ├── tasks.py
    │       └── users.py
    │
    └── frontend/
        ├── static/
        ├── index.html
        ├── login.html
        └── dashboard.html

⚙️ Tech Stack

Backend

FastAPI

SQLAlchemy

SQLite

Uvicorn

Frontend

HTML, CSS, JavaScript

🚀 How to Run (Backend)

Create and activate virtual environment

python -m venv .venv
.venv\Scripts\activate      # Windows
source .venv/bin/activate   # Mac/Linux


Install dependencies

pip install -r requirements.txt


Run the API

cd Taskmanager/backend
uvicorn main:app --reload


Open your browser at:

http://127.0.0.1:8000/docs

📌 Features Implemented

User model & routes

Task model & routes

SQLite database integration

Basic FastAPI backend structure

Simple frontend pages (Login / Dashboard)

🛠️ Features Coming Next

User authentication (JWT login)

Task creation, editing & deletion

Task status tracking (complete / pending)

Mobile UI improvements

Frontend ↔ Backend integration

Deployment

📷 Example Workflow

Student registers

Logs in

Adds tasks

Views tasks on dashboard

Updates progress

💡 Development Notes

This is an educational and evolving project

Structure and features may change as the app grows

Contributions and suggestions are welcome

🧑‍💻 Author

Built by Raj as a learning project in Python and web development.
@RajMajhi

🧑‍💻 Co- Author 

@manojmuglikar44-afk
