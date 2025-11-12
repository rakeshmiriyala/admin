import React from "react";

const slotData = {
  "Box Cricket": [
    { id: 1, time: "10:00 AM - 12:00 PM", user: "John Doe", bookedSlots: 2 },
    { id: 2, time: "12:30 PM - 02:30 PM", user: "Alice Brown", bookedSlots: 3 },
    { id: 3, time: "03:00 PM - 05:00 PM", user: "Robert Smith", bookedSlots: 1 },
  ],
  "Go Karting": [
    { id: 1, time: "09:00 AM - 11:00 AM", user: "Emma Watson", bookedSlots: 2 },
    { id: 2, time: "11:30 AM - 01:30 PM", user: "David Lee", bookedSlots: 1 },
    { id: 3, time: "02:00 PM - 04:00 PM", user: "Sophia Wilson", bookedSlots: 3 },
  ],
  Swimming: [
    { id: 1, time: "05:00 PM - 07:00 PM", user: "Oliver White", bookedSlots: 4 },
    { id: 2, time: "07:30 PM - 09:30 PM", user: "Liam Johnson", bookedSlots: 2 },
    { id: 3, time: "10:00 PM - 12:00 AM", user: "Noah Davis", bookedSlots: 1 },
  ],
  Football: [
    { id: 1, time: "06:00 PM - 08:00 PM", user: "William Martinez", bookedSlots: 3 },
    { id: 2, time: "08:30 PM - 10:30 PM", user: "James Anderson", bookedSlots: 2 },
    { id: 3, time: "11:00 PM - 01:00 AM", user: "Benjamin Carter", bookedSlots: 4 },
  ],
};

const SlotDashboard = () => {
  return (
    <div className="ml-auto w-3/4 p-6 flex flex-col pl-64">
      <h1 className="text-3xl font-bold mb-6">Slot Bookings</h1>

      {/* Loop through each business to generate a table */}
      {Object.keys(slotData).map((business, index) => (
        <div key={index} className="bg-white p-6  w-full mb-6">
          <h2 className="text-2xl font-semibold mb-4">{business}</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Time</th>
                <th className="border p-2">Booked By</th>
                <th className="border p-2">Slots Booked</th>
              </tr>
            </thead>
            <tbody>
              {slotData[business].map((slot) => (
                <tr key={slot.id} className="text-center">
                  <td className="border p-2">{slot.time}</td>
                  <td className="border p-2">{slot.user}</td>
                  <td className="border p-2 text-blue-600 font-semibold">{slot.bookedSlots}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default SlotDashboard;
