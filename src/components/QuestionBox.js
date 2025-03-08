import React, { useState } from 'react';
import OptionsBox from './OptionsBox';
import DifficultyTag from './DifficultyTag';

const QuestionBox = ({ onAddQuestion }) => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['']);
    const [difficulty, setDifficulty] = useState('easy');

    const handleAddOption = () => {
        setOptions([...options, '']);
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddQuestion({ question, options, difficulty });
        setQuestion('');
        setOptions(['']);
        setDifficulty('easy');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Question:</label>
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                />
            </div>
            <OptionsBox options={options} onOptionChange={handleOptionChange} onAddOption={handleAddOption} />
            <DifficultyTag difficulty={difficulty} onDifficultyChange={setDifficulty} />
            <button type="submit">Add Question</button>
        </form>
    );
};

export default QuestionBox;