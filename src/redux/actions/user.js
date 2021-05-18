import * as firebase from 'firebase'
import { db }  from '../../firebase/db'
import { orderBy } from 'lodash'


/* Sign Up Page Starts */

export const updatePhoto = (input) =>{
    return {
        type: 'UPDATE_PHOTO', payload: input
    }
}

export const updateSecondPic = (input) =>{
    return{
        type: 'UPDATE_SECOND_PIC', payload: input
    }
}


export const updateThirdPic = (input) =>{
    return{
        type: 'UPDATE_Third_PIC', payload: input
    }
}

export const updateFourthPic = (input) =>{
    return{
        type: 'UPDATE_Fourth_PIC', payload: input
    }
}

export const updateFifthPic = (input) =>{
    return{
        type: 'UPDATE_Fifth_PIC', payload: input
    }
}

export const updateName = (input) =>{
    return{
        type: 'UPDATE_NAME', payload: input
    }
}

export const updateAge = (input) =>{
    return{
        type: 'UPDATE_AGE', payload: input
    }
}
export const updateLanguage = (input) =>{
    return{
        type: 'UPDATE_LANGUAGE', payload: input
    }
}

export const updateIntroduction = (input) =>{
    return{
        type: 'UPDATE_INTRODUCTION', payload: input
    }
}

export const updateEmail = (input) =>{
    return{
        type: 'UPDATE_EMAIL', payload: input
    }
}

export const updatePassword = (input) =>{
    return{
        type: 'UPDATE_PASSWORD', payload: input
    }
}

export const signup = () =>{
    return async (dispatch, getState) =>{
        try{
            const { userName, age, introduction, photo, email,
                    password, profilePic2, profilePic3, profilePic4, profilePic5 } = getState().user
            const response = await firebase.auth().createUserWithEmailAndPassword(email,password)

            if(response.user.uid){
                // define Name in Firebase
                // 最初に全て必要な追加機能はここでセット？

                const user = {
                    uid: response.user.uid,
                    userName: userName,
                    age: age,
                    introduction: introduction,
                    email: email,
                    post: [],
                    likes: 0,
                    photo : photo,
                    following: [],
                    followers: [],
                    savedPosts: [],
                    profilePic2: '',
                    profilePic3: '',
                    profilePic4: '',
                    profilePic5: '',
                }
                await db.collection('users').doc(response.user.uid).set(user)
                dispatch({
                    type: 'LOGIN', payload: user
                })
                alert('User has been signed up.')
            }
        }
        catch(e){
            alert(e)
        }
    }
}

/* Sign Up Page Ends */


/* Edit Profile Starts */


export const updateUserProfile = () =>{
    return async (dispatch, getState) =>{
        try{
            const { uid, userName, age, introduction } = getState().user

            await db.collection('users').doc(uid).update({
                userName: userName,
                age: age,
                introduction: introduction
            })

            dispatch(getUser(uid,'PROFILE'))
        }
        catch(e){
            console.log(e)
        }
    }
}
/* Edit Profile Ends */

/* TakingPic Starts */

export const updateUserFirstPic = (input) =>{
    return async (dispatch, getState) =>{
        try{
            const { uid, photo } = getState().user

            await db.collection('users').doc(uid).update({
                photo: input
            })

            dispatch({
                type: 'UPDATE_PHOTO',
                payload: input
            })
        }
        catch(e){
            alert(e)
        }
    }
}

export const updateUserSecondPic = (input) =>{
    return async (dispatch, getState) =>{
        try{
            const {uid, profilePic2} = getState().user

            await db.collection('users').doc(uid).update({
                profilePic2: input
            })

            dispatch({
                type: 'UPDATE_SECOND_PIC',
                payload: input
            })
        }
        catch(e){
            alert(e)
        }
    }
}

export const updateUserThirdPic = (input) =>{
    return async (dispatch, getState) =>{
        try{
            const {uid, profilePic3} = getState().user

            await db.collection('users').doc(uid).update({
                profilePic3: input
            })

            dispatch({
                type: 'UPDATE_THIRD_PIC',
                payload: input
            })
        }
        catch(e){
            alert(e)
        }
    }
}

export const updateUserFourthPic = (input) =>{
    return async (dispatch, getState) =>{
        try{
            const {uid, profilePic4} = getState().user

            await db.collection('users').doc(uid).update({
                profilePic4: input
            })

            dispatch({
                type: 'UPDATE_FOURTH_PIC',
                payload: input
            })
        }
        catch(e){
            alert(e)
        }
    }
}

export const updateUserFifthPic = (input) =>{
    return async (dispatch, getState) =>{
        try{
            const {uid, profilePic5} = getState().user

            await db.collection('users').doc(uid).update({
                profilePic5: input
            })

            dispatch({
                type: 'UPDATE_FIFTH_PIC',
                payload: input
            })
        }
        catch(e){
            alert(e)
        }
    }
}

/* TakingPic Ends */

/* Auth Page Starts */

export const login = () =>{
    return async(dispatch, getState) =>{
        try{
            // Retrive datas(state) from Reducer?
            const { email, password } = getState().user
            const response = await firebase.auth().signInWithEmailAndPassword(email,password)
            dispatch(getUser(response.user.uid))
        }
        catch{
            console.log(error)
        }
    }
}

export const getUser = (uid,type) =>{
    return async(dispatch) =>{
        try{
            const userQuery = await db.collection('users').doc(uid).get()
            const user = userQuery.data()

            let posts = []
            const postQuery = await db.collection('posts').where('uid', '==', uid).get()

            postQuery.forEach(function(response){
                posts.push(response.data())
            })

            user.posts = orderBy(posts,'date','desc')

            if(type === 'PROFILE') {
                dispatch({
                    type: 'GET_PROFILE',
                    payload: user
                })
            }
            else{
                dispatch({
                    type: 'LOGIN',
                    payload: user
                })
            }
        }
        catch(e){
            console.log(e)
        }
    }
}


export const getAllUsers = (numberOfUsers) =>{
    return async (dispatch,getState) =>{
        try{
            const users = await db.collection('users')
                                .limit(numberOfUsers).get()
            let all = []
            users.forEach(a =>{
                // 全てのユーザーの情報を抽出
                all.push(a.data())
                console.log(all)
            })

            dispatch({
                type: 'GET_ALL_USERS',
                payload: all
            })
        }
        catch(e){
            console.log(e)
        }
    }
}

/* Auth Page Ends */

export const followUser = (userToFollow) =>{
    return async (dispatch,getState) =>{
        try{
            const { uid } = getState().user

            await db.collection('users').doc(uid).update({
                following: firebase.firestore.FieldValue.arrayUnion(userToFollow)
            })


            await db.collection('users').doc(userToFollow).update({
                followers: firebase.firestore.FieldValue.arrayUnion(uid)
            })

            dispatch(getUser(userToFollow,'PROFILE'))
        }
        catch(e){
            console.log(e)
        }
    }
}

export const unFollowUser = (userToFollow) =>{
    return async (dispatch,getState) =>{
        try{
            const { uid } = getState().user

            await db.collection('users').doc(uid).update({
                following: firebase.firestore.FieldValue.arrayRemove(userToFollow)
            })

            await db.collection('users').doc(userToFollow).update({
                followers: firebase.firestore.FieldValue.arrayRemove(uid)
            })

            dispatch(getUser(userToFollow,'PROFILE'))
        }
        catch(e){
            alert(e)
        }
    }
}