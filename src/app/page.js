"use client";
import Image from "next/image";
import styles from "./page.module.css";
import download from "./assets/downloadBtn.svg";
import Hero from "./assets/HeroImgNew.webp";
import Link from "next/link";
import s1 from "./assets/stripe1.svg";
import s2 from "./assets/stripe2.svg";
import credit from "./assets/credit.webp";
import loans from "./assets/loan.webp";
import buy from "./assets/BNPL.webp";
import sav from "./assets/AccountSave.webp";
import Indus from "./assets/IndusInd.webp";
import ici from "./assets/Icici.webp";
import Amex from "./assets/Amex.webp";
import Bob from "./assets/Bob.webp";
import Axis from "./assets/Axis.webp";
import Idfc from "./assets/Idfc.webp";
import Aufin from "./assets/Aufin.webp";
import StandardChartered from "./assets/StandardChartered.webp";
import YesBank from "./assets/YesBank.webp";
import Bajaj from "./assets/Bajaj.webp";
import Why from "./assets/whyUsHero.webp";
import Zero from "./assets/zero_investment.d5743aab.svg";
import Quick from "./assets/quick_payout.1d689e09.svg";
import Limit from "./assets/financialProduct.1b3d6eec.svg";
import Fin from "./assets/Fin_products.0e8a0582.svg";
import Customer from "./assets/customerSupport.5780cd23.svg";


import Icon_support from "./assets/Icon_support.c8382fc1.svg";


import { motion, useAnimation, AnimatePresence } from "framer-motion";

