import React from 'react'
import styles from './Home.module.css'
import iconEdit from '../../img/icon-edit.svg'
import iconDelete from '../../img/icon-delete.svg'
import {useFirestore} from '../../hooks/useFireStore'

export default function DiaryList({ diaries }) {
    // 컬랙션의 이름은 여러분들 마음대로 정하시면 됩니다 :)
	const { deleteDocument } = useFirestore('diary');

    return (
        <>
            {
                diaries.map((item) => {
                    return (
                        <li key={item.id}>
                            <article className={styles["diary-article"]}>
                                <h3 className={styles["article-title"]}>{item.title}</h3>
                                <time className={styles["article-time"]} dateTime="2023-03-15">2023.02.24.THU</time>
                                <p className={styles["article-content"]}>{item.text}</p>

                                <div className={styles["button-group"]}>
                                    <button type="button">
                                        <img src={iconEdit} alt="수정" />
                                    </button>
                                    <span></span>
                                    <button type="button" onClick={() => deleteDocument(item.id)}>
                                        <img src={iconDelete} alt="삭제" />
                                    </button>
                                </div>
                            </article>
                        </li>
                    )
                })
            }
        </>
    )
}