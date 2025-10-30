import React, { useEffect, useState } from 'react'
import "./Card.scss"


function Card() {

  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 1);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTime({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0")
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="productList">
      <div className='wrapper'>
        <div className='product'></div>
        <p className='title-small'>Today’s</p>
        <h1 className='title-big'>Flash Sales</h1>

        <div className="timer">
          <div className="time-box">
            <p>День</p>
            <span className="time-value">{time.days}</span>
            <span className="time-label"></span>
          </div>
          <span className="dots">:</span>
          <div className="time-box">
            <p>час</p>
            <span className="time-value">{time.hours}</span>
            <span className="time-label"></span>
          </div>
          <span className="dots">:</span>
          <div className="time-box">
            <p>минута</p>
            <span className="time-value">{time.minutes}</span>
            <span className="time-label"></span>
          </div>
          <span className="dots">:</span>
          <div className="time-box">
             <p>секунда</p>
            <span className="time-value">{time.seconds}</span>
            <span className="time-label"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
