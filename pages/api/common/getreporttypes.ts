import ReportType from "../../../models/reporttype";

import _ from "lodash";

const handler = async function handler(req:any, res:any) {

    if (req.method == "POST") {
        let reporttypes = await ReportType.find();
        return res.status(200).send(reporttypes)
    }
    return res.status(404).send("Error")
}

export default handler;
