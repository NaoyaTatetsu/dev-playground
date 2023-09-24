import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PingSchema = new Schema({
  _uid: {
    type: mongoose.Schema.Types.UUID,
    required: true,
  },
  ping: {
    type: String,
  },
});

mongoose.connect("mongodb://mongo:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: "root",
  pass: "example",
  dbName: "mongo_example",
});

const PingModel = mongoose.model("pings", PingSchema);

export default PingModel;
