"use strict";

// create instance express module
import express from "express";
import router from "./routes/index.js";

const app = express();

router(app);

// run server at 3000port
app.listen(3000, () => {
  console.log("Running at Port 3000...");
});
