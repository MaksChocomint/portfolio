import styles from "./Contact.module.scss";

const Contact = ({ setCurrentSection }) => {
  return (
    <div
      className={styles.contact}
      onClick={() => setCurrentSection("contact_section")}
    >
      contact me
    </div>
  );
};

export default Contact;
