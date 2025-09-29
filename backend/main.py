from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Create FastAPI instance
app = FastAPI(title="MRU Hacks 2025 Backend", version="1.0.0")

# Configure CORS to allow requests from your React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root endpoint
@app.get("/")
async def read_root():
    return {"message": "Welcome to MRU Hacks 2025 Backend API!"}

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "mru-hacks-backend"}

# Example API endpoint
@app.get("/api/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello, {name}! Welcome to MRU Hacks 2025!"}

# Example POST endpoint
@app.post("/api/data")
async def create_data(data: dict):
    return {"received": data, "status": "success"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)