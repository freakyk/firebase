import React from 'react'
import styles from './Home.module.css'
import DiaryForm from './DiaryForm'
import DiaryList from './DiaryList';
import { useAuthContext } from './../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';

export default function Home() {
    const { user } = useAuthContext();
    const { documents, error } = useCollection('diary', ["uid", "==", user.uid]);

    console.log(error);

    return (
        <div className="container">
            <main className={styles["diary-main"]}>
                <aside className={styles.side_menu}>
                    <DiaryForm uid={user.uid} />
                </aside>
                <ul className={styles.content_list}>
                    {error && <strong>{error}</strong>}
                    {documents && <DiaryList diaries={documents} />}
                </ul>
            </main>
            <section>
                <h2 className="a11y-hidden">일기 목록</h2>
                <ul></ul>
            </section>
        </div>
    )
}