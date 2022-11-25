import { useRouter } from "next/router";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputIcon from '@mui/icons-material/Input';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import styles from '../styles/Home.module.css';

export default function Home() {

  const router = useRouter();

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Box
          component="form"
          sx={{
           m: 4, width: '300px'
          }}
          noValidate
          autoComplete="off"
        >
          <Button className={styles.logobutton} onClick={()=>router.push('/auth/login')} variant="contained" endIcon={<InputIcon />}>
            Login 
          </Button>
          <Button className={styles.logobutton} onClick={()=>router.push('/auth/register')} variant="contained" endIcon={<AppRegistrationIcon />}>
            Register 
          </Button>
        </Box>
      </main>
    </div>
  )
}
