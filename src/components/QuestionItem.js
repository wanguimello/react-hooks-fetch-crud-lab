import React from "react";

function QuestionItem({ question, onDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  // Handle Delete: Sends a DELETE request and updates the parent component's state
  function handleDelete() {
    // Send the DELETE request to the server
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // If delete is successful, notify parent to update the state
          onDelete(id);
        } else {
          console.error("Failed to delete the question.");
        }
      })
      .catch((error) => {
        console.error("Error during deletion:", error);
      });
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;