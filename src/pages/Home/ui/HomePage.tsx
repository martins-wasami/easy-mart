import { Footer } from '@/widgets/Footer'
import styles from './HomePage.module.scss'

import { Header } from '@/widgets/Header'

const HomePage = () => {
  


  return (
    <div className={styles.pageWrapper}>
    <Header/>
    <main className={styles.content}>
     <h1>home page</h1>
    </main>
    <Footer/>
    </div>
  )
}
export default HomePage