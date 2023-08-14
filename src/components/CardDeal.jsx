import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/>in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>A bank card, also known as a debit or credit card, 
          is a convenient and secure way to access funds and make purchases, 
          either online or in-person.</p>

          <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />

      </div>
    </section>
  )


export default CardDeal