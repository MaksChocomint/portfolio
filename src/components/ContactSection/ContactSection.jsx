import { useState, useEffect } from "react";
import Socials from "../Socials/Socials";
import styles from "./ContactSection.module.scss";

const ContactSection = ({ setCurrentSection, currentSection }) => {
  // const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    _subject: "",
    content: "",
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className={styles.contact_section}>
      <Socials currentSection={currentSection} />
      <div className={styles.back} onClick={() => setCurrentSection("welcome")}>
        {"< go back"}
      </div>
      {/* {!messageSent ? ( */}
      <div className={styles.contact_section_content}>
        <div className={styles.contact_section_title}>
          <div className={styles.contact_section_title_rectangle}></div>
          <div className={styles.contact_section_title_text}>contact me</div>
          <div className={styles.contact_section_title_rectangle}></div>
        </div>
        <form
          className={styles.contact_section_form}
          action="b2d0de3528265432d96e75a08ca999db"
          method="POST"
        >
          <div className={styles.contact_section_email_text}>email :</div>
          <input
            className={styles.contact_section_email_input}
            placeholder="youremail@gmail.com"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prevFormData) => {
                return { ...prevFormData, [e.target.name]: e.target.value };
              })
            }
            required
          />
          <div className={styles.contact_section_subject_text}>subject :</div>
          <input
            className={styles.contact_section_subject_input}
            placeholder="subject"
            name="_subject"
            value={formData.subject}
            onChange={(e) =>
              setFormData((prevFormData) => {
                return { ...prevFormData, [e.target.name]: e.target.value };
              })
            }
          />
          <div className={styles.contact_section_content_text}>content :</div>
          <textarea
            className={styles.contact_section_content_textarea}
            placeholder="message"
            name="content"
            value={formData.content}
            onChange={(e) =>
              setFormData((prevFormData) => {
                return { ...prevFormData, [e.target.name]: e.target.value };
              })
            }
            required
          />
          <button
            className={styles.contact_section_submit_btn}
            type="submit"
            // onClick={(e) => {
            //   e.preventDefault();
            //   setMessageSent(true);
            //   setTimeout(() => setMessageSent(false), 3000);
            // }}
          >
            submit
          </button>
        </form>
      </div>
      {/* ) : (
        <div className={styles.message_sent}>
          Your message has been sent successfully!
        </div>
      )} */}
    </div>
  );
};

export default ContactSection;
