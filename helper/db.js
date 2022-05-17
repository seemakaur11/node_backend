import mongoose from "mongoose";

const url = "mongodb://localhost:27017/usersdb";

mongoose.connect(url, (err) => {
  if (!err) {
    console.log("MongoDB connected to database");
  } else {
    console.log("Error while connectiong to database");
  }
});
