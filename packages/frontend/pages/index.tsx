import { Button } from '@sbexample/components';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button primary>
        hoi
      </Button>
    </div>
  )
}

export default Home
