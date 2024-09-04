"use client";
import React,{useEffect, useState} from "react";
import styles from "/styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <img src="/img/hd_logo.png" width="200" className={styles.logo}/>
        </header>
    );
}