import Report from "../../../models/report";

import _ from "lodash";

const handler = async function handler(req:any, res:any) {

    if (req.method == "POST") {
        let reports = await Report.find({reportowner:req.body._id}).populate({ path: 'reportowner', select:'name whatsapp reportlimit reportnumber'});
        return res.status(200).send(reports)
    }
    return res.status(404).send("Error")
}

export default handler;
