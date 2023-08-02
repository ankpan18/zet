'use client';
import Link from 'next/link';
import styles from '../Navbar.module.css';
import Logo from '../assets/logo.svg';
import Exp from '../assets/bars-solid.svg';
import Close from '../assets/close.svg';
import Image from 'next/image';



const handleClick = (event) => {
  // do something when the image is clicked
  var header=document.getElementsByClassName(styles.head)[0];
  var btn=event.target;

  // console.log(header);
  
  header.classList.toggle(styles.expand);
  if (header.classList.contains(styles.expand)){
    btn.src=Close.src;
    btn.alt="Close";
  }
  else{
    btn.src=Exp.src;
    btn.alt="Expand";
  }
  // btn.classList.toggle(styles.expand);
  
}


const Navbar=()=> {
  return (
    <div className={styles.navbar}>
    <div className={styles.links}>
      <div className={styles.im}>
      <Image src={Logo} alt="Zet Logo" className={styles.ilogo}/>
      {/* <Image src={Close} alt="Expand" className={styles.expand}/> */}
      <Image src={Exp} alt="Expand" className={styles.toggle_btn}	onClick={handleClick}/>
      </div>
      <div className={styles.head}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        {/* <Link href="/profile">Partner With Us</Link>
        <Link href="/blog">Blog</Link> */}
        <div className={styles.btndiv}>
        <Link href="https://play.google.com/store/apps/details?id=in.onecode.app"><button className={styles.btn}>Download ZET</button></Link>
        {/* <button className={styles.btn}>Download ZET</button> */}
        </div>
        </div>
       
      
    </div></div>
  )
}

export default Navbar;