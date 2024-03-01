import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  GET_POST_DETAILS,
  GET_POST_DETAILS_SUCCESS,
  GET_POST_DETAILS_FAIL,
  GET_POST_USER,
  GET_POST_USER_SUCCESS,
  GET_POST_USER_FAIL,
  GET_POST_COMMENTS,
  GET_POST_COMMENTS_SUCCESS, GET_POST_COMMENTS_FAIL
} from './actionTypes'

export const getPosts = (pay) => {
  return {
    type: GET_POSTS,
    payload: { ...pay }
  }
}

export const getPostsSuccess = (posts) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts
  }
}

export const getPostsFail = (error) => {
  return {
    type: GET_POSTS_FAIL,
    payload: error
  }
}

export const getPostDetails = (id) => {
  return {
    type: GET_POST_DETAILS,
    payload: id
  }
}

export const getPostDetailsSuccess = (post) => {
  return {
    type: GET_POST_DETAILS_SUCCESS,
    payload: post
  }
}

export const getPostDetailsFail = (error) => {
  return {
    type: GET_POST_DETAILS_FAIL,
    payload: error
  }
}

export const getPostUser = (id) => {
  return {
    type: GET_POST_USER,
    payload: id
  }
}

export const getPostUserSuccess = (user) => {
  return {
    type: GET_POST_USER_SUCCESS,
    payload: user
  }
}

export const getPostUserFail = (error) => {
  return {
    type: GET_POST_USER_FAIL,
    payload: error
  }
}

export const getPostComments = (id) => {
  return {
    type: GET_POST_COMMENTS,
    payload: id
  }
}

export const getPostCommentsSuccess = (comments) => {
  return {
    type: GET_POST_COMMENTS_SUCCESS,
    payload: comments
  }
}

export const getPostCommentsFail = (error) => {
  return {
    type: GET_POST_COMMENTS_FAIL,
    payload: error
  }
}
