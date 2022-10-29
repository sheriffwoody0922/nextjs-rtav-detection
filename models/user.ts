import mongoose from "mongoose";
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    whatsapp:{
        type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

var User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
