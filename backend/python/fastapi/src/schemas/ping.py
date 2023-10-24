"""Ping Schemas Module."""

from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class PingSchema(BaseModel):
    """Ping Schema Class."""

    message: str
