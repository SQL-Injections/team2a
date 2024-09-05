'use client'

import Header from '../../../components/Header'
import styles from '../../../../styles/project.module.css'
import BookContent from '../../../components/Book'
import React from 'react'
import dat from '../data'
import { useParams } from 'next/navigation'

const data = dat()

export default function Home() {
    const params = useParams()
    const id = params.id

    // idがまだundefinedの場合はnullを返す
    if (!id) return null

    const param = parseInt(id as string, 10)

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
                        {data[param].books.map((book, index) => (
                            <BookContent url={book} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
