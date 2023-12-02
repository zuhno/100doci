import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import calcMyPercent from "./calcMyPercent";
import separetor from "./numSeparator";

const firebaseConfig = {
  apiKey: "AIzaSyC8oPvzKCx-6ODsHE6q8Td4-zMqFNsfsLA",
  authDomain: "bangguseokmuseum2-f78e8.firebaseapp.com",
  databaseURL: "https://bangguseokmuseum2-f78e8.firebaseio.com",
  projectId: "bangguseokmuseum2-f78e8",
  storageBucket: "bangguseokmuseum2-f78e8.appspot.com",
  messagingSenderId: "118922447866",
  appId: "1:118922447866:web:baa0c64b53891e4db63243",
  measurementId: "G-N336WMVD8F",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Production mode 전환시 Unlock
firebase.analytics();

export const firebaseDB = firebase.firestore();

export const initGetTotal = async () => {
  const totalNumEl = document.querySelector(".total__number");
  const goldTotalNumEl = document.querySelector(".gold__number");
  const bangusukDB = await firebaseDB.collection("bangusuk");
  bangusukDB
    .doc("user")
    .get()
    .then((doc) => {
      if (doc.exists) {
        const { total } = doc.data();
        totalNumEl.innerHTML = `<span>${separetor(total)} 명</span>`;
      }
    });
  bangusukDB
    .doc("score")
    .get()
    .then((doc) => {
      if (doc.exists) {
        const golds = doc.data();
        const totalGold = golds["14"];
        goldTotalNumEl.innerHTML = `<span>${separetor(totalGold)} 명</span>`;
      }
    })
    .catch((error) => console.log(error));
  return;
};

export const updateData = async (questionNum) => {
  const myResultPercent = document.getElementById("jsMyResultPercent");
  const resultBangusukDB = await firebaseDB.collection("bangusuk");
  resultBangusukDB
    .doc("user")
    .get()
    .then(async (doc) => {
      if (doc.exists) {
        const { total: prevTotal } = doc.data();
        resultBangusukDB.doc("user").update({
          total: prevTotal + 1,
        });
      }
    })
    .catch((error) => console.log(error));
  resultBangusukDB
    .doc("score")
    .get()
    .then(async (doc) => {
      const prevData = doc.data();
      let myPercent = await calcMyPercent(prevData, questionNum);
      myResultPercent.innerHTML = `<span>도전자 중 상위 ${myPercent}</span>`;
    })
    .catch((error) => console.log(error));
  return;
};
