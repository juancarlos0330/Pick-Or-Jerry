import React from "react";
import styles from "../assets/scss/contact.module.scss";
import JerryImg from "../assets/png/jerry.png";
import ContactImg from "../assets/png/contact_text.png";
import LinkTextImg from "../assets/png/link_text.png";
import AuditImg from "../assets/png/audit.png";
import ArrowBottomImg from "../assets/png/arrow_bottom.png";
import EmailImg from "../assets/png/email.png";

const Contacts = () => {
  return (
    <div className={styles.main}>
      <div className={styles.jerryView}>
        <img src={JerryImg} alt="jerry" />
      </div>
      <div className={styles.contactView}>
        <img src={ContactImg} alt="text" />
      </div>
      <a href="mailto:pickles@pickorjerry.com" className={styles.emailView}>
        <img src={EmailImg} alt="text" />
      </a>
      <div className={styles.linkView}>
        <img src={LinkTextImg} alt="text" />
      </div>
      <div className={styles.arrowBottomView}>
        <img src={ArrowBottomImg} alt="text" />
      </div>
      <a
        href="/pickorjerryAudit.pdf"
        target="_blank"
        className={styles.auditView}
      >
        <img src={AuditImg} alt="text" />
      </a>
    </div>
  );
};

export default Contacts;
