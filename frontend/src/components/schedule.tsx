import { Calendar, momentLocalizer, SlotInfo } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

export default function Schedule() {
  
    const [events, setEvents] = useState<{ id: Number; title: string; start: Date; end: Date }[]>([]);
    const [showPopup, setShowPopup] = useState(false);
    const [newEvent, setNewEvent] = useState<{ id: Number; title: string; start: Date; end: Date } | null>(null);

    // Handle clicking an empty time slot
    const handleSelectSlot = (slotInfo: SlotInfo) => {
        setNewEvent({ id: Date.now(), title: "", start: slotInfo.start, end: slotInfo.end });
        setShowPopup(true);
    };

    // Save the new event
    const handleSaveEvent = () => {
        if (newEvent?.title) {
            setEvents([...events, newEvent]);
            setShowPopup(false);
        }
    };

    const deleteSelectEvent = (event: { id: Number, title: string; start: Date; end: Date; }) => {
      const confirmDelete = window.confirm('Would you like to delete this event?');
      if (confirmDelete) {
          const updatedEvents = events.filter(e => e.id !== event.id);
          setEvents(updatedEvents);
      }
  };
  

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectSlot={handleSelectSlot}
                onSelectEvent={deleteSelectEvent}
                style={{ height: 300, width: "45%" }}
                defaultView="week"
            />

            {showPopup && (
                <div className="popup">
                    <input
                        type="text"
                        placeholder="Event Title"
                        value={newEvent?.title || ""}
                        onChange={(e) => setNewEvent((prev) => ({ ...prev!, title: e.target.value }))}
                    />
                    <button onClick={handleSaveEvent}>Save</button>
                    <button onClick={() => setShowPopup(false)}>Cancel</button>
                </div>
            )}
        </div>
    );
}