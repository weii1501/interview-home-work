// src/helpers/backend_helper.js

import { get } from './api_helper'
import * as url from './url_helper'

// Post
export const getPosts = (page = 1) => get(url.GET_POSTS, {
  params: {
    '_page': page
  }
})

// Post
export const getPostDetails = (id) =>
  get(url.GET_POST_DETAILS, {
    params: {
      id: id
    }
  })

// User
export const getPostUser = (id) =>
  get(url.GET_POST_USER, {
    params: {
      id: id
    }
  })

// Comment
export const getPostComments = (id) =>
  get(url.GET_POST_COMMENTS + id)
