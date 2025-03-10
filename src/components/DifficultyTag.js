import React from "react";

const DifficultyTag = ({ difficulty, onChange }) => {
  return (
    <div className="difficulty-tag">
      <label htmlFor="difficulty">Difficulty Level:</label>
      <select
        id="difficulty"
        value={difficulty}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default DifficultyTag;
