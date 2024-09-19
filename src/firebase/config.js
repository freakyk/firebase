import { initializeApp } from "firebase/app";
// 데이터 저장을 위해 사용할 firestore 초기화도 같이 작성해줌
import { getFirestore, Timestamp } from "firebase/firestore";
// 아이디, 비밀번호 로그인을 위해 authentication 설정
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firestore 초기화
const appFireStore = getFirestore(app);
// 인증 초기화
const appAuth = getAuth();
// 타임스탬프
const timeStamp = Timestamp

export { appFireStore, appAuth, timeStamp }