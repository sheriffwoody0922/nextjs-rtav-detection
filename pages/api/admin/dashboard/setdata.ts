import Report from "../../../../models/report";
import ReportType from "../../../../models/reporttype";

import _ from "lodash";

const handler = async function handler(req:any, res:any) {
    if (req.method == "POST") {

        console.log(req.body);

        let rtype = await ReportType.findOne({
            typename: req.body.type,
        });

        if (!rtype) return res.status(400).send({ rType: "Account Does Not Exist" });

        const filter = {_id:req.body._id};
        const data = {
            reportfine:req.body.fine,
            reportedcar:req.body.car,
            sendedwhatsapp:req.body.whatsapp,
            reportflag:req.body.flag,
            reporttype:rtype._id,
        }
        await Report.findOneAndUpdate(filter, data);
        return res.status(200).send("Success")
    }
    return res.status(404).send("Error")
}

export default handler;
