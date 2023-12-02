const bookLink = document.getElementById("clipBoardBtn");

const handleTrigger = () => {
  if (typeof window.open == "function") {
    window.open("https://book.naver.com/bookdb/book_detail.nhn?bid=17356808");
  } else {
    window.location.href =
      "https://book.naver.com/bookdb/book_detail.nhn?bid=17356808";
  }
  return false;
};

const bookLinkEvent = () => bookLink.addEventListener("click", handleTrigger);

export default bookLinkEvent;
