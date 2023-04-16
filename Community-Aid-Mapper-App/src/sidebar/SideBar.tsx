import { useState } from "react";

const Sidebar = () => {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [events, setEvents] = useState([]);
  // Get name from firebase
  const handleSearch = () => {
    // calls the api
  };

  return (
    <div className="flex flex-col h-screen border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="mb-2 text-lg font-semibold">Search</h2>
        <div className="mb-4">
          <label htmlFor="location" className="block mb-2 font-medium">
            Location
          </label>
          <input
            type="search"
            id="location"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter a location..."
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2 font-medium">
            Category
          </label>
          <select
            id="category"
            className="items-start w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="food">Food</option>
            <option value="clothing">Clothing</option>
            <option value="both">Both</option>
          </select>
        </div>
        {/* Function to get the lat and long of the input/selected location and it pins them on the map*/}
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="flex-grow p-4">
        <h2 className="mb-2 text-lg font-semibold">Events</h2>
        {events.length == 0 ? (
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