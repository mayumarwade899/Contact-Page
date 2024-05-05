import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

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
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<IoMdMail fontSize="24px" />}
        />

        <form>
          <div className={styles.formContainer}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.formContainer}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.formContainer}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="/images/service.svg" alt="contactImage" />
      </div>
    </section>
  );
}

export default ContactForm;
