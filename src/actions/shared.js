import { getInitialData } from '../utils/api'
import { saveQuestionAnswer, saveQuestion  } from '../utils/api'
import { receiveUsers, addAnswerToUser, addQuestionToUser } from '../actions/users'
import { receiveQuestions, addAnswerToQuestion, addQuestion } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
} 

export function handleInitialUsers (AUTHED_ID) {
    return (dispatch) => {
        
        return getInitialData()
            .then((users) => {
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_ID))
        })
    }
  }
  
export function handleSaveAnswer(authedUser, qid, answer) {
    return dispatch => {
    dispatch(addAnswerToUser(authedUser, qid, answer));
    dispatch(addAnswerToQuestion(authedUser, qid, answer));

    return saveQuestionAnswer(authedUser, qid, answer).catch(e => {
      console.warn('Error in handleSaveQuestionAnswer:', e);
    });
  };
};

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return dispatch => {
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      question => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      }
    );
  };
}