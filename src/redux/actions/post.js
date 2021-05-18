import * as firebase from 'firebase'
import { db }  from '../../firebase/db'
import uuid from 'uuid'


export const updateDescription = (input) =>{
    return{
        type: 'UPDATE_DESCRIPTION', payload: input
    }
}

export const updateNextPhotos = (input) =>{
    return async (dispatch, getState) =>{
        try{
            // Push all photos into an array which an User selects.
            let array = []
            // Retrive post data which is the same value from Reducers.
            const { post } = getState()
            post.photos?.forEach(photo => {
                array.push(photo)
            })
            array.push(input)

            dispatch({
                type: 'UPDATE_POST_NEXT_PHOTO',
                payload: array
            })
        }
        catch(e){
            alert(e)
        }
    }
}

export const removeImage = (photoToRemove) =>{
    return async (dispatch, getState) =>{
        try{
           const array = []
           const { post } = getState()
           post.photos.forEach(photo =>{
               array.push(photo)
           })
           // Remove a photo which an User selects
           array.splice(photoToRemove,1)

           dispatch({
                type: 'UPDATE_POST_NEXT_PHOTO',
                payload: array
           })
        }
        catch(e){
            alert(e)
        }
    }
}

export const uploadPost = () =>{
    return async ( dispatch, getState ) => {
        try {
            const { user, post } = getState()
            const id = uuid.v4()
            const upload = {
                id: id,
                uid: user.uid,
                photo: user.photo,
                photos: post.photos,
                userName: user.userName,
                date: new Date().getTime(),
                // []には、ライクボタンを押したユーザーのIDが格納される
                likes: [],
                savedBy:[],
                comment: [],
                description:post.description
            }

            await db.collection('posts').doc(id).set(upload)
            await db.collection('users').doc(user.uid).update({
                // Add user.uid into post array
                post: firebase.firestore.FieldValue.arrayUnion(id)
            })
        }
        catch(e){
            alert(e)
        }
    }
}

export const getPosts = (numberOfPosts) =>{
    return async (dispatch, getState) =>{
            const posts = await db.collection('posts').orderBy('date','desc')
                                .limit(numberOfPosts).get()
            let array = []
            posts.forEach(post =>{
                array.push(post.data())
            })

            dispatch({
                type:'GET_POSTS',
                payload: array
            })
    }
}

export const getSavedPosts = () =>{
    return async (dispatch, getState) =>{
        try{
            // Get uid from logging user collection
            const { uid } = getState().user
            const posts = await db.collection('posts').orderBy('date','desc')
                          .where('savedBy', 'array-contains', uid).get()

           let array = []
           posts.forEach(post =>{
               array.push(post.data())
           })

           dispatch({
               type: 'GET_SAVED_POSTS',
               payload: array
           })
        }
        catch(e){
            console.log(e)
        }
    }
}

export const likePost = (post) =>{
    return async ( dispatch, getState) =>{
        try{
            const { uid } = getState().user

            await db.collection('posts').doc(post.id).update({
                // Push uid into array of likes
                likes: firebase.firestore.FieldValue.arrayUnion(uid)
            })
        }
        catch(e){
            alert(e)
        }
    }
}

export const unLikePost = (post) =>{
    return async ( dispatch, getState) =>{
        try{
            const { uid } = getState().user

            await db.collection('posts').doc(post.id).update({
                likes: firebase.firestore.FieldValue.arrayRemove(uid)
            })
        }
        catch(e){
            alert(e)
        }
    }
}

export const savePost = (post) =>{
    return async (dispatch, getState) =>{
        try{
            const { uid } = getState().user

            // Add user uid who has liked their own posts
            await db.collection('posts').doc(post.id).update({
                savedBy: firebase.firestore.FieldValue.arrayUnion(uid)
            })

            // Add SavedPosts document of logging User
            await db.collection('users').doc(uid).update({
                savedPosts: firebase.firestore.FieldValue.arrayUnion(post.id)
            })
        }
        catch(e){
            alert(e)
        }
    }
}

export const unSavePost = (post) =>{
    return async (dispatch,getState) =>{
        try{
            const { uid } = getState().user

            // Remove user uid who has liked their own posts
            await db.collection('posts').doc(post.id).update({
                savedBy: firebase.firestore.FieldValue.arrayRemove(uid)
            })

            // Remove SavedPosts document of logging User
            await db.collection('users').doc(uid).update({
                savedPosts: firebase.firestore.FieldValue.arrayRemove(post.id)
            })
        }
        catch(e){
            alert(e)
        }
    }
}


/*export const addMessage = (text) =>{
    return async (dispathc,getState) =>{
        const { uid,userName,photo} = getState().user
        try{
            const message = {
                message: text,
                uid: uid,
                userName: userName,
                photo: photo,
                date: new Date().getTime()
            }

            await db.collection('messages').doc().set(message)
        }
        catch(e){
            alert(e)
        }
    }
}*/