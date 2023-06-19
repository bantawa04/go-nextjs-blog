import React from "react"
import PrivateRoute from "../../../withPrivateRoute"
import { PostForm } from "../../../components/organisms/PostForm"

const EditPost = () => {
  return <PostForm />
}

export default PrivateRoute(EditPost)
