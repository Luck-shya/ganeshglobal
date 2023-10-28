const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://ganeshglobalsolution:x1eNxheWDOB487oI@Cluster0.dtkso4t.mongodb.net/contacts",
  { useNewUrlParser: true }
);
