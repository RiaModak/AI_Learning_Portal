# Ai_learning_portal

**AI Learning Portal** is a web-based educational platform for creating and solving assignments and tests. Teachers can generate questions automatically from `.docx` files using AI, and students can submit answers and receive AI-based feedback.

---

## Features

### Admin
- Create and manage courses.
- Add teachers and students.
- Assign teachers to courses.
- View all assignments and tests.

### Teacher
- Upload assignments and MCQ tests.
- Auto-generate questions from `.docx` files using AI.
- View student submissions and test results.

### Student
- View assignments and tests.
- Submit assignments.
- Solve MCQ and short-answer tests.
- Receive AI-generated scores and feedback.

---

## Technology Stack

- **Backend:** Django (portal), FastAPI (AI question generation & evaluation)
- **Database:** MySQL / SQLite
- **Frontend:** Django templates, HTML, CSS
- **AI:** Google Gemini + Groq API
- **File Handling:** `.docx` uploads for test generation

---

## Project Structure

```text
AI_Learning_Portal/
│
├── llmapi/                      # FastAPI AI service
│   ├── main.py                  
│   ├── qnabase.py              
│   ├── questions.db             # SQLite database
│   └── .env                     # API keys (not pushed to Git)
│
├── myapp/                       # Django app
│   ├── models.py                
│   ├── views.py                
│   ├── urls.py                 
│   ├── forms.py              
│   ├── admin.py                
│   ├── templatetags/
│   │   └── filters.py           # Custom template filters
│   └── templates/               # Frontend pages
│       ├── admin_dashboard.html
│       ├── base.html
│       ├── login.html
│       ├── solve_ai_test.html
│       ├── student_dashboard.html
│       ├── teacher_dashboard.html
│       ├── view_ai_test_result.html
│       ├── view_generated_test.html
│       ├── student/
│       │   ├── solve_tests.html
│       │   ├── test_result.html
│       │   └── view_tests.html
│       └── teacher/
│           ├── add_questions.html
│           └── manage_tests.html
│   
├── project/                     # Main Django project folder
│   ├── settings.py              
│   ├── urls.py                 
│   ├── wsgi.py                 
│   └── asgi.py                  
│
├── media/                       # Uploaded files (assignments/test docs)
│
├── manage.py                   
├── requirements.txt
└── README.md

```


## Installation

### 
1. Clone the repository
git clone https://github.com/RiaModak/AI_Learning_Portal.git
cd AI_Learning_Portal

2. Create and activate a virtual environment
python -m venv venv
venv\Scripts\activate

3. Install dependencies
pip install -r requirements.txt

4. Set up environment variables
Create a .env file inside llmapi/:
GROQ_API_KEY=your_groq_api_key_here

## Running the Project

1. Start Django (Main Portal)
python manage.py migrate
python manage.py createsuperuser   # optional
python manage.py runserver
Django runs on:
http://127.0.0.1:8000

3. Start FastAPI (AI Question Generator)
cd llmapi
uvicorn main:app --reload --port 8001
FastAPI runs on:
http://127.0.0.1:8001

###
