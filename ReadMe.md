# MRU Hacks 2025 Project

This project consists of a React frontend and a FastAPI backend server.

## Project Structure

```
mruHacks2025/
├── frontend/          # React application
├── backend/           # FastAPI server
└── README.md
```

## Prerequisites

- **Node.js** (v14 or higher) - for the React frontend
- **Python** (v3.8 or higher) - for the FastAPI backend
- **npm** or **yarn** - for frontend package management
- **pip** - for Python package management

## 🚀 Getting Started

### Backend Setup (FastAPI)

1. **Navigate to the backend directory:**
   ```powershell
   cd backend
   ```

2. **Install Python dependencies:**
   ```powershell
   pip install -r requirements.txt
   ```

3. **Start the FastAPI server:**
   ```powershell
   cd backend
   # Option 1: Using uvicorn (recommended)
   uvicorn main:app --reload --host 127.0.0.1 --port 8000
   
   # Option 2: Using Python to run main.py directly
   python main.py
   ```

4. **Verify the backend is running:**
   - Open your browser and visit: http://127.0.0.1:8000
   - API documentation: http://127.0.0.1:8000/docs
   - Health check: http://127.0.0.1:8000/health

### Frontend Setup (React)

1. **Navigate to the frontend directory:**
   ```powershell
   cd frontend
   ```

2. **Install Node.js dependencies:**
   ```powershell
   npm install
   ```

3. **Start the React development server:**
   ```powershell
   npm start
   ```

4. **Access the React app:**
   - The app will automatically open in your browser at: http://localhost:3000
   - If it doesn't open automatically, navigate to http://localhost:3000

## 🔗 API Endpoints

The backend provides the following endpoints:

- `GET /` - Welcome message
- `GET /health` - Health check endpoint
- `GET /api/hello/{name}` - Personalized greeting
- `POST /api/data` - Accept JSON data

Example API calls:
```bash
# Get welcome message
curl http://127.0.0.1:8000/

# Health check
curl http://127.0.0.1:8000/health

# Personalized greeting
curl http://127.0.0.1:8000/api/hello/John

# POST data
curl -X POST "http://127.0.0.1:8000/api/data" \
     -H "Content-Type: application/json" \
     -d '{"message": "Hello from frontend!"}'
```

## 🛠 Development Workflow

### Running Both Services

1. **Terminal 1 - Backend:**
   ```powershell
   cd backend
   uvicorn main:app --reload --host 127.0.0.1 --port 8000
   ```

2. **Terminal 2 - Frontend:**
   ```powershell
   cd frontend
   npm start
   ```

### Making Changes

- **Backend changes:** The FastAPI server will auto-reload when you modify Python files
- **Frontend changes:** The React dev server will auto-reload when you modify React components

## 📁 Key Files

### Backend (`/backend`)
- `main.py` - Main FastAPI application
- `requirements.txt` - Python dependencies
- `.gitignore` - Git ignore rules for Python

### Frontend (`/frontend`)
- `package.json` - Node.js dependencies and scripts
- `src/` - React source code
- `public/` - Static assets

## 🔧 Troubleshooting

### Backend Issues

**"Error loading ASGI app":**
- Make sure you're in the `backend` directory when running uvicorn
- Verify `main.py` exists in the current directory

**"Import could not be resolved":**
- Ensure all dependencies are installed: `pip install -r requirements.txt`
- Activate the virtual environment if not using full paths

### Frontend Issues

**"npm: command not found":**
- Install Node.js from https://nodejs.org/

**Port 3000 already in use:**
- Kill the existing process or use a different port:
  ```powershell
  npm start -- --port 3001
  ```

## 🌐 CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:3000` (React dev server)

If you change the frontend port, update the CORS settings in `backend/main.py`.

## 📝 Additional Notes

- The virtual environment is located at `.venv/` in the project root
- FastAPI provides automatic API documentation at `/docs`
- Both servers support hot-reload for development
- The backend runs on port 8000, frontend on port 3000 by default

---

**Happy coding! 🚀**