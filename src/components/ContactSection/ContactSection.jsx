import { useRef, useState } from "react";
import Socials from "../Socials/Socials";
import styles from "./ContactSection.module.scss";
import emailjs from "@emailjs/browser";

const ContactSection = ({ setCurrentSection, currentSection }) => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setIsSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setIsSuccess(false);
        }
      );
  };

  return (
    <div className={styles.contact_section}>
      <Socials currentSection={currentSection} />
      <div className={styles.back} onClick={() => setCurrentSection("welcome")}>
        {"< go back"}
      </div>
      <div className={styles.contact_section_content}>
        <div className={styles.contact_section_title}>
          <div className={styles.contact_section_title_rectangle}></div>
          <div className={styles.contact_section_title_text}>contact me</div>
          <div className={styles.contact_section_title_rectangle}></div>
        </div>
        <form
          className={styles.contact_section_form}
          onSubmit={sendEmail}
          ref={form}
        >
          <div className={styles.contact_section_email_text}>email :</div>
          <input
            className={styles.contact_section_email_input}
            placeholder="youremail@gmail.com"
            name="email"
            type="email"
            autoComplete="off"
            required
          />
          <div className={styles.contact_section_subject_text}>subject :</div>
          <input
            className={styles.contact_section_subject_input}
            placeholder="subject"
            name="subject"
            autoComplete="off"
          />
          <div className={styles.contact_section_content_text}>content :</div>
          <textarea
            className={styles.contact_section_content_textarea}
            placeholder="message"
            name="content"
            autoComplete="off"
            required
          />
          <button className={styles.contact_section_submit_btn} type="submit">
            submit
          </button>
        </form>
      </div>
      {isSuccess && (
        <>
          <div className={styles.black_back}></div>
          <div className={styles.success_message}>
            <div className={styles.success_message_text}>
              <p>your message sent successfully!</p>
              <span className={styles.success_message_thank}>thank you!</span>
            </div>
            <button
              className={styles.contact_section_submit_btn}
              onClick={() => setIsSuccess(false)}
            >
              ok
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactSection;
