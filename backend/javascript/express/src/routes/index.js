import ping from "./ping.js";

export default (app) => {
  app.use("/", ping);
};
