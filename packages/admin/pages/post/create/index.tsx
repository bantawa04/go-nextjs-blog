import React from "react"
import PrivateRoute from "../../../withPrivateRoute"
import { PostForm } from "../../../components/organisms/PostForm"

const CreatePost = () => {
  return <PostForm />
}

export default PrivateRoute(CreatePost)
