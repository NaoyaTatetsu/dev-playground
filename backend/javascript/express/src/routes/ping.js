"use strict";

import express from "express";

const router = express.Router();

/**
 * ping
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
