import { useRouter } from "next/router";

import styles from '../styles/Home.module.css';

export default function Home() {

  const router = useRouter();

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <div className="w-64">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded" onClick={()=>router.push('/auth/login')}>
            Login
          </button>
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded" onClick={()=>router.push('/auth/register')}>
            Register
          </button>
        </div>
      </main>
    </div>
  )
}
