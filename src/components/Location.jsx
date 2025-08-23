
export default function Location({visibility}) {
  return (
    <div className={`${visibility} relative`}>
      <img src="/location.png" alt="location"/>
      <a
        href="https://maps.app.goo.gl/nWhEJtbg8McvZZ8j9"
        className="w-[30%] h-[5%] absolute top-[75%] left-[35%] px-4"
      >
      </a>
    </div>
  );
}
