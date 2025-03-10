import React from "react";

const OptionsBox = ({ options, onChange }) => {
  const handleAddOption = () => {
    onChange([...options, ""]);
  };

  const handleRemoveOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    onChange(newOptions);
  };

  const handleChangeOption = (index, value) => {
    const newOptions = options.map((option, i) =>
      i === index ? value : option
    );
    onChange(newOptions);
  };

  return (
    <div className="options-box">
      {options.map((option, index) => (
        <div key={index} className="option">
          <input
            type="text"
            value={option}
            onChange={(e) => handleChangeOption(index, e.target.value)}
            placeholder={`Option ${index + 1}`}
          />
          <button onClick={() => handleRemoveOption(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddOption}>Add Option</button>
    </div>
  );
};

export default OptionsBox;
