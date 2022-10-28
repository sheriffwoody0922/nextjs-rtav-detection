
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
                    key:"new",
                    name:"New Incident",
                    icon:<FiberNewIcon />
                },{
                    key:"check",
                    name:"Checked",
                    icon:<CheckBoxIcon />
                },{
                    key:"fine",
                    name:"Fined",
                    icon:<PaidIcon />
                },{
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
                    key:"all",
                    name:"All Incident",
                    icon:<ReportIcon />
                },
                {
                    key:"trash",
                    name:"Trash",
                    icon:<DeleteForeverIcon/>
                },{
                    key:"cancel",
                    name:"Canceled",
                    icon:<DoNotDisturbOnIcon/>
                }
            ]
        }
]