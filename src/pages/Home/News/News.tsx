import "./News.scss";
import image from "../../../assets/img/carosel.png";
import { useCallback, useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import getWindowWidth from "../../../helpers/getWindowWidth";

export default function News() {
  const [transformAmount, setTransformAmount] = useState(0);
  const style = { transform: `translateX(-${transformAmount}px)` };
  // carousel is filled with data in here, if different data is present,
  // it can be arranged with setCarousel function
  // the edit info is changed to be sure different cards displayed
  const [carousel] = useState<CardData[]>([
    {
      img: { image },
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      info: "1h ago · by Troy Corlson",
    },
    {
      img: { image },
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      info: "1h ago · by Luke Skywalker",
    },
    {
      img: { image },
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      info: "1h ago · by Darth Vader",
    },
    {
      img: { image },
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      info: "1h ago · by Han Solo",
    },
    {
      img: { image },
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      info: "1h ago · by Princess Leia",
    },
  ]);

  // these are created to handle the responsive design amount of news shown
  const [amountOfCardsToShow, setAmountOfCardsToShow] = useState(3);
  const [indexOfFirstCard, setIndexOfFirstCard] = useState(0);

  // solves the problem when the rightest card shown and window size increases
  const handleIndexBiggerThanLength = useCallback(
    () => {
      const maxIndex = carousel.length - amountOfCardsToShow;

      if (indexOfFirstCard > maxIndex) {
        const difference = indexOfFirstCard - maxIndex;
        setIndexOfFirstCard(maxIndex);
        setTransformAmount((prev) => prev - difference * 348);
      }
    },
    [amountOfCardsToShow, carousel.length, indexOfFirstCard],
  );

  useEffect(
    () => {
      handleIndexBiggerThanLength()
    },
    [handleIndexBiggerThanLength]
  );

  const detectSize = useCallback(() => {
    const { width } = getWindowWidth();

    if (+width < 1160 && +width >= 784) {
      setAmountOfCardsToShow(2);
    } else if (+width < 784) {
      setAmountOfCardsToShow(1);
    } else {
      setAmountOfCardsToShow(3);
    }
  }, []);

  // initial window size detection
  useEffect(() => {
    detectSize();
  }, [detectSize]);

  // size detection in resizing
  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [detectSize]);

  const handleLeftButton = useCallback(() => {
    if (indexOfFirstCard > 0) {
      setIndexOfFirstCard((prev) => prev - 1);
      setTransformAmount((prev) => prev - 348);
    }
  }, [indexOfFirstCard]);

  const handleRightButton = useCallback(() => {
    const maxIndex = carousel.length - amountOfCardsToShow;

    if (indexOfFirstCard < maxIndex) {
      setIndexOfFirstCard((prev) => prev + 1);
      setTransformAmount((prev) => prev + 348);
    }
  }, [indexOfFirstCard, carousel, amountOfCardsToShow]);

  return (
    <section className="News">
      <h2 className="News__title">Top News</h2>

      <div className="News__carousel">
        <button
          onClick={handleLeftButton}
          className={
            "News__button News__button--left" +
            (indexOfFirstCard ? "" : " News__button--disabled")
          }
        >
          <div className="News__arrow News__arrow--left" />
        </button>

        <div className="News__cards">
          {carousel.map((card, i) => (
            <div style={style} key={card.title + i} className="News__card-items" >
              <NewsCard data={card} />
            </div>
          ))}
        </div>

        <button
          onClick={handleRightButton}
          className={
            "News__button News__button--right" +
            (indexOfFirstCard < carousel.length - amountOfCardsToShow
              ? ""
              : " News__button--disabled")
          }
        >
          <div className="News__arrow News__arrow--right" />
        </button>
      </div>
    </section>
  );
}
