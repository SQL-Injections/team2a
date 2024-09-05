'use client';
import React, { useState } from 'react';

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
    let content = contents;
    // 入力値を格納する状態を初期化する
    const [inputValue, setInputValue] = useState('');
    const [new_list, setNewList] = useState(contents);
    const checkWord = () => {
        // setNewList([]);
        // console.log(new_list);
        let list =[];
        setInputValue(inputValue);
        for (let i = 0; i < contents.length; i++) {
            const element = contents[i];
            if (element[0].toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) {
                // console.log(element[0],"部分一致が見つかりました。");
                // setNewList([...new_list,element]);
                list.push(element);
            } else {
                console.log("部分一致が見つかりませんでした。");
                // console.log(element[0]);
                // console.log(inputValue);
            }
        }
        // content = new_list;
        setNewList(list);
        console.log(new_list);
    }
    console.log(new_list);

    return (
        <>
            <Header />
            <div className={style_main.main}>
                <div className={styles.seach_space}>
                    <input placeholder="検索" className={styles.seach_box}　onChange={(event) => setInputValue(event.target.value)} value={inputValue} id='serch_content'></input>
                    <button className={styles.serch_btn} onClick={checkWord}>検索</button>
                </div>
            </div>
            <div className={styles.space}></div>
            <List titles={titles} contents={new_list} />
        </>
    )
}