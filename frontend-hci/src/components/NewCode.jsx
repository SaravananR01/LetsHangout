import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewCode() {
  const [name, setName] = useState('');
  const [eventName, setEventName] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [maxSlotTime, setMaxSlotTime] = useState('');
  const [maxPeople, setMaxPeople] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();  // Initialize the navigate hook

  // Function to generate and send code data to backend
  const generateCode = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/generate_code/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          event_name: eventName,
          from_date: fromDate,
          to_date: toDate,
          max_slot_time: maxSlotTime,
          max_people: maxPeople,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Navigate to the confirmation page and pass the generated code
        navigate('/confirmation', { state: { code: data.code } });
      } else {
        setError('Failed to generate code.');
      }
    } catch (error) {
      setError('An error occurred while generating the code.');
      console.error(error);  // Log error for debugging
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg mb-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Generate New Code</h2>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded-lg mt-1"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Event Name</label>
        <input 
          type="text" 
          value={eventName} 
          onChange={(e) => setEventName(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded-lg mt-1"
          placeholder="Enter event name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">From Date</label>
        <input 
          type="date" 
          value={fromDate} 
          onChange={(e) => setFromDate(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded-lg mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">To Date</label>
        <input 
          type="date" 
          value={toDate} 
          onChange={(e) => setToDate(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded-lg mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Maximum Slot Time (hours)</label>
        <input 
          type="number" 
          value={maxSlotTime} 
          onChange={(e) => setMaxSlotTime(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded-lg mt-1"
          placeholder="Enter max slot time"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Maximum Number of People</label>
        <input 
          type="number" 
          value={maxPeople} 
          onChange={(e) => setMaxPeople(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded-lg mt-1"
          placeholder="Enter max number of people"
        />
      </div>

      <button 
        onClick={generateCode}
        className="w-full bg-[#E85A4F] text-white p-3 rounded-lg hover:bg-[#E98074] transition duration-300"
      >
        Generate Code
      </button>
    </div>
  );
}

export default NewCode;
