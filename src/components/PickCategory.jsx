import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import Category from "../img/category.svg";

import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div id="category">
      <h1>Escolha uma categoria</h1>
      <h3>As perguntas serão de acordo com a minha opinião, ja que foi eu quem fiz hehe</h3>
      <br/>
      <p>Escolha as seguintes opções:</p>
      <br/>
      {quizState.questions.map((question) => (
        <button
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category}
        </button>
      ))}

      <a href="/bonus.html" target="_blank" rel="noopener noreferrer">
        <button>
          Pergunta Bônus
        </button>
      </a>

      
      <img src={Category} alt="Categoria do Quiz" />
    </div>
  );
};

export default PickCategory;