export default function Home() {
  const start_animation = (event) => {
    var card = event.target.closest(`.${styles.card}`);
    var offset = card.getBoundingClientRect();
    var x = event.nativeEvent.clientX - offset.left;
    var y = event.nativeEvent.clientY - offset.top;
    // var divPos = [x,y];
    var divPos = [x / offset.width, y / offset.height]; // 0 to 1 range
    // changing to -1 to 1 range
    divPos[0] = divPos[0] * 2 - 1;
    divPos[1] = divPos[1] * 2 - 1;

    // console.log("mouse position(-1 to 1):",divPos)

    // change the sign
    divPos[0] = divPos[0] * -1;
    divPos[1] = divPos[1] * -1;

    // scaling factor
    divPos[0] *= 10; // x width-wise
    divPos[1] *= 5; // y height-wise

    // console.log(offset)

    card.style.transform = `perspective(1000px) rotateX(${divPos[1]}deg) rotateY(${divPos[0]}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s";
    card.style.backgroundColor = "white";
    card.querySelector("div>img").style.filter = "grayscale(0%)";
  };
  const stop_animation = (event) => {
    var card = event.target.closest(`.${styles.card}`);
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1.0, 1.0, 1.0)";
    card.style.backgroundColor = "";
    card.querySelector("div>img").style.removeProperty("filter");
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          key="modal"
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
          className={styles.whole}
        >
          <div className={styles.home}>
            <div className={styles.content}>
              <h1>
                Becoming a Financial Advisor and{" "}
                <span>Earn Rs.1 Lakh/Month</span>
              </h1>

              <p>No investment required</p>
              <div>
                <Link
                  href="https://play.google.com/store/apps/details?id=in.onecode.app"
                  passHref={true}
                  target="_blank"
                >
                  {" "}
                  <Image src={download} alt="play store" />
                </Link>
              </div>
            </div>
            <div className={styles.pic}>
              <Image src={Hero} alt="Hero" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Brands */}
      <div className={styles.brands}>
        <h2>Top Brands on ZET</h2>
        <p>We are trusted by best brand in the country</p>
        <motion.div className={styles.slider}>
          <div className={styles.eachprod}>
            <Image src={Indus} alt="SBI" />
          </div>
          <div className={styles.eachprod}>
            <Image src={ici} alt="ICICI" />
          </div>
          <div className={styles.eachprod}>
            <Image src={Amex} alt="Amex" />
          </div>
          <div className={styles.eachprod}>
            <Image src={Bob} alt="Bob" />
          </div>
          <div className={styles.eachprod}>
            <Image src={Axis} alt="Axis" />
          </div>
          <div className={styles.eachprod}>
            <Image src={Idfc} alt="Idfc" />
          </div>

          <div className={styles.eachprod}>
            <Image src={StandardChartered} alt="Standard Chartered" />
          </div>
          <div className={styles.eachprod}>
            <Image src={Aufin} alt="Aufin" />
          </div>
          <div className={styles.eachprod}>
            <Image src={YesBank} alt="Yes Bank" />
          </div>
          <div className={styles.eachprod}>
            <Image src={Bajaj} alt="Bajaj" />
          </div>
        </motion.div>
      </div>

      {/* Products */}
      <div className={styles.products}>
        <div className={styles.brands}>
          <h2>Products on ZET</h2>
          <p>We are trusted by best brand in the country</p>
        </div>

        {/* <AnimatePresence>
        <motion.div initial={{ opacity: 0 }}
         key="modal"
         animate = {{opacity: 1, transition:{duration: 0.8}}}
        exit={{ opacity: 0 }} className={styles.cards}> */}

        <motion.div
          // set the initial state of the element
          initial={{ opacity: 0, y: 50 }}
          // set the final state of the element when it is in view
          whileInView={{ opacity: 1, y: 0 }}
          // use transition prop to customize the animation duration and easing
          transition={{ duration: 0.8 }}
          className={styles.cards}
        >
          <Image src={s1} alt="s1" className={styles.s1} />
          <Image src={s2} alt="s2" className={styles.s2} />

          <div
            className={`${styles.card} && ${styles.card1}`}
            onMouseMove={start_animation}
            onMouseLeave={stop_animation}
          >
            <div className={styles.i1}>
              <Image src={credit} alt="Credit" />
            </div>
            <div className={styles.matter}>
              <p className={styles.m1}>CREDIT CARDS</p>
              <p className={styles.m2}>
                100% Contactless Application Process with Instant Approval From
                Top Banks.
              </p>
            </div>
          </div>

          <div
            className={`${styles.card} && ${styles.card2}`}
            onMouseMove={start_animation}
            onMouseLeave={stop_animation}
          >
            <div className={styles.i1}>
              <Image src={loans} alt="Loans" />
            </div>
            <div className={styles.matter}>
              <p className={styles.m1}>Loans</p>
              <p className={styles.m2}>
                1100% online process. Instant offers. Affordable Rate of
                Interest on loans.
              </p>
            </div>
          </div>

          <div
            className={`${styles.card} && ${styles.card3}`}
            onMouseMove={start_animation}
            onMouseLeave={stop_animation}
          >
            <div className={styles.i1}>
              <Image src={buy} alt="BNPL" />
            </div>
            <div className={styles.matter}>
              <p className={styles.m1}>BUY NOW PAY LATER</p>
              <p className={styles.m2}>
                Short-term financing that allows consumers to make purchases and
                pay for them over time.
              </p>
            </div>
          </div>

          <div
            className={`${styles.card} && ${styles.card4}`}
            onMouseMove={start_animation}
            onMouseLeave={stop_animation}
          >
            <div className={styles.i1}>
              <Image src={sav} alt="Savings" />
            </div>
            <div className={styles.matter}>
              <p className={styles.m1}>Saving Account</p>
              <p className={styles.m2}>
                ZET offers range of savings account that suits your personal
                needs for the banking.
              </p>
            </div>
          </div>
        </motion.div>
        {/* </AnimatePresence> */}
      </div>

      {/* The Zet Effect */}

      {/* Why Choose Us */}
      <div className={styles.choice1}>
        <div className={styles.why}>
          <h2 className={styles.m2}>
            Why is <span className={styles.txtc}>ZET</span> the right choice for
            you?
          </h2>
          <Image src={Why} alt="Why Us?" />
        </div>
        <div className={styles.choice2}>
          <div className={styles.whyusbtn}>
            <Image src={Zero} alt="Zero Investment" />
            <p className={styles.t1}>Zero Investment</p>
            <p className={styles.t2}>
              Build your business without any investment
            </p>
          </div>
          <div className={styles.whyusbtn}>
            <Image src={Quick} alt="Quick Payout" />
            <p className={styles.t1}>Quick Payout</p>
            <p className={styles.t2}>
            Receive payout directly in your bank account in shortest time
            </p>
          </div>
          <div className={styles.whyusbtn}>
            <Image src={Fin} alt="Fin" />
            <p className={styles.t1}>Limitless Earnings</p>
            <p className={styles.t2}>
            No cap on your earnings & growth opportunity
            </p>
          </div>
          <div className={styles.whyusbtn}>
            <Image src={Icon_support} alt="Icon_support" />
            <p className={styles.t1}>Training & Upskilling</p>
            <p className={styles.t2}>
            Get trained by finance and sales experts for free
            </p>
          </div>
          <div className={styles.whyusbtn}>
            <Image src={Customer} alt="Customer" />
            <p className={styles.t1}>Customer Support</p>
            <p className={styles.t2}>
            Access tools and content to build relationship
            </p>
          </div>
          <div className={styles.whyusbtn}>
            <Image src={Limit} alt="Top Products" />
            <p className={styles.t1}>Top Products</p>
            <p className={styles.t2}>
            Trustworthy and high-rated financial products & categories to choose from
            </p>
          </div>
        </div>
      </div>

      {/* Earning */}
    </>
  );
}
