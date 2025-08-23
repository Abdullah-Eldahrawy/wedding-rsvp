import { Heart, Music, Utensils, Star } from "lucide-react";
import WeddingCardItemsList from "./components/WeddingCardItemsList";
import { useState } from "react";
import Rsvp from "./components/Rsvp";
import Location from "./components/Location";
import { Toaster } from "sonner";
import Header from "./components/Header";

function App() {
  const [currPage, setCurrPage] = useState("home");
  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <Header setCurrPage={setCurrPage} />
        <main className="mb-12 sm:mb-16 flex flex-col items-center">
          <img
            src="/wedding-invite.png"
            alt="wedding invite"
            className={currPage === "home" ? "block" : "hidden"}
          />
          <img
            src="/dress-code.png"
            alt="dress code"
            className={currPage === "dresscode" ? "block" : "hidden"}
          />
          <Rsvp visibility={currPage === "rsvp" ? "block" : "hidden"} setCurrPage={setCurrPage}/>
          <Location visibility={currPage === "location" ? "block" : "hidden"} />
        </main>
      </div>
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default App;
