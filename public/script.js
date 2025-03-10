document.addEventListener("DOMContentLoaded", function () {
  // Load the QuestionBox HTML into the container
  fetch("questionBox.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("questionBoxContainer").innerHTML = data;
    });

  document
    .getElementById("addQuestionButton")
    .addEventListener("click", function () {
      const questionInput = document.getElementById("questionInput").value;
      const optionInputs = document.querySelectorAll(".optionInput");
      const options = Array.from(optionInputs).map((input) => input.value);

      const questionBlock = document.createElement("div");
      questionBlock.className = "container";
      questionBlock.innerHTML = `
        <textarea class="questionInput" placeholder="Enter your question here...">${questionInput}</textarea>
        <div class="options">
            ${options
              .map(
                (option, index) =>
                  `<input type="text" class="optionInput" placeholder="Option ${
                    index + 1
                  }" value="${option}">`
              )
              .join("")}
        </div>
        <button class="deleteButton">Delete Question</button>
    `;

      document.getElementById("questionsContainer").appendChild(questionBlock);

      // Add event listener to the delete button
      const deleteButton = questionBlock.querySelector(".deleteButton");
      deleteButton.addEventListener("click", function () {
        questionBlock.remove();
      });
    });

  document
    .getElementById("saveQuestionsButton")
    .addEventListener("click", function () {
      const questionBlocks = document.querySelectorAll(
        "#questionsContainer .container"
      );
      const questions = Array.from(questionBlocks).map((block) => {
        const question = block.querySelector(".questionInput").value;
        const options = Array.from(block.querySelectorAll(".optionInput")).map(
          (input) => input.value
        );
        return { question, options };
      });
      localStorage.setItem("questions", JSON.stringify(questions));
      alert("Questions saved!");
    });

  document
    .getElementById("loadQuestionsButton")
    .addEventListener("click", function () {
      const questions = JSON.parse(localStorage.getItem("questions") || "[]");
      const questionsContainer = document.getElementById("questionsContainer");
      questionsContainer.innerHTML = "";
      questions.forEach((q) => {
        const questionBlock = document.createElement("div");
        questionBlock.className = "container";
        questionBlock.innerHTML = `
            <textarea class="questionInput" placeholder="Enter your question here...">${
              q.question
            }</textarea>
            <div class="options">
                ${q.options
                  .map(
                    (option, index) =>
                      `<input type="text" class="optionInput" placeholder="Option ${
                        index + 1
                      }" value="${option}">`
                  )
                  .join("")}
            </div>
            <button class="deleteButton">Delete Question</button>
        `;
        questionsContainer.appendChild(questionBlock);

        // Add event listener to the delete button
        const deleteButton = questionBlock.querySelector(".deleteButton");
        deleteButton.addEventListener("click", function () {
          questionBlock.remove();
        });
      });
    });

  document
    .getElementById("downloadLatexButton")
    .addEventListener("click", function () {
      const questionBlocks = document.querySelectorAll(
        "#questionsContainer .container"
      );
      const questions = Array.from(questionBlocks).map((block) => {
        const question = block.querySelector(".questionInput").value;
        const options = Array.from(block.querySelectorAll(".optionInput")).map(
          (input) => input.value
        );
        return { text: question, options };
      });
      const latexCode = generateLatex(questions);
      const blob = new Blob([latexCode], { type: "application/x-latex" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "questions.tex";
      a.click();
      URL.revokeObjectURL(url);
    });

  document
    .getElementById("downloadPdfButton")
    .addEventListener("click", function () {
      const questionBlocks = document.querySelectorAll(
        "#questionsContainer .container"
      );
      const questions = Array.from(questionBlocks).map((block) => {
        const question = block.querySelector(".questionInput").value;
        const options = Array.from(block.querySelectorAll(".optionInput")).map(
          (input) => input.value
        );
        return { text: question, options };
      });
      const latexCode = generateLatex(questions);
      const blob = new Blob([latexCode], { type: "application/x-latex" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "questions.tex";
      a.click();
      URL.revokeObjectURL(url);

      // Compile LaTeX to PDF (this requires a server-side solution or a library like pdfmake)
      // For simplicity, we will just download the LaTeX file
      alert(
        "Download the LaTeX file and compile it to PDF using a LaTeX editor."
      );
    });

  document
    .getElementById("saveProgressButton")
    .addEventListener("click", function () {
      const questionBlocks = document.querySelectorAll(
        "#questionsContainer .container"
      );
      const questions = Array.from(questionBlocks).map((block) => {
        const question = block.querySelector(".questionInput").value;
        const options = Array.from(block.querySelectorAll(".optionInput")).map(
          (input) => input.value
        );
        return { question, options };
      });
      localStorage.setItem("questions", JSON.stringify(questions));
      alert("Progress saved!");
    });
});

function generateLatex(questions) {
  let latex = "\\documentclass[12pt]{article}\n";
  latex += "\\usepackage{amsmath}\n";
  latex += "\\usepackage{amssymb}\n";
  latex += "\\begin{document}\n";
  latex += "\\begin{enumerate}\n";

  questions.forEach((question, index) => {
    latex += `    \\item ${question.text}\n`;
    latex += "    \\begin{enumerate}[label=(\\alph*)]\n";
    question.options.forEach((option) => {
      latex += `        \\item ${option}\n`;
    });
    latex += "    \\end{enumerate}\n";
  });

  latex += "\\end{enumerate}\n";
  latex += "\\end{document}\n";
  return latex;
}
