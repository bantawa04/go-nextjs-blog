import React from "react"
import PrivateRoute from "../../withPrivateRoute"
import { AttributeForm } from "../../components"
const TagsPage: React.FC = () => {
  return <AttributeForm />
}
export default PrivateRoute(TagsPage, "Tags")
