import mongoose from "mongoose";
var Schema = mongoose.Schema;
const User = require("./user");
const ReportType = require("./reporttype");
var reportSchema = new Schema(
    {
      reportowner: {
        type: mongoose.Types.ObjectId, 
        ref: "User"
      },
      reporttype: {
        type: mongoose.Types.ObjectId,
        ref: "ReportType"
      },
      reportmedia: {
        filetype: {
          type: String,
        },
        filepath: {
          type:String,
        }
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
  