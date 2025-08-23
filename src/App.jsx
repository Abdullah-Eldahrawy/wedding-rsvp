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
import { useState } from "react";
import Rsvp from "./components/Rsvp";
import Location from "./components/Location";

function App() {
  // const headerList = ["Our Story", "Details", "RSVP"].map((listItem) => (
  //   <li className="text-[#556B2F] font-semibold text-base px-4 py-2 hover:underline cursor-pointer">
  //     {listItem}
  //   </li>
  // ));
  const targetDate = new Date("2025-09-06T16:00:00");
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
  const [currPage, setCurrPage] = useState("home");
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
            <span className="hover:opacity-75 cursor-pointer transition-opacity underline" onClick={() => setCurrPage("home")}>
              home
            </span>
            <span className="hover:opacity-75 cursor-pointer transition-opacity underline" onClick={() => setCurrPage("rsvp")}>
              rsvp
            </span>
            <span className="hover:opacity-75 cursor-pointer transition-opacity underline" onClick={() => setCurrPage("dresscode")}>
              dresscode
            </span>
            <span className="hover:opacity-75 cursor-pointer transition-opacity underline" onClick={() => setCurrPage("location")}>
              location
            </span>
          </div>
        </header>

        {/* Friday Section */}
        <main className="mb-12 sm:mb-16 flex flex-col items-center">
          <img src="/wedding-invite.png" alt="wedding invite" className={currPage === "home" ? "block" : "hidden"}/> 
          <img src="/dress-code.png" alt="dress code" className={currPage === "dresscode" ? "block" : "hidden"}/> 
          <Rsvp visibility={currPage === "rsvp" ? "block" : "hidden"}/>
          <Location visibility={currPage === "location" ? "block" : "hidden"}/>
        </main>
      </div>
    </div>
  );
}

export default App;
