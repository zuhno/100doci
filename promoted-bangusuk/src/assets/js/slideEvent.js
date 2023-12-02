import { updateData } from "./fbModules";
import adminAnswers from "./answers";

const body = document.querySelector("body");
const sliderContainer = document.getElementById("jsSliderContainer");
const myResultMent = document.getElementById("jsMyResultMent");
const loadingBtn = document.getElementById("jsLoadingBtn");
const loadingCheck = document.getElementById("jsLoadingCheck");
const buttons = document.querySelectorAll(".button");
const promoteGoldTxt = document.querySelector(".promote__text--gold");
const promoteWorngTxt = document.querySelector(".promote__text--wrong");
const resultGoldBell = document.querySelector(".resultBell--gold");
const resultWrongBell = document.querySelector(".resultBell--wrong");
const resultPercent = document.getElementById("jsMyResultPercent");

const first = document.querySelector(".slide:nth-child(1)");
const last = document.querySelector(".slide:nth-child(16)");

const myPickAnswers = [];
let isGoldCheck = false;

const toResult = async () => {
  if (adminAnswers.length === myPickAnswers.length) {
    for (let i = 0; i < myPickAnswers.length; i++) {
      if (adminAnswers[i] !== myPickAnswers[i]) {
        isGoldCheck = true;
        myResultMent.innerHTML = `<span>아쉽게도</span><br/><span><strong>${
          i + 1
        }</strong>번 문제에서</span><br/><span>탈락하셨습니다.</span>`;
        promoteWorngTxt.classList.add("show");
        resultWrongBell.classList.add("show");
        resultPercent.classList.add("wrong");
        updateData(i + 1);
        return;
      } else {
        if (i === myPickAnswers.length - 1) {
          isGoldCheck = false;
          myResultMent.innerHTML =
            "<span>축하합니다!</span><br/><span><strong>골든벨</strong>의 주인공이</span><br/><span>탄생했습니다.</span>";
          promoteGoldTxt.classList.add("show");
          resultGoldBell.classList.add("show");
          resultPercent.classList.add("gold");
          updateData(i + 2);
          return;
        }
      }
    }
  }
};

const slideToggle = (e) => {
  if (e) {
    const {
      currentTarget: {
        parentNode: {
          parentNode: { id },
        },
      },
      currentTarget: {
        dataset: { answer },
      },
    } = e;
    if (answer) {
      myPickAnswers.push(answer);
    }
    const screenEl = document.getElementById(id);
    const {
      parentNode: {
        nextSibling: {
          firstChild: { id: currentScreen },
        },
      },
    } = screenEl;

    if (currentScreen === "loading") {
      setTimeout(() => {
        loadingCheck.innerHTML = "<span>- 확인완료 -</span>";
        loadingBtn.style.display = "block";
      }, 2000);
      if (myPickAnswers.length === 13) {
        toResult();
      } else {
        window.location.href = "/";
      }
    }

    if (currentScreen === "result") {
      if (isGoldCheck) {
        body.style.backgroundColor = "rgb(215, 231, 170)";
      } else {
        body.style.backgroundColor = "rgb(248, 245, 201)";
      }
    }
  }

  const PREV = "prev";
  const ACTIVE = "active";
  const NEXT = "next";
  const activeEl = document.getElementById(ACTIVE);
  const nextEl = document.getElementById(NEXT);
  const prevEl = document.getElementById(PREV);
  if (!activeEl) {
    first.id = ACTIVE;
    first.style.zIndex = 1;
    first.style.opacity = 1;
    first.style.pointerEvents = "initial";
    last.id = PREV;
    first.nextSibling.id = NEXT;
  } else {
    if (prevEl) {
      prevEl.removeAttribute("id");
    }
    activeEl.id = PREV;
    nextEl.id = ACTIVE;
    if (!nextEl.nextSibling) {
      first.id = NEXT;
    } else {
      nextEl.nextSibling.id = NEXT;
    }
    first.removeAttribute("style");
    activeEl.removeAttribute("style");

    setTimeout(() => {
      nextEl.style.pointerEvents = "initial";
    }, 800);
  }
};

const slideEvent = () => {
  slideToggle();
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", slideToggle);
  }
};

export default slideEvent;
