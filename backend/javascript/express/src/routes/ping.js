"use strict";

import express from "express";

const router = express.Router();

/**
 * GET /api/v1/ping
 * pongが返ってくる
 */
router.get("/api/v1/ping", (req, res) => {
  try {
    res.json({ message: "pong" });
    console.log("success GET request");
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
