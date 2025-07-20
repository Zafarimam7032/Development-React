import { useState } from "react";

function DisplayAndInput() {
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    // Handle add
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddItem();
  };

  return (
    <div className="w-full  flex justify-center bg-white">
      <div className="w-full  p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Enter something to Ask ..."
            className="flex-1 px-4 py-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 resize-none"
          />

          <button
            onClick={handleAddItem}
            className=" bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisplayAndInput;
