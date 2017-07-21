import TASKS from '../data/tasks';

const initialState = TASKS;

const saveTask = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_TASK':
      console.log('SAVE_TASK', state, action);
      return state.map(t =>
        (t.id === action.task.id) 
          ? action.task
          : t
      )
    default:
      return state
  }
}

export default saveTask