import React from "react";
import Copyrigth from "../../Sidebar/Copyright";
import Contacts from "../../Sidebar/Contacts";
import styles from "./footer.module.scss";

const Footer = ({ copyright, contacts }) => {
  return (
    <div className={styles["footer-container"]}>
      <Copyrigth copyright={copyright} />
      <Contacts contacts={contacts} className={styles["cont"]} />
    </div>
  );
};

export default Footer;
