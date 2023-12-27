from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class User(BaseModel):
    id: int
    name:str
    email:str

users_db = []

@app.post("/users/", response_model=User)
def create_user(user: User):
    users_db.append(user)
    return user

@app.get("/users/", response_model=List[User])
def read_users():
    return users_db

@app.get("/users/{user_id}", response_model=User)
def read_user(user_id: int):
    for user in users_db:
        if user.id == user_id:
            return user
    return None

@app.put("/users/{user_id}", response_model=User)
def update_user(user_id: int, updated_user: User):
    for i, user in enumerate(users_db):
        if user.id == user_id:
            users_db[i] = updated_user
            return updated_user
    return None

@app.delete("/users/{user_id}", response_model=User)
def delete_user(user_id: int):
    for i, user in enumerate(users_db):
        if user.id == user_id:
            deleted_user = users_db.pop(i)
            return deleted_user
    return None

