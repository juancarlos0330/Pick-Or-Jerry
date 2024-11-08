import React from "react";
import styles from "../assets/scss/coin.module.scss";
import FaceImg from "../assets/png/face.png";
import NoseImg from "../assets/png/nose.png";
import NoseHoverImg from "../assets/png/nose_hover.png";
import TelegramImg from "../assets/png/telegram.png";
import TwitterImg from "../assets/png/twitter.png";
import TelegramHoverImg from "../assets/png/telegram_hover.png";
import TwitterHoverImg from "../assets/png/twitter_hover.png";
import ArrowTopImg from "../assets/png/arrow_top.png";
import PressImg from "../assets/png/press_text.png";
import JerryCoinImg from "../assets/png/jerry_coin_text.png";

const Coins = () => {
  return (
    <div className={styles.main}>
      <img src={FaceImg} className={styles.faceimg} alt="image" />
      <a
        href="https://t.me/jerryportal"
        target="_blank"
        className={styles.popTelegramView}
      >
        <img src={TelegramImg} className={styles.popIcon} alt="telegram" />
        <img
          src={TelegramHoverImg}
          className={styles.popHoverIcon}
          alt="telegram"
        />
      </a>
      <a
        href="https://twitter.com/pickorjerrycoin"
        target="_blank"
        className={styles.popTwitterView}
      >
        <img src={TwitterImg} className={styles.popIcon} alt="twitter" />
        <img
          src={TwitterHoverImg}
          className={styles.popHoverIcon}
          alt="twitter"
        />
      </a>
      <a
        href="https://www.dextools.io/app/en/ether/pair-explorer/0xcf6769ad7dcb7254f3f22ebe689828664e1ff1e6"
        target="_blank"
        className={styles.noseView}
      >
        <img src={NoseImg} className={styles.noseimg} alt="nose" />
        <img src={NoseHoverImg} className={styles.nosehoverimg} alt="nose" />
      </a>
      <div className={styles.arrowView}>
        <img className={styles.arrowImg} src={ArrowTopImg} alt="arrow" />
      </div>
      <div className={styles.pressTextView}>
        <img src={PressImg} alt="text" />
      </div>
      <div className={styles.jerryTextView}>
        <img src={JerryCoinImg} alt="jerryText" />
      </div>
    </div>
  );
};

export default Coins;
