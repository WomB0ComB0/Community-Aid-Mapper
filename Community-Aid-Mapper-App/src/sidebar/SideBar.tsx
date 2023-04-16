import { useState } from "react";

const Sidebar = () => {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [events, setEvents] = useState([]);

  const handleSearch = () => {
    // calls the api
  };

  return (
    <div className="h-screen flex flex-col border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold mb-2">Search</h2>
        <div className="mb-4">
          <label htmlFor="location" className="block font-medium mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block font-medium mb-2">
            Category
          </label>
          <select
            id="category"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="food">Food</option>
            <option value="clothing">Clothing</option>
            <option value="both">Both</option>
          </select>
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="p-4 flex-grow">
        <h2 className="text-lg font-semibold mb-2">Events</h2>
        {events.length === 0 ? (
          <p>No events found</p>
        ) : (
          <ul>
            {events.map((event) => (
              <li key={event.id}>{event.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
