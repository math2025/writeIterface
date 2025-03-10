import React, { useState } from "react";
import OptionsBox from "./OptionsBox";
import DifficultyTag from "./DifficultyTag";

const QuestionBox = ({ question, onChange }) => {
  const [options, setOptions] = useState([""]);
  const [difficulty, setDifficulty] = useState("easy");

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
    onChange({ question, options: newOptions, difficulty });
  };

  const handleDifficultyChange = (value) => {
    setDifficulty(value);
    onChange({ question, options, difficulty: value });
  };

  return (
    <div>
      <label>Question:</label>
      <input
        type="text"
        value={question}
        onChange={(e) =>
          onChange({ question: e.target.value, options, difficulty })
        }
        required
      />
      <OptionsBox options={options} onChange={handleOptionChange} />
      <DifficultyTag
        difficulty={difficulty}
        onChange={handleDifficultyChange}
      />
    </div>
  );
};

export default QuestionBox;
