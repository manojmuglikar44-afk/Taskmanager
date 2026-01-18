from sqlalchemy import Column, Integer, String, Boolean, DateTime
from database import Base

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=True)
    due_date = Column(DateTime, nullable=True)
    priority = Column(String, default="Medium")
    completed = Column(Boolean, default=False)
