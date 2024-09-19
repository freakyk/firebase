import React, { useState, useEffect } from 'react'
import styles from './Home.module.css'
import { useFirestore } from '../../hooks/useFireStore';

// uid 는 Home.js 에서 props로 전달받는 유저 아이디입니다.
export default function DiaryForm({ uid }) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    // 컬랙션의 이름은 여러분들 마음대로 정하시면 됩니다 :)
	const { addDocument, response } = useFirestore('diary');

    const handleData = (event) => {
        if (event.target.id === 'diary-title') {
            setTitle(event.target.value);
        } else if (event.target.id === "diary-content") {
            setText(event.target.value);
        }
    }

    // response.success가 바뀔 때만 effect를 재실행합니다.
    useEffect(() => {
        if (response.success) {
            console.log(response);
            setTitle('');
            setText('');
        }
    }, [response.success]); 

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(title, text);
        // uid : 작성한 유저의 아이디입니다. 지금 당장 사용하지않지만
        // 나중에 누가 쓴 일기인지 구분할 수 있도록 auth정보로부터 받아와 Home.js 에서 props 로 전달받도록 만들겠습니다.
    	addDocument({ uid, title, text })
    }


    return (
        <form onSubmit={handleSubmit}>
            <label className="a11y-hidden" htmlFor="diary-title">일기 제목</label>
            <input className="input-style" id="diary-title" type="text" placeholder="제목" required onChange={handleData} value={title} />

            <label className="a11y-hidden" htmlFor="diary-content">일기 내용</label>
            <textarea className={styles["diary-textarea"]} id="diary-content" placeholder="오늘의 비밀은 무엇인가요?" onChange={handleData} value={text}></textarea>
            <button className="black-btn" type="submit">작성하기</button>
        </form>
    )
}