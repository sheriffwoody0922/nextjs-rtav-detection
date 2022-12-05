import Report from "../../../../models/report";

import _ from "lodash";

const handler = async function handler(req:any, res:any) {
    if (req.method == "POST") {
        console.log(req.body.flag)
        if(req.body.flag === "all")
        {
            let reports = await Report.find({}).populate({ path: 'reportowner', select:'name whatsapp reportlimit reportnumber'}).populate({ path:'reporttype', select:'typename'});
            return res.status(200).send(reports);
        }
        let reports = await Report.find({reportflag:req.body.flag,}).populate({ path: 'reportowner', select:'name whatsapp reportlimit reportnumber'}).populate({ path:'reporttype', select:'typename'});
        return res.status(200).send(reports)
    }
    return res.status(404).send("Error")
}

export default handler;
