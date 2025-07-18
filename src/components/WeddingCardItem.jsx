function WeddingCardItem({ details, index }) {
  return (
    <div
      key={index}
      className="relative flex items-center justify-center min-h-24 sm:min-h-32"
    >
      {/* Left illustration - hidden on mobile, visible on sm+ */}
      <div
        className="absolute opacity-60 hidden sm:block"
        style={{
          color: "#ffd6e7",
          left: "10%",
          top: `${-20 + (index % 4) * 20}px`,
        }}
      >
        <div>
          {details.leftIcon}
        </div>
      </div>

      {/* Center content */}
      <div className="text-center bg-white p-4 sm:p-6 z-10 max-w-md sm:max-w-lg">
        <div
          className="text-xl sm:text-2xl font-serif mb-2"
          style={{ color: "#265026" }}
        >
          {details.time}
        </div>
        <h3
          className="text-lg sm:text-xl font-semibold mb-2"
          style={{ color: "#265026" }}
        >
          {details.title}
        </h3>
        <p className="mb-1 text-sm sm:text-base" style={{ color: "#507550" }}>
          {details.description}
        </p>
        <p
          className="font-medium italic text-sm sm:text-base"
          style={{ color: "#507550" }}
        >
          {details.subtitle}
        </p>
      </div>

      {/* Right illustration - hidden on mobile, visible on sm+ */}
      <div
        className="absolute opacity-60 hidden sm:block"
        style={{
          color: "#c9e894",
          right: "10%",
          top: `${-10 + (index % 3) * 25}px`,
        }}
      >
        <div>
          {details.rightIcon}
        </div>
      </div>
    </div>
  );
}

export default WeddingCardItem;
