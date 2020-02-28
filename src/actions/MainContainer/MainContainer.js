import { GET_PAGE_LIST } from "../../constants/constants";


export const getUsersList = (userList) => {
    return {
        type: GET_PAGE_LIST,
        payload: userList,
    };
}