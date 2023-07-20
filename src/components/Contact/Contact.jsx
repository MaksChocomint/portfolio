import styles from "./Contact.module.scss";

const Contact = ({ setCurrentSection, style }) => {
  return (
    <div
      className={style ? `${styles.contact} ${style}` : styles.contact}
      onClick={() => setCurrentSection("contact_section")}
    >
      contact me
    </div>
  );
};

export default Contact;
