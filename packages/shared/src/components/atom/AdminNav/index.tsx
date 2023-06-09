import React, { useContext, useState } from "react"
import type { MenuProps } from "antd"
import { Menu } from "antd"
import { AuthContext } from "../../../../../admin/utils"
import { signOut } from "firebase/auth"
import { auth } from "../../.."
import {
  BranchesOutlined,
  FileTextOutlined,
  LogoutOutlined,
  TagOutlined,
} from "@ant-design/icons"

const AdminNav: React.FC = () => {
  const { setUser } = useContext(AuthContext)
  const [current, setCurrent] = useState("1")

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key)
  }
  const items: MenuProps["items"] = [
    {
      label: "Post",
      key: "1",
      icon: <FileTextOutlined />,
    },
    {
      label: "Categories",
      key: "2",
      icon: <BranchesOutlined />,
    },
    {
      label: "Tags",
      key: "3",
      icon: <TagOutlined />,
    },
    {
      label: "Log out",
      key: "4",
      icon: <LogoutOutlined />,
      onClick: () => {
        signOut(auth)
        setUser(null)
      },
    },
  ]

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode={"horizontal"}
      items={items}
    />
  )
}

export { AdminNav }
