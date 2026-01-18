from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Task


router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/tasks")
def list_tasks(db: Session = Depends(get_db)):
    return db.query(Task).all()

@router.post("/tasks")
def create_task(task: dict, db: Session = Depends(get_db)):
    new_task = Task(**task)
    db.add(new_task)
    db.commit()
    db.refresh(new_task)
    return new_task

@router.post("/tasks/{task_id}/complete")
def complete_task(task_id: int, db: Session = Depends(get_db)):
    task = db.query(Task).filter(Task.id == task_id).first()
    task.completed = True
    db.commit()
    return {"status": "completed"}

