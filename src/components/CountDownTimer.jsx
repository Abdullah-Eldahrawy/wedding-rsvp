import { useEffect, useState } from "react";

const CountDownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <p className="text-center text-lg font-semibold text-[#556B2F]">
        The event has started!
      </p>
    );
  }

  return (
    <div className="flex justify-center gap-4 mt-24 text-[#556B2F] text-xl font-semibold">
      <div>
        <span>{timeLeft.days}</span> days
      </div>
      <div>
        <span>{timeLeft.hours}</span> hours
      </div>
      <div>
        <span>{timeLeft.minutes}</span> mins
      </div>
      <div>
        <span>{timeLeft.seconds}</span> secs
      </div>
    </div>
  );
};

export default CountDownTimer;
