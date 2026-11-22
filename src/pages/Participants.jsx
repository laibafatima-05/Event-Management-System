import { useState } from 'react'

function Participants() {
  const [participants, setParticipants] = useState(
    JSON.parse(localStorage.getItem('registrations')) || []
  )

  function removeParticipant(id) {
    const updated = participants.filter(item => item.id !== id)
    setParticipants(updated)
    localStorage.setItem('registrations', JSON.stringify(updated))
  }

  return (
    <section className="container py-5">
      <h2>Manage Participants</h2>

      <div className="table-responsive mt-4">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Event</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {participants.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.eventName}</td>
                <td>
                  <button className="btn btn-danger btn-sm"
                    onClick={() => removeParticipant(item.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {participants.length === 0 && <p>No participants found.</p>}
      </div>
    </section>
  )
}

export default Participants