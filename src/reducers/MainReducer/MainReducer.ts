import { GET_PAGE_LIST } from "../../constants/constants"
const initialState = {
    usersList: []
    };

const mainReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_PAGE_LIST:
            return {
                ...state,
                usersList:action.payload
            }

        default:
            return state
    }
}

export default mainReducer;