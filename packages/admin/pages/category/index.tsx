import React from "react"
import PrivateRoute from "../../withPrivateRoute"
import { AttributeForm } from "../../components"
const CategoryPage: React.FC = () => {
  return <AttributeForm />
}
export default PrivateRoute(CategoryPage, "Categories")
