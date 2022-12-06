import mongoose from "mongoose"
var Schema = mongoose.Schema;

var reporttypeSchema = new Schema(
    {
        label:{
            type:String,
            required:true,
        },
        value:{
            type:Number,
            required:true,
        }
    }
)

var ReportType = mongoose.models.ReportType || mongoose.model("ReportType", reporttypeSchema)

export default ReportType