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
