import { takeLatest, put, call } from 'redux-saga/effects'

import { GET_POSTS, GET_POST_DETAILS, GET_POST_USER, GET_POST_COMMENTS } from './actionTypes'

import {
  getPostsSuccess,
  getPostsFail,
  getPostDetailsSuccess,
  getPostDetailsFail, getPostUserSuccess, getPostUserFail, getPostCommentsSuccess, getPostCommentsFail
} from './actions'

import { getPosts, getPostDetails, getPostUser, getPostComments } from '../../helpers/backend_helper'

function * onGetPosts ({ payload: pay }) {
  try {

    const response = yield call(getPosts, pay.page)
    if (response.length > 0 && pay.page <= 10) {
      yield put(getPostsSuccess([...pay.oldPosts, ...response]))
    } else {
      return
    }
  } catch (error) {
    yield put(getPostsFail(error.response))
  }
}

function * onGetPostDetails ({ payload: id }) {
  try {
    const response = yield call(getPostDetails, id)
    yield put(getPostDetailsSuccess(response))
  } catch (error) {
    yield put(getPostDetailsFail(error.response))
  }
}

function * onGetPostUser ({ payload: id }) {
  try {
    const response = yield call(getPostUser, id)
    yield put(getPostUserSuccess(response))
  } catch (error) {
    yield put(getPostUserFail(error.response))
  }
}

function * onGetPostComments ({ payload: id }) {
  try {
    const response = yield call(getPostComments, id)
    yield put(getPostCommentsSuccess(response))
  } catch (error) {
    yield put(getPostCommentsFail(error.response))
  }
}

function * CartSaga () {
  yield takeLatest(GET_POSTS, onGetPosts)
  yield takeLatest(GET_POST_DETAILS, onGetPostDetails)
  yield takeLatest(GET_POST_USER, onGetPostUser)
  yield takeLatest(GET_POST_COMMENTS, onGetPostComments)
}

export default CartSaga
