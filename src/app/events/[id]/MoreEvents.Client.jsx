"use client";
export default function MoreEvents({ events }) {
  return (
    <div>
      <h3>More Events</h3>
      <ul>
        {events.map((e) => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul>
    </div>
  );
}
