import Report from "../../../../models/report";

import _ from "lodash";

const handler = async function handler(req:any, res:any) {
    if (req.method == "POST") {

        const filter = {_id:req.body._id};
        const data = {
            reportfine:req.body.fine,
            reportedcar:req.body.car,
            sendedwhatsapp:req.body.whatsapp,
            reportflag:req.body.flag
        }
        await Report.findOneAndUpdate(filter, data);
        return res.status(200).send("Success")
    }
    return res.status(404).send("Error")
}

export default handler;
