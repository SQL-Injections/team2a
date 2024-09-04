import Image from "next/image";
import style_main from "../../styles/project.module.css";
import styles from "../../styles/Search_box.module.css";
import Header from "../components/Header";
export default function Home() {
  return (
    <>
    <Header/>
    <div className={style_main.main}>
    <div className={styles.seach_space}>
      <input placeholder="検索" className={styles.seach_box}></input>
    </div>
    </div>
    </>
  );
}
