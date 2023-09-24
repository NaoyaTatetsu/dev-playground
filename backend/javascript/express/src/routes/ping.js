"use strict";

import express from "express";
import PingModel from "../models/mongo/ping.js";

const router = express.Router();

/**
 * ping
 */
router.get("/api/v1/ping", (req, res) => {
  try {
    console.log("success GET request");
    return res.json({ message: "pong" });
  } catch (err) {
    res.status(500).send(err);
  }
});

/**
 * deep
 * db access
 */
router.get("/api/v1/deep", async (req, res) => {
  try {
    const [list, totalCount] = await Promise.all([
      PingModel.find({}).exec(),
      PingModel.countDocuments({}),
    ]);
    res.json({
      totalCount,
      list: list.map((obj) => obj.toJSON()),
    });
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
});

export default router;
