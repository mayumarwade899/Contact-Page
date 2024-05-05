import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";

function ContactForm() {
  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.top_button}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<IoCall fontSize="24px" />} />
        </div>
      </div>
      <div className={styles.contactImage}></div>
    </section>
  );
}

export default ContactForm;
