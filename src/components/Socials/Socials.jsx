import styles from "./Socials.module.scss";
import discord from "../../images/socials/discord.svg";
import github from "../../images/socials/github.svg";
import vk from "../../images/socials/vk.svg";

const Socials = ({ currentSection }) => {
  return (
    <div
      className={styles.socials}
      style={
        currentSection === "contact_section"
          ? {
              flexDirection: "row",
              zIndex: "110",
              top: "unset",
              bottom: "30px",
              left: "50%",
              transform: "translateX(-50%)",
              height: "42px",
            }
          : null
      }
    >
      <img
        src={github}
        alt="github"
        onClick={() => window.open("https:/github.com/MaksChocomint")}
      />
      <img src={discord} alt="discord" />
      <img
        src={vk}
        alt="vk"
        onClick={() => window.open("https://vk.com/id164714748")}
      />
    </div>
  );
};

export default Socials;
