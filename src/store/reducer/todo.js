import * as TYPES from '../action-types';

export default function todo(state = {
        data: [],
        flag: 'all'
}, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case(TYPES.TODO_ADD):
            let {content} = action;
            content.id = Math.random();
            state.data.push(content);
            break;

        case TYPES.TODO_FILTER:
            state.flag = action.text;
            break;
        //update task state
        case TYPES.TODO_UPDATE_STATE:
            let {taskId, newState} = action;
            let item = state.data.find(
                item => item.id === taskId);
            if(item){
                item.state = newState;
            }
            break;
        case TYPES.TODO_DELETE:
            let {Id} = action;
            state.data = state.data.filter(item => item.id !== Id);
            break;
        default:
            break;

    }
    return state;
}