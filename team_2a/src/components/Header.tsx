"use client";
import React,{useEffect, useState} from "react";
import styles from "/styles/Header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <img src="/img/hd_logo.png" width="200" className={styles.logo} />
            </Link>
        </header>
    );
}