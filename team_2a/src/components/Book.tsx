import react from "react";
import Style from "/styles/Book.module.css";

export default function Book({url}: {url: string}) {
    const decoded = decodeURIComponent(url);
    //decode urlを/で区切る
    const splitUrl = decoded.split("/");
    const title = splitUrl[3];
    const id = splitUrl[5];
    return (
    <div className={Style.bg_}>
    <div className={Style.bg}>
        <a href={url} target="_blank">
            <div className={Style.image}>
                <img src={`/img/books/${id}.jpg`} alt="リンクの画像" />
            </div>
            <div className={Style.title}>
                <p className={Style.link_card_title}>{title}</p>
            </div>
        </a>
    </div>
    </div>
    );
}