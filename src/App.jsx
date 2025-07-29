import CountDownTimer from "./components/CountDownTimer";
import {
  Heart,
  Music,
  Camera,
  Utensils,
  Clock,
  MapPin,
  Gift,
  Flower,
  Wine,
  Star,
} from "lucide-react";
import WeddingCardItemsList from "./components/WeddingCardItemsList";

function App() {
  // const headerList = ["Our Story", "Details", "RSVP"].map((listItem) => (
  //   <li className="text-[#556B2F] font-semibold text-base px-4 py-2 hover:underline cursor-pointer">
  //     {listItem}
  //   </li>
  // ));
  const targetDate = new Date("2025-09-06T00:00:00");
  const events = [
    {
      time: "3pm",
      title: "Welcome & Arrival",
      description: "You will be picked up from your accommodation",
      subtitle: "Welcome Champagne",
      leftIcon: <img src="/dress.png" className="w-64 h-48" />,
      rightIcon: <img src="/shoes.png" className="w-64 h-48" />,
    },
    {
      time: "4pm",
      title: "Ceremony",
      description: "The sacred union begins",
      subtitle: "Exchange of Vows",
      leftIcon: <img src="/cake.png" className="w-48 h-48" />,
      rightIcon: <img src="/wine.png" className="w-32 h-48" />,
    },
    {
      time: "4:30pm",
      title: "Cocktail Hour & Canapés",
      description: "Mingle with family and friends",
      subtitle: "Photography Session",
      leftIcon: <img src="/ring.png" className="w-32 h-22" />,
      rightIcon: <img src="/suit.png" className="w-32 h-48" />,
    },
    {
      time: "5:30pm",
      title: "Reception Dinner & Speeches",
      description: "Three course meal with toasts",
      subtitle: "Celebrate with loved ones",
      leftIcon: <Utensils className="w-16 h-16" />,
      rightIcon: <Star className="w-12 h-12" />,
    },
    {
      time: "Midnight - 2:30am",
      title: "Dancing & Late Night Fun",
      description: "Andy Le Coiffeur available for lifts home",
      subtitle: "Party until dawn",
      leftIcon: <Music className="w-16 h-16" />,
      rightIcon: <Heart className="w-14 h-14" />,
    },
  ];
  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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
            <span className="hover:opacity-75 cursor-pointer transition-opacity">
              home
            </span>
            <span className="hover:opacity-75 cursor-pointer transition-opacity">
              rsvp
            </span>
            <span className="hover:opacity-75 cursor-pointer transition-opacity">
              dresscode
            </span>
          </div>
        </header>

        {/* Friday Section */}
        <main className="mb-12 sm:mb-16 flex flex-col items-center">
          <img src="/wedding-invite.jpeg" alt="wedding invite" />
          {/* <div className="text-center mb-6 sm:mb-8">
            <h2
              className="text-2xl sm:text-3xl font-serif mb-2"
              style={{ color: "#265026" }}
            >
              Saturday 6th September
            </h2>
            <div
              className="w-16 sm:w-24 h-0.5 mx-auto"
              style={{ backgroundColor: "#c9e894" }}
            ></div>
          </div>

          <WeddingCardItemsList events={events} /> */}
        </main>

        {/* Saturday Section */}
        {/* <footer className="mt-16 sm:mt-20">
          <div className="text-center mb-6 sm:mb-8">
            <h2
              className="text-2xl sm:text-3xl font-serif mb-2"
              style={{ color: "#265026" }}
            >
              Saturday 26th July
            </h2>
            <div
              className="w-16 sm:w-24 h-0.5 mx-auto"
              style={{ backgroundColor: "#c9e894" }}
            ></div>
          </div> */}

          {/* <div className="flex items-center justify-center"> */}
            {/* Left illustration - hidden on mobile */}
            {/* <div
              className="opacity-60 hidden sm:block mr-8"
              style={{ color: "#ffd6e7" }}
            >
              <Utensils className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
            </div> */}

            {/* Center content */}
            {/* <div className="text-center bg-white p-6 sm:p-8 max-w-md sm:max-w-lg">
              <div className="flex items-center justify-center mb-4">
                <MapPin
                  className="w-6 h-6 sm:w-8 sm:h-8 mr-3"
                  style={{ color: "#507550" }}
                />
                <span
                  className="text-lg sm:text-xl font-serif"
                  style={{ color: "#265026" }}
                >
                  Recovery Brunch
                </span>
              </div>
              <p
                className="mb-2 text-sm sm:text-base"
                style={{ color: "#507550" }}
              >
                Join us for a casual breakfast and mimosas
              </p>
              <p
                className="italic text-sm sm:text-base"
                style={{ color: "#507550" }}
              >
                Sharing stories from the night before
              </p>
            </div> */}

            {/* Right illustration - hidden on mobile */}
            {/* <div
              className="opacity-60 hidden sm:block ml-8"
              style={{ color: "#c9e894" }}
            >
              <Wine className="w-12 h-12 sm:w-14 sm:h-14" />
            </div>
          </div>
        </footer> */}

        {/* Additional decorative elements scattered around - hidden on mobile */}
        <div
          className="absolute top-20 left-12 opacity-30 hidden lg:block"
          style={{ color: "#ffd6e7" }}
        >
          <Heart className="w-8 h-8" />
        </div>
        <div
          className="absolute top-40 right-16 opacity-25 hidden lg:block"
          style={{ color: "#c9e894" }}
        >
          <Flower className="w-10 h-10" />
        </div>
        <div
          className="absolute top-60 left-20 opacity-20 hidden lg:block"
          style={{ color: "#ffd6e7" }}
        >
          <Star className="w-6 h-6" />
        </div>
        <div
          className="absolute bottom-40 right-24 opacity-25 hidden lg:block"
          style={{ color: "#c9e894" }}
        >
          <Gift className="w-8 h-8" />
        </div>
        <div
          className="absolute bottom-60 left-16 opacity-20 hidden lg:block"
          style={{ color: "#ffd6e7" }}
        >
          <Music className="w-7 h-7" />
        </div>
        <div
          className="absolute top-80 right-12 opacity-30 hidden lg:block"
          style={{ color: "#c9e894" }}
        >
          <Wine className="w-9 h-9" />
        </div>
      </div>
    </div>
    // <>
    //   <header className="fixed top-0 w-full flex justify-around items-center px-6 py-4 bg-transparent hover:bg-white/70 hover:backdrop-blur-md transition duration-300">
    //     <p className="text-[#556B2F] text-lg font-bold">A&J</p>
    //     <ul className="flex items-center list-none">{headerList}</ul>
    //     <button className="border-2 border-[#556B2F] text-[#556B2F] px-4 py-1 rounded-md font-semibold hover:bg-[#e3e6d1] transition">
    //       RSVP
    //     </button>
    //   </header>
    //   <main className="flex flex-col items-center justify-center min-h-screen">
    //     <CountDownTimer targetDate={targetDate}/>
    //   </main>
    //   <footer></footer>
    // </>
  );
}

export default App;
