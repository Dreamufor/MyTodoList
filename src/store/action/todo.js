import * as TYPES from '../action-types';


let todo = {
    //add todo
    add(content) {
        return {
          type: TYPES.TODO_ADD,
          content
        }
    },
    filter(text){
        return {
            type: TYPES.TODO_FILTER,
            text
        }
    },
    updateState(taskId, newState){
        return{
            type: TYPES.TODO_UPDATE_STATE,
            taskId,
            newState
        }
    },
    remove(Id){
        return{
            type: TYPES.TODO_DELETE,
            Id
        }
    }
}
export default todo;

