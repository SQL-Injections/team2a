import Image from "next/image";
import styles from "../../styles/Search_box.module.css";

export default function Home() {
  return (
    <>

    <div className={styles.seach_space}>
      <input placeholder="検索" className={styles.seach_box}></input>
    </div>

    </>
  );
}
