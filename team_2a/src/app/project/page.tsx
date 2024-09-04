import styles from "../../../styles/project.module.css";
import Header from "../../components/Header";
import BookContent from "../../components/Book";

export default function Home() {
  return (
    <>
    <Header/>
    <div className={styles.main}>
    <div className={styles.project_title}>〇〇部署　〇〇〇〇プロジェクト</div>
    <div className={styles.detail_box}>
      <div className={styles.detail_content}>ここに使用技術や進捗など</div>
    </div>
    <div>
      <div className={styles.subtitle}>関連書籍</div>
      <div>
        <BookContent url="https://www.amazon.co.jp/%E3%80%8C%E6%8A%80%E8%A1%93%E6%9B%B8%E3%80%8D%E3%81%AE%E8%AA%AD%E6%9B%B8%E8%A1%93-%E9%81%94%E4%BA%BA%E3%81%8C%E6%95%99%E3%81%88%E3%82%8B%E9%81%B8%E3%81%B3%E6%96%B9%E3%83%BB%E8%AA%AD%E3%81%BF%E6%96%B9%E3%83%BB%E6%83%85%E5%A0%B1%E7%99%BA%E4%BF%A1-%E5%85%B1%E6%9C%89%E3%81%AE%E3%82%B3%E3%83%84%E3%81%A8%E3%83%86%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF-IPUSIRON/dp/4798171549/ref=sr_1_1_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=27N28C5T8C3ER&dib=eyJ2IjoiMSJ9.__rZ8fxg4QqFSlFWW-5C2Y6OT3Y2vBnuMW_og6SlD3D94jc9j83ZS5u8aP6ibhis2q9oSusgsS9QNuQFM3eOTRBpB45eWwXqW1rgmev95eJQ51N9j8LPKI4VH4ZuYpsWDpj-BJ-vjlfuiuSxoSzNol_T--uUgIVJdLUdgpO3Ljvsdh-iOhoHz_uq-BCkNG3T8DT30GOZYuUGPg00GtSg5ZvHude7ut3sXmWn7gFEl0Ak7cebroiHskw3aRf5K4GHnAELHJjULFfnpHvvLiLef4zuUPV87T8fEaWzJa-mSrE.61ICQ2Im7I9qoRW9X1pA0ejVZS4Wq-uJv3l67MFQAw0&dib_tag=se&keywords=%E6%8A%80%E8%A1%93%E6%9B%B8&qid=1725437835&sprefix=%E6%8A%80%E8%A1%93%E6%9B%B8%2Caps%2C144&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" />
        <BookContent url="https://www.amazon.co.jp/%E7%A7%81%E3%81%AF%E3%81%A9%E3%81%AE%E3%82%88%E3%81%86%E3%81%AB%E3%81%97%E3%81%A6Linux%E3%82%AB%E3%83%BC%E3%83%8D%E3%83%AB%E3%82%92%E5%AD%A6%E3%82%93%E3%81%A0%E3%81%8B%E3%82%86%E3%81%9F%E3%81%8B%E3%81%95%E3%82%93%E3%81%AE%E6%8A%80%E8%A1%93%E6%9B%B8-%E5%B9%B3%E7%94%B0%E8%B1%8A-ebook/dp/B07VJKJY7M/ref=sr_1_6?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=27N28C5T8C3ER&dib=eyJ2IjoiMSJ9.__rZ8fxg4QqFSlFWW-5C2Y6OT3Y2vBnuMW_og6SlD3D94jc9j83ZS5u8aP6ibhis2q9oSusgsS9QNuQFM3eOTRBpB45eWwXqW1rgmev95eJQ51N9j8LPKI4VH4ZuYpsWDpj-BJ-vjlfuiuSxoSzNol_T--uUgIVJdLUdgpO3Ljvsdh-iOhoHz_uq-BCkNG3T8DT30GOZYuUGPg00GtSg5ZvHude7ut3sXmWn7gFEl0Ak7cebroiHskw3aRf5K4GHnAELHJjULFfnpHvvLiLef4zuUPV87T8fEaWzJa-mSrE.61ICQ2Im7I9qoRW9X1pA0ejVZS4Wq-uJv3l67MFQAw0&dib_tag=se&keywords=%E6%8A%80%E8%A1%93%E6%9B%B8&qid=1725437835&sprefix=%E6%8A%80%E8%A1%93%E6%9B%B8%2Caps%2C144&sr=8-6" />
        <BookContent url="https://www.amazon.co.jp/%E3%81%93%E3%82%8C%E3%81%8B%E3%82%89%E3%81%AF%E3%81%98%E3%82%81%E3%82%8BReact%E5%AE%9F%E8%B7%B5%E5%85%A5%E9%96%80-%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%81%8B%E3%82%89Next-js%E3%81%AB%E3%82%88%E3%82%8B%E3%82%A2%E3%83%97%E3%83%AA%E9%96%8B%E7%99%BA%E3%81%BE%E3%81%A7-%E5%B1%B1%E7%94%B0-%E7%A5%A5%E5%AF%9B/dp/4815619484/ref=sr_1_12_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=27N28C5T8C3ER&dib=eyJ2IjoiMSJ9.__rZ8fxg4QqFSlFWW-5C2Y6OT3Y2vBnuMW_og6SlD3D94jc9j83ZS5u8aP6ibhis2q9oSusgsS9QNuQFM3eOTRBpB45eWwXqW1rgmev95eJQ51N9j8LPKI4VH4ZuYpsWDpj-BJ-vjlfuiuSxoSzNol_T--uUgIVJdLUdgpO3Ljvsdh-iOhoHz_uq-BCkNG3T8DT30GOZYuUGPg00GtSg5ZvHude7ut3sXmWn7gFEl0Ak7cebroiHskw3aRf5K4GHnAELHJjULFfnpHvvLiLef4zuUPV87T8fEaWzJa-mSrE.61ICQ2Im7I9qoRW9X1pA0ejVZS4Wq-uJv3l67MFQAw0&dib_tag=se&keywords=%E6%8A%80%E8%A1%93%E6%9B%B8&qid=1725437835&sprefix=%E6%8A%80%E8%A1%93%E6%9B%B8%2Caps%2C144&sr=8-12-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1" />
        <BookContent url="https://www.amazon.co.jp/Python%E3%81%A8Pygame%E3%81%A7%E4%BD%9C%E3%82%8B-%E3%83%AC%E3%83%88%E3%83%AD%E9%A2%A8RPG-%E5%85%A8%E3%82%B3%E3%83%BC%E3%83%89-%E3%82%8B%E3%81%A6%E3%82%93%E3%81%AE%E3%83%97%E3%83%81%E6%8A%80%E8%A1%93%E6%9B%B8-%E6%9F%B3%E4%BA%95-ebook/dp/B0DD1PSKWQ/ref=sr_1_32?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=27N28C5T8C3ER&dib=eyJ2IjoiMSJ9.__rZ8fxg4QqFSlFWW-5C2Y6OT3Y2vBnuMW_og6SlD3D94jc9j83ZS5u8aP6ibhis2q9oSusgsS9QNuQFM3eOTRBpB45eWwXqW1rgmev95eJQ51N9j8LPKI4VH4ZuYpsWDpj-BJ-vjlfuiuSxoSzNol_T--uUgIVJdLUdgpO3Ljvsdh-iOhoHz_uq-BCkNG3T8DT30GOZYuUGPg00GtSg5ZvHude7ut3sXmWn7gFEl0Ak7cebroiHskw3aRf5K4GHnAELHJjULFfnpHvvLiLef4zuUPV87T8fEaWzJa-mSrE.61ICQ2Im7I9qoRW9X1pA0ejVZS4Wq-uJv3l67MFQAw0&dib_tag=se&keywords=%E6%8A%80%E8%A1%93%E6%9B%B8&qid=1725437835&sprefix=%E6%8A%80%E8%A1%93%E6%9B%B8%2Caps%2C144&sr=8-32" />
      </div>
    </div>
    </div>
    </>
  );
}
