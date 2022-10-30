import mongoose from "mongoose";
var Schema = mongoose.Schema;
import User from "./user";

var carSchema = new Schema(
    {
      carnumber: {
        type: String,
        required: true,
      },
      owner: {type: mongoose.Types.ObjectId, ref: "User"}
    },
    { timestamps: true }
);

var Car = mongoose.models.Car || mongoose.model("Car", carSchema);

export default Car;
