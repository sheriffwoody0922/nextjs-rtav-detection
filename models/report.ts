import mongoose from "mongoose";
var Schema = mongoose.Schema;
const User = require("./user");
var reportSchema = new Schema(
    {
      reportowner: {
        type: mongoose.Types.ObjectId, 
        ref: "User"
      },
      reportvideo: {
        type: String,
        required: true,
      },
      reportgps: {
        type: String,
        required: true,
      },
      reportdate:{
          type: Date,
          required:true,
      },
      reportfine:{
        type: Number,
      },
      reportedcar:{
        type:String,
      },
      sendedwhatsapp: {
        type:String,
      },
      reportflag:{
        type: String,
        required:true,
      },
    },
    { timestamps: true }
  );
  
  var Report = mongoose.models.Report || mongoose.model("Report", reportSchema);
  
  export default Report;
  