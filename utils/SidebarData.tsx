
import ReportIcon from '@mui/icons-material/Report';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PaidIcon from '@mui/icons-material/Paid';
import VerifiedIcon from '@mui/icons-material/Verified';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const sidebardata:any[] = [
        {
            key:"main",
            data:[
                {
                    id:1,
                    key:"new",
                    name:"New Incident",
                    icon:<FiberNewIcon />
                },{
                    id:2,
                    key:"check",
                    name:"Checked",
                    icon:<CheckBoxIcon />
                },{
                    id:3,
                    key:"fine",
                    name:"Fined",
                    icon:<PaidIcon />
                },{
                    id:4,
                    key:"paid",
                    name:"Paid",
                    icon:<VerifiedIcon/>
                }
            ],
        },
        {
            key:"add",
            data:[
                {
                    id:5,
                    key:"all",
                    name:"All Incident",
                    icon:<ReportIcon />
                },
                {
                    id:6,
                    key:"trash",
                    name:"Trash",
                    icon:<DeleteForeverIcon/>
                },{
                    id:7,
                    key:"cancel",
                    name:"Canceled",
                    icon:<DoNotDisturbOnIcon/>
                }
            ]
        }
]

export const datastatus:any[] = [
    {
        current:"new",
        upgrade:"check",
        cancel:"cancel"
    },
    {
        current:"check",
        upgrade:"fine",
        cancel:"cancel"
    },
    {
        current:"fine",
        upgrade:"paid",
        cancel:"cancel"
    },{
        current:"paid",
        upgrade:"paid",
        cancel:"cancel"
    },{
        current:"cancel",
        upgrade:"trash",
        cancel:"new",
    },{
        current:"trash",
        upgrade:"new",
        cancel:"new",
    }
]