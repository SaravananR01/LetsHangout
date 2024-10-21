import React from "react";
import { useLocation } from 'react-router-dom';
import "../confirmation.css";
import fun from "../assets/fun-hang-out.gif";
import img34 from "../assets/img34.gif";

function Confirmation() {
  const location = useLocation();
  const { code } = location.state || {};  // Retrieve the generated code

  return (
    <div className="bg-custom-bgs flex items-center justify-center h-[76.5vh] relative">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-customs mb-6">Congratulations!</h1>
        <p className="text-lg text-gray-700 max-w-prose mx-auto mb-8">
          Your unique code is: <strong>{code}</strong>
        </p>

        <p className="mt-4 text-lg text-gray-700">
          Share this code with your friends:
        </p>

        {/* Add share buttons for different platforms */}
        <div className="mt-4">
          <a 
            href={`https://wa.me/?text=Join me with this code: ${code}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mr-2 text-white bg-green-500 px-4 py-2 rounded-lg"
          >
            Share on WhatsApp
          </a>

          <a 
            href={`mailto:?subject=Join Event&body=Join me with this code: ${code}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mr-2 text-white bg-blue-500 px-4 py-2 rounded-lg"
          >
            Share via Email
          </a>
        </div>
      </div>
      <img src={fun} alt="Fun Friends GIF" className="lefts h-96" />
      <img src={img34} alt="Fun Penguin GIF" className="rights" />
    </div>
  );
}

export default Confirmation;
