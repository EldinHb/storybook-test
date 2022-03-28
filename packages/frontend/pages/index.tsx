import { Card } from '@sbexample/components';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Card
        bodyText='body textbody textbody 
        body textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody text
        body textbody textbody '
        buttonText='Click me'
        headerText='Header'
        imageUrl='https://moview.nl/wp-content/uploads/2018/04/Mountain_RvB-3-bw.jpg'
        onClick={() => alert('clicked')}
      />
    </div>
  )
}

export default Home
