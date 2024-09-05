import styles from '../../../styles/project.module.css'
import Header from '../../components/Header'
import BookContent from '../../components/Book'
import React from 'react'
import dat from './data'

const data = dat()

export default function Home({param}: any) {
    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.project_title}>{data[param].project}</div>
                <div className={styles.detail_box}>
                    <div className={styles.detail_content}>{data[param].content}</div>
                </div>
                <div>
                    <div className={styles.subtitle}>関連書籍</div>
                    <div className={styles.book_scroll}>
                        {data[param].books.map((book) => (
                            <BookContent url={book} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
