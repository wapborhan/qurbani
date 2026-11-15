import { quesOne } from "./question/quesOne";
import { quesTwo } from "./question/quesTwo";

export const allQuestions = [...quesOne, ...quesTwo];

export const getQuestionById = (id) => {
  const numericId = Number(id);
  return allQuestions.find((item) => item.id === numericId) || null;
};

export default allQuestions;
