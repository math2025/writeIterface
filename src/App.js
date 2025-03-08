import React, { useState } from "react";
import QuestionBox from "./components/QuestionBox";
import OptionsBox from "./components/OptionsBox";
import DifficultyTag from "./components/DifficultyTag";
import "./styles.css";

function App() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: [], difficulty: "easy" },
    ]);
  };

  const updateQuestion = (index, updatedQuestion) => {
    const newQuestions = [...questions];
    newQuestions[index] = updatedQuestion;
    setQuestions(newQuestions);
  };

  const downloadJSON = () => {
    const dataStr = JSON.stringify(questions, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "questions.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <h1>Math Questions Interface</h1>
      {questions.map((q, index) => (
        <div key={index} className="question-block">
          <QuestionBox
            question={q.question}
            onChange={(question) => updateQuestion(index, { ...q, question })}
          />
          <OptionsBox
            options={q.options}
            onChange={(options) => updateQuestion(index, { ...q, options })}
          />
          <DifficultyTag
            difficulty={q.difficulty}
            onChange={(difficulty) =>
              updateQuestion(index, { ...q, difficulty })
            }
          />
        </div>
      ))}
      <button className="button" onClick={addQuestion}>
        Add Question
      </button>
      <button className="button" onClick={downloadJSON}>
        Download JSON
      </button>
    </div>
  );
}

export default App;
