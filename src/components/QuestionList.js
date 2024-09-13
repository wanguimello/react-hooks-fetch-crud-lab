import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch all the questions on mount
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => setQuestions(questions));
  }, []);

  // Function to remove a question from the state after deletion
  function handleDeleteQuestion(deletedQuestionId) {
    // Update the state to remove the question that was deleted
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== deletedQuestionId)
    );
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDelete={handleDeleteQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;