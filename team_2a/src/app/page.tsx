import Image from 'next/image'
import style_main from '../../styles/project.module.css'
import styles from '../../styles/Search_box.module.css'
import Header from '../components/Header'
import List from '../components/List'

export default function Home() {
    const titles = [
        { titleString: 'プロジェクト名', width: 2 },
        { titleString: '部署', width: 1 },
        { titleString: '言語', width: 1 }
    ]
    const contents = [
        ['Project A', 'Department A', 'JavaScript'],
        ['Project B', 'Department B', 'TypeScript'],
        ['Project C', 'Department C', 'Python']
    ]
    return (
        <>
            <Header />
            <div className={style_main.main}>
                <div className={styles.seach_space}>
                    <input placeholder="検索" className={styles.seach_box}></input>
                </div>
            </div>
            <div className={styles.space}></div>
            <List titles={titles} contents={contents} />
        </>
    )
}