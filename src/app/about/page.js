import Image from 'next/image';
import mis from '../assets/OurMission.webp';
import styles from './about.module.css';
export default function About() {
  return (
    <div className={styles.ahead}>
      <Image src={mis} alt=""/>
      <div className={styles.cont}>
      <h1>Our Mission</h1>
      </div>
    </div>
  );
}
