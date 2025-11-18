import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js';

// 파이어베이스 API를 활용하여 웹서비스를 제공받기 위한 초기화 작업

  const firebaseConfig = {
    apiKey: "AIzaSyCbY3mV4ilnvBU--RcaRx0qtnsSqAQCo3E",
    authDomain: "cloud-251110.firebaseapp.com",
    projectId: "cloud-251110",
    storageBucket: "cloud-251110.firebasestorage.app",
    messagingSenderId: "508625512817",
    appId: "1:508625512817:web:ca02b95786bb55abfe2ed0"
  };

  // Initialize Firebase
  // 변수(app) 앞에 export를 붙여 외부(HTML, js)에서 사용가능하도록 구현함
  export const app = initializeApp(firebaseConfig);
