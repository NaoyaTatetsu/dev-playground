"""Ping Schemas Module."""

from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class UserSchema(BaseModel):
    """Ping Schema Class."""

    pong: str
