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

const initialState = {
  posts: [],
  comments: [],
  post: {},
  postUser: null,
  loadingPosts: false,
  loadingPostDetails: false,
  loadingPostUser: false,
  loadingPostComments: false,
  error: {
    message: ''
  }
}

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      state = { ...state, loadingPosts: true }
      break
    case GET_POSTS_SUCCESS:
      state = { ...state, posts: action.payload, loadingPosts: false }
      break
    case GET_POSTS_FAIL:
      state = {
        ...state,
        error: {
          message: 'Error'
        },
        loadingPosts: false
      }
      break
    case GET_POST_DETAILS:
      state = { ...state, loadingPostDetails: true }
      break
    case GET_POST_DETAILS_SUCCESS:
      state = { ...state, post: action.payload[0], loadingPostDetails: false }
      break
    case GET_POST_DETAILS_FAIL:
      state = {
        ...state,
        error: {
          message: 'Error'
        },
        loadingPostDetails: false
      }
      break
    case GET_POST_USER:
      state = { ...state, loadingPostUser: true }
      break
    case GET_POST_USER_SUCCESS:
      state = { ...state, postUser: action.payload, loadingPostUser: false }
      break
    case GET_POST_USER_FAIL:
      state = {
        ...state,
        error: {
          message: 'Error'
        },
        loadingPostUser: false
      }
      break
    case GET_POST_COMMENTS:
      state = { ...state, loadingPostComments: true }
      break
    case GET_POST_COMMENTS_SUCCESS:
      state = { ...state, comments: action.payload, loadingPostComments: false }
      break
    case GET_POST_COMMENTS_FAIL:
      state = {
        ...state,
        error: {
          message: 'Error'
        },
        loadingPostComments: false
      }
      break

    default:
      state = { ...state }
      break
  }
  return state
}

export default PostReducer
