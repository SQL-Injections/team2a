import styles from "../../../styles/project.module.css";
import Header from "../../components/Header";

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
        <a>ここに書籍一覧</a>
      </div>
    </div>
    </div>
    </>
  );
}
