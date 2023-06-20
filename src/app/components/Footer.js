import Image from 'next/image';
import styles from '../Footer.module.css';
import back from '../assets/footer.webp';
import zetlogo from '../assets/zet_logo_white.svg';
import Link from 'next/link';
import Li from '../assets/linkedIn.svg';
import insta from '../assets/instagram.svg';
import face from '../assets/facebook.svg';
import tel from '../assets/Telegram.svg';
import whats from '../assets/whatsapp.svg';
import phone from '../assets/PhoneIcon.webp';
import mail from '../assets/EmailIcon.webp';

function Footer() {
  return (
    <div className={styles.foot}>
        <Image src={back} alt="Background" className={styles.backImage} />

        <div className={styles.fcont}>
            <div className={styles.fbox}>
                <div className={styles.lbox}>
        <Image src={zetlogo} alt="zet" className={styles.zet_logo}/>
        </div>
        <div className={styles.about}>
            <div className={styles.aboutd}>
                <div className={styles.aboutc}>
                    <p>COMPANY</p>
                    <a>About Us</a>
                    <a>Partner With Us</a>
                    <a>Blog</a>

                </div>
                <div className={styles.aboutc}>
                <p>LEGAL</p>

                <a>Privacy Policy</a>
                    <a>Terms of Use</a>
                    {/* <Link to='/blog'>Privacy Policy</Link>
                    <Link to='/blog'>Terms of Us</Link> */}
                    
                </div>

                <div className={styles.aboutc}>
                <p>CONTACT</p>
                   <a><Image src={mail} alt="Mail"  className={styles.cont}/> hi@zetapp.in</a>
                    <a><Image src={phone} alt="Phone" className={styles.cont}/>  +91-7417274072</a>
            
                </div>
                <div className={styles.aboutc}>
                    <p>SOCIAL</p>
                    <div className={styles.social}>
                    <Image src={Li} alt="LinkedIn"/>
                    <Image src={insta} alt="Instagram"/>
                    <Image src={face} alt="Facebook"/>
                    <Image src={tel} alt="Telegram"/>
                    <Image src={whats} alt="WhatsApp"/>
                    </div>
                </div>
            </div>

        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer