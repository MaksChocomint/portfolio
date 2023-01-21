import styles from "./ControlArrows.module.scss";
import arrow from "../../images/control/arrow.svg";

const ControlArrows = ({
  setProject,
  project,
  projectListLength,
  setProjectNameStyle,
  setWork,
  work,
  workListLength,
  setWorkNameStyle,
}) => {
  return (
    <div className={styles.control_arrows}>
      <img
        src={arrow}
        alt="Arrow"
        className={styles.control_arrow}
        onClick={() => {
          if (project > 1) {
            setProjectNameStyle({ opacity: 0 });
            setProject((prevProject) => prevProject - 1);
            setTimeout(() => {
              setProjectNameStyle({ transition: "1s", opacity: 1 });
            }, 200);
          }
          if (work > 1) {
            setWorkNameStyle({ opacity: 0 });
            setWork((prevWork) => prevWork - 1);
            setTimeout(() => {
              setWorkNameStyle({ transition: "1s", opacity: 1 });
            }, 200);
          }
        }}
      />
      <img
        src={arrow}
        alt="Arrow"
        className={styles.control_arrow}
        style={{ rotate: "180deg" }}
        onClick={() => {
          if (project < projectListLength) {
            setProjectNameStyle({ opacity: 0 });
            setProject((prevProject) => prevProject + 1);
            setTimeout(() => {
              setProjectNameStyle({ transition: "1s", opacity: 1 });
            }, 200);
          }
          if (work < workListLength) {
            setWorkNameStyle({ opacity: 0 });
            setWork((prevWork) => prevWork + 1);
            setTimeout(() => {
              setWorkNameStyle({ transition: "1s", opacity: 1 });
            }, 200);
          }
        }}
      />
    </div>
  );
};

export default ControlArrows;
