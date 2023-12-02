import loadedPage from "./loadedPage";
import slideEvent from "./slideEvent";
import bookLinkEvent from "./bookLinkEvent";
import { touchStartPrevent, touchEndPrevent } from "./touchHandler";

const init = async () => {
  // 이미지 저작권 경고문
  console.warn(
    `
    %c저작권%c이 등록되어있는 작품(퀴즈 속 이미지)입니다.
    무단 도용, 재배포시 %c법적 책임%c을 물을 수 있습니다.
    `,
    "color: red; font-size: 20px; font-weight:bold",
    "color: black; font-size: 15px; font-weight:bold;",
    "color: red; font-size: 20px; font-weight: bold;",
    "color: black; font-size: 15px; font-weight:bold;"
  );
  touchStartPrevent();
  touchEndPrevent();

  bookLinkEvent();

  // 시작페이지 누적사용자 수 업로드
  loadedPage();

  // 슬라이드 이벤트
  slideEvent();
};

init();
