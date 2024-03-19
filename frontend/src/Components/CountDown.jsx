import React, { useState, useEffect } from 'react';

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date('2025-03-19') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }
    return (
      <span key={interval} className='text-[25px]  text-[#475ad2]'>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  return (
    <div >
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className='text-[red] text-[25px]'>Time's up!</span>
      )}
    </div>
  );
};

export default CountDown;
