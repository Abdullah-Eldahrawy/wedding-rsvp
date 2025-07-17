import CountDownTimer from "./components/CountDownTimer";

function App() {
  const headerList = ["Our Story", "Details", "RSVP"].map((listItem) => (
    <li className="text-[#556B2F] font-semibold text-base px-4 py-2 hover:underline cursor-pointer">
      {listItem}
    </li>
  ));
  const targetDate = new Date("2025-09-06T00:00:00");
  return (
    <>
      <header className="fixed top-0 w-full flex justify-around items-center px-6 py-4 bg-transparent hover:bg-white/70 hover:backdrop-blur-md transition duration-300">
        <p className="text-[#556B2F] text-lg font-bold">A&J</p>
        <ul className="flex items-center list-none">{headerList}</ul>
        <button className="border-2 border-[#556B2F] text-[#556B2F] px-4 py-1 rounded-md font-semibold hover:bg-[#e3e6d1] transition">
          RSVP
        </button>
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <CountDownTimer targetDate={targetDate}/>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
