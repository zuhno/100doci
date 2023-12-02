import { firebaseDB } from "./fbModules";

const resultCases = async (prevData, myNum) => {
  const myNumToStr = String(myNum);
  const scoreInDB = await firebaseDB.collection("bangusuk").doc("score");
  const shareContent = document.getElementById("jsShareContent");
  const twitterBtn = document.getElementById("twitterBtn");
  const naverBlogBtn = document.getElementById("naverBlogBtn");
  const resultShareImg = document.createElement("img");
  const resultShareLink = document.createElement("a");
  shareContent.appendChild(resultShareImg);
  shareContent.appendChild(resultShareLink);

  // result cases into case in switch statement
  switch (myNum) {
    case 1:
      scoreInDB.update({
        1: prevData[myNumToStr] + 1,
      });
      //  for kakao share
      resultShareImg.src =
        "https://cuttleman.github.io/bangguseokResult/dQMybHA1.png";
      // for facebook, twitter, naver blog share
      resultShareLink.href = "https://bangguseokmuseum2.com/results/dQMybHA1";
      twitterBtn.href =
        "https://twitter.com/intent/tweet?url=https://bangguseokmuseum2.com/results/dQMybHA1&hashtags=방구석골든벨";
      naverBlogBtn.href =
        "http://blog.naver.com/openapi/share?url=https://bangguseokmuseum2.com/results/dQMybHA1";
      break;
    case 2:
      scoreInDB.update({
        2: prevData[myNumToStr] + 1,
      });
      resultShareImg.src =
        "https://cuttleman.github.io/bangguseokResult/dOdLNOF2.png";
      resultShareLink.href = "https://bangguseokmuseum2.com/results/dOdLNOF2";
      twitterBtn.href =
        "https://twitter.com/intent/tweet?url=https://bangguseokmuseum2.com/results/dOdLNOF2&hashtags=방구석골든벨";
      naverBlogBtn.href =
        "http://blog.naver.com/openapi/share?url=https://bangguseokmuseum2.com/results/dOdLNOF2";
      break;
    case 3:
      scoreInDB.update({
        3: prevData[myNumToStr] + 1,
      });
      resultShareImg.src =
        "https://cuttleman.github.io/bangguseokResult/BGuZsMU3.png";
      resultShareLink.href = "https://bangguseokmuseum2.com/results/BGuZsMU3";
      twitterBtn.href =
        "https://twitter.com/intent/tweet?url=https://bangguseokmuseum2.com/results/BGuZsMU3&hashtags=방구석골든벨";
      naverBlogBtn.href =
        "http://blog.naver.com/openapi/share?url=https://bangguseokmuseum2.com/results/BGuZsMU3";
      break;
    case 4:
      scoreInDB.update({
        4: prevData[myNumToStr] + 1,
      });
      resultShareImg.src =
        "https://cuttleman.github.io/bangguseokResult/UdtDnxN4.png";
      resultShareLink.href = "https://bangguseokmuseum2.com/results/UdtDnxN4";
      twitterBtn.href =
        "https://twitter.com/intent/tweet?url=https://bangguseokmuseum2.com/results/UdtDnxN4&hashtags=방구석골든벨";
      naverBlogBtn.href =
        "http://blog.naver.com/openapi/share?url=https://bangguseokmuseum2.com/results/UdtDnxN4";
      break;
    case 5:
      scoreInDB.update({
        5: prevData[myNumToStr] + 1,
      });
      resultShareImg.src =
        "https://cuttleman.github.io/bangguseokResult/vXtPnRt5.png";
      resultShareLink.href = "https://bangguseokmuseum2.com/results/vXtPnRt5";
      twitterBtn.href =
        "https://twitter.com/intent/tweet?url=https://bangguseokmuseum2.com/results/vXtPnRt5&hashtags=방구석골든벨";
      naverBlogBtn.href =
        "http://blog.naver.com/openapi/share?url=https://bangguseokmuseum2.com/results/vXtPnRt5";
      break;
    case 6:
      scoreInDB.update({
        6: prevData[myNumToStr] + 1,
      });
      resultShareImg.src =
        "https://cuttleman.github.io/bangguseokResult/ByyYyRW6.png";
      resultShareLink.href = "https://bangguseokmuseum2.com/results/ByyYyRW6";
      twitterBtn.href =
        "https://twitter.com/intent/tweet?url=https://bangguseokmuseum2.com/results/ByyYyRW6&hashtags=방구석골든벨";
      naverBlogBtn.href =
        "http://blog.naver.com/openapi/share?url=https://bangguseokmuseum2.com/results/ByyYyRW6";
      break;
    case 7:
      scoreInDB.update({
        7: prevData[myNumToStr] + 1,
      });
      resultShareImg.src =
        "https://cuttleman.github.io/bangguseokResult/XeUchly7.png";
      resultShareLink.href = "https://bangguseokmuseum2.com/results/XeUchly7";
      twitterBtn.href =
        "https://twitter.com/intent/tweet?url=https://bangguseokmuseum2.com/results/XeUchly7&hashtags=방구석골든벨";
      naverBlogBtn.href =
        "http://blog.naver.com/openapi/share?url=https://bangguseokmuseum2.com/results/XeUchly7";
      break;
    case 8:
      scoreInDB.update({
        8: prevData[myNumToStr] + 1,
      });
      resultShareImg.src =
        "https://cuttleman.github.io/bangguseokResult/zXzAiZc8.png";
      resultShareLink.href = "https://bangguseokmuseum2.com/results/zXzAiZc8";
      twitterBtn.href =
        "https://twitter.com/intent/tweet?url=https://bangguseokmuseum2.com/results/zXzAiZc8&hashtags=방구석골든벨";
      naverBlogBtn.href =
        "http://blog.naver.com/openapi/share?url=https://bangguseokmuseum2.com/results/zXzAiZc8";
      break;
    case 9:
      scoreInDB.update({
        9: prevData[myNumToStr] + 1,
      });
      resultShareImg.src =
        "https://cuttleman.github.io/bangguseokResult/pQROgsF9.png";
      resultShareLink.href = "https://bangguseokmuseum2.com/results/pQROgsF9";
      twitterBtn.href =
        "https://twitter.com/intent/tweet?url=https://bangguseokmuseum2.com/results/pQROgsF9&hashtags=방구석골든벨";
      naverBlogBtn.href =
        "http://blog.naver.com/openapi/share?url=https://bangguseokmuseum2.com/results/pQROgsF9";
      break;
    case 10:
      scoreInDB.update({
        10: prevData[myNumToStr] + 1,
      });
      resultShareImg.src =
        "https://cuttleman.github.io/bangguseokResult/wXeoHoN10.png";
      resultShareLink.href = "https://bangguseokmuseum2.com/results/wXeoHoN10";
      twitterBtn.href =
        "https://twitter.com/intent/tweet?url=https://bangguseokmuseum2.com/results/wXeoHoN10&hashtags=방구석골든벨";
      naverBlogBtn.href =
        "http://blog.naver.com/openapi/share?url=https://bangguseokmuseum2.com/results/wXeoHoN10";
      break;
    case 11:
      scoreInDB.update({
        11: prevData[myNumToStr] + 1,
      });
      resultShareImg.src =
        "https://cuttleman.github.io/bangguseokResult/liootRY11.png";
      resultShareLink.href = "https://bangguseokmuseum2.com/results/liootRY11";
      twitterBtn.href =
        "https://twitter.com/intent/tweet?url=https://bangguseokmuseum2.com/results/liootRY11&hashtags=방구석골든벨";
      naverBlogBtn.href =
        "http://blog.naver.com/openapi/share?url=https://bangguseokmuseum2.com/results/liootRY11";
      break;
    case 12:
      scoreInDB.update({
        12: prevData[myNumToStr] + 1,
      });
      resultShareImg.src =
        "https://cuttleman.github.io/bangguseokResult/zkehwYa12.png";
      resultShareLink.href = "https://bangguseokmuseum2.com/results/zkehwYa12";
      twitterBtn.href =
        "https://twitter.com/intent/tweet?url=https://bangguseokmuseum2.com/results/zkehwYa12&hashtags=방구석골든벨";
      naverBlogBtn.href =
        "http://blog.naver.com/openapi/share?url=https://bangguseokmuseum2.com/results/zkehwYa12";
      break;
    case 13:
      scoreInDB.update({
        13: prevData[myNumToStr] + 1,
      });
      resultShareImg.src =
        "https://cuttleman.github.io/bangguseokResult/LcXfvFD13.png";
      resultShareLink.href = "https://bangguseokmuseum2.com/results/LcXfvFD13";
      twitterBtn.href =
        "https://twitter.com/intent/tweet?url=https://bangguseokmuseum2.com/results/LcXfvFD13&hashtags=방구석골든벨";
      naverBlogBtn.href =
        "http://blog.naver.com/openapi/share?url=https://bangguseokmuseum2.com/results/LcXfvFD13";
      break;
    case 14:
      scoreInDB.update({
        14: prevData[myNumToStr] + 1,
      });
      resultShareImg.src =
        "https://cuttleman.github.io/bangguseokResult/UiQJDerG.png";
      resultShareLink.href = "https://bangguseokmuseum2.com/results/UiQJDerG";
      twitterBtn.href =
        "https://twitter.com/intent/tweet?url=https://bangguseokmuseum2.com/results/UiQJDerG&hashtags=방구석골든벨";
      naverBlogBtn.href =
        "http://blog.naver.com/openapi/share?url=https://bangguseokmuseum2.com/results/UiQJDerG";
      break;
    default:
      break;
  }
  return;
};

export default resultCases;
