import React, { useState } from "react";
import { Link } from "react-router-dom";

function EnterCode() {
  const [showCodeSection, setShowCodeSection] = useState(false);

  const handleButtonClick = (buttonType) => {
    if (buttonType === 'no') {
      setShowCodeSection(true);
    }
  };

  return (
    <div className="relative bg-custom-bg overflow-hidden">
      <div className="flex items-center justify-center h-[76vh] relative z-10">
        <div className="bg-white p-20 w-full max-w-xl rounded-lg text-gray-900 text-center border-4 border-custom-border">
          <p className="text-xl mb-6">Are you a new user?</p>
          <Link to='/newcode'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded mr-4"          >
            Yes
          </button>
            </Link>
          
          <button
            onClick={() => handleButtonClick('no')}
            className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded"
          >
            No
          </button>
          {showCodeSection && (
            <div id="codeSection" className="mt-8">
              <p className="mb-4">Please enter the code:</p>
              <input
                type="text"
                placeholder="Enter code here"
                className="p-3 border border-gray-300 rounded w-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EnterCode;
