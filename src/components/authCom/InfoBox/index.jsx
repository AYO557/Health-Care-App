import React from "react";

const InfoBox = () => {
  const healthTips = [
    "Drink at least 8 glasses of water a day.",
    "Eat a balanced diet with a variety of foods.",
    "Get at least 30 minutes of exercise daily.",
    "Avoid smoking and limit alcohol consumption.",
    "Get enough sleep and manage stress effectively.",
  ];

  // Function to get a random health tip
  const getRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * healthTips.length);
    return healthTips[randomIndex];
  };

  return (
    <div className="bg-green-200 rounded-xl sm:h-[15rem] sm:w-64 w-[100%] p-4">
      <h2 className="font-bold text-lg mb-2">Health Tip of the Day</h2>
      <ul className="list-disc p-2">
        <li>Drink at least 8 glasses of water a day</li>
        <li>Eat a balanced diet with a variety of foods...</li>
      </ul>
    </div>
  );
};

export default InfoBox;
