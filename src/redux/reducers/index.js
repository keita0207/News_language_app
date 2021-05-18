import { combineReducers } from 'redux'


const user = (state = {}, action) =>{
    switch (action.type){
        case 'UPDATE_PHOTO':
            return { ...state, photo: action.payload}
        case 'UPDATE_SECOND_PIC':
            return { ...state, profilePic2: action.payload}
        case 'UPDATE_THIRD_PIC':
            return { ...state, profilePic3: action.payload}
        case 'UPDATE_FOURTH_PIC':
            return { ...state, profilePic2: action.payload}
        case 'UPDATE_FIFTH_PIC':
            return { ...state, profilePic3: action.payload}
        case 'UPDATE_NAME':
            return { ...state, userName: action.payload}
        case 'UPDATE_AGE':
            return { ...state, age: action.payload}
        case 'UPDATE_LANGUAGE':
            return { ...state, language: action.payload}
        case 'UPDATE_INTRODUCTION':
            return { ...state, introduction: action.payload}
        case 'UPDATE_EMAIL':
            return { ...state, email: action.payload}
        case 'UPDATE_PASSWORD':
            return { ...state, password: action.payload}
        case 'GET_ALL_USERS':
            return { ...state, users: action.payload}
        case 'LOGIN':
            return action.payload
        default:
            return state
    }
}

const post = (state = {}, action) =>{
    switch(action.type){
        case 'UPDATE_POST_NEXT_PHOTO':
            return { ...state, photos: action.payload}
        case 'UPDATE_DESCRIPTION':
            return { ...state, description: action.payload}
        case 'GET_POSTS':
            return { ...state, feed: action.payload}
        case 'GET_SAVED_POSTS':
            return { ...state, saved_feed: action.payload}
        default:
            return state
    }
}

const profile = (state = {}, action) =>{
    switch (action.type){
        case 'GET_PROFILE':
            return action.payload
        default:
            return state
    }
}


const rootReducer = combineReducers({
    user,
    post,
    profile,
})


export default rootReducer
