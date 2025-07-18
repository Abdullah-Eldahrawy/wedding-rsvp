import { useEffect, useState } from "react";

const CountDownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

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
      <p className="text-center text-lg font-semibold">
        The event has started!
      </p>
    );
  }

  return (
    <div className="flex justify-center gap-4">
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
