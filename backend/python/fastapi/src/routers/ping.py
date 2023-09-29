"""Ping API Router."""

import logging
from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
# from sqlalchemy.orm import Session
# from sqlalchemy.orm.exc import NoResultFound

from schemas.ping import PingSchema

# from app.cruds import ping as cruds

router = APIRouter(
    prefix="/api",
    tags=["system"]
)

@router.get("/ping", response_model=PingSchema)
def ping() -> PingSchema:
    """Ping API."""
    return {"pong": "pong"}
