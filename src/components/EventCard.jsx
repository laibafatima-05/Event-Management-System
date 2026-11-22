function EventCard({ event }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{event.title}</h5>

        <p className="card-text">{event.description}</p>

        <p className="mb-1">
          <strong>Date:</strong> {event.date}
        </p>

        <p className="mb-0">
          <strong>Location:</strong> {event.location}
        </p>
      </div>
    </div>
  );
}

export default EventCard;
