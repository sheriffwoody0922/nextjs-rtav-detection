import mongoose from "mongoose"
var Schema = mongoose.Schema;

var reporttypeSchema = new Schema(
    {
        typename:{
            type:String,
            required:true,
        },
        typeprice:{
            type:Number,
            required:true,
        }
    }
)

var ReportType = mongoose.models.ReportType || mongoose.model("ReportType", reporttypeSchema)

export default ReportType