import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Draggable from 'react-draggable';
import ICAL from 'ical.js';
import '../index.css'; // Import the CSS file for styles
import { FaCalendar } from 'react-icons/fa';

const ICS_FILE_URL = '/ics/calendar.ics'; // Path to the ICS file in the public folder

const GoogleCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [dailyEvents, setDailyEvents] = useState([]);

  useEffect(() => {
    const fetchICSFile = async () => {
      try {
        const response = await fetch(ICS_FILE_URL);
        const icsText = await response.text();

        const jcalData = ICAL.parse(icsText);
        const comp = new ICAL.Component(jcalData);
        const vevents = comp.getAllSubcomponents('vevent');

        const parsedEvents = vevents.map((event) => {
          const e = new ICAL.Event(event);
          return {
            summary: e.summary,
            startDate: e.startDate.toJSDate(), // Convert to JavaScript Date object
            endDate: e.endDate.toJSDate(),
          };
        });

        setEvents(parsedEvents);
      } catch (error) {
        console.error('Failed to fetch or parse ICS file', error);
      }
    };

    fetchICSFile();
  }, []);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    const selectedDate = new Date(newDate);
    const filteredEvents = events.filter(
      (event) =>
        event.startDate.toDateString() === selectedDate.toDateString() ||
        (event.endDate > selectedDate && event.startDate < selectedDate)
    );
    setDailyEvents(filteredEvents);
  };

  return (
    <Draggable>
    <div className="widget google-calendar">
      <div className="widget-icon">
        <FaCalendar />
      </div>
      <div className="widget-content">
        <div className="calendar-container">
          <Calendar
            onChange={handleDateChange}
            value={date}
          />
        </div>
        <div className="events-container">
          <h3>Events</h3>
          {dailyEvents.length === 0 ? (
            <p>No events for selected date.</p>
          ) : (
            <ul>
              {dailyEvents.map((event, index) => (
                <li key={index}>
                  <strong>{event.summary}</strong>
                  <p>{`Start: ${event.startDate.toLocaleString()}`}</p>
                  <p>{`End: ${event.endDate.toLocaleString()}`}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
    </Draggable>
  );
};

export default GoogleCalendar;
