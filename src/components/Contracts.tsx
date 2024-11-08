import React from "react";
import styles from "../assets/scss/contract.module.scss";
import ContractTextImg from "../assets/png/contract_text.png";
import ContractAddressImg from "../assets/png/contract_address.png";
import PersonalTextImg from "../assets/png/personal_text.png";

const Contracts = () => {
  return (
    <div className={styles.main}>
      <div className={styles.personalTextView}>
        <img src={PersonalTextImg} alt="personal" />
      </div>
      <div className={styles.contractTextView}>
        <img src={ContractTextImg} alt="contract" />
      </div>
      <a
        href="https://etherscan.io/address/0xFD73B2567ef98CF1A9Bfff3fe226014C7bab3908"
        target="_blank"
        className={styles.contractAddressView}
      >
        <img src={ContractAddressImg} alt="contract address" />
      </a>
    </div>
  );
};

export default Contracts;
