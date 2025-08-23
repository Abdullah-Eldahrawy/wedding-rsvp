import CountDownTimer from "./CountDownTimer";

export default function Header({setCurrPage}) {
    const targetDate = new Date("2025-09-06T16:00:00");
  return (
    <header className="text-center mb-8 sm:mb-12 pt-4 sm:pt-8">
      <h1
        className="text-xl sm:text-4xl lg:text-5xl font-cinzel mb-4"
        style={{ color: "#839d4d" }}
      >
        #jwairayahobabdullah
      </h1>
      <h2
        className="text-lg sm:text-2xl font-cinzel mb-4"
        style={{ color: "#821d30" }}
      >
        <CountDownTimer targetDate={targetDate} />
      </h2>
      <div
        className="flex flex-wrap justify-center gap-4 font-bold font-cinzel sm:gap-6 lg:gap-8 mb-6 sm:mb-8 text-sm sm:text-base"
        style={{ color: "#a1b67e" }}
      >
        <span
          className="hover:opacity-75 cursor-pointer transition-opacity underline"
          onClick={() => setCurrPage("home")}
        >
          home
        </span>
        <span
          className="hover:opacity-75 cursor-pointer transition-opacity underline"
          onClick={() => setCurrPage("rsvp")}
        >
          rsvp
        </span>
        <span
          className="hover:opacity-75 cursor-pointer transition-opacity underline"
          onClick={() => setCurrPage("dresscode")}
        >
          dresscode
        </span>
        <span
          className="hover:opacity-75 cursor-pointer transition-opacity underline"
          onClick={() => setCurrPage("location")}
        >
          location
        </span>
      </div>
    </header>
  );
}
