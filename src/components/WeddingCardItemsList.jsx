import WeddingCardItem from "./WeddingCardItem";

function WeddingCardItemsList({ events }) {
  return (
    <div className="space-y-12 sm:space-y-16">
      {events.map((event, index) => (
        <WeddingCardItem index={index} details={event} />
      ))}
    </div>
  );
}

export default WeddingCardItemsList;
