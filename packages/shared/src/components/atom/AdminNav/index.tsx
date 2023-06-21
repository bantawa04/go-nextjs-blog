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
import { useRouter } from "next/router"

const AdminNav: React.FC = () => {
  const { setUser } = useContext(AuthContext)
  const [current, setCurrent] = useState("1")
  const router = useRouter()
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key)
  }
  const items: MenuProps["items"] = [
    {
      label: "Post",
      key: "1",
      icon: <FileTextOutlined />,
      onClick: () => {
        router.push("/")
      },
    },
    {
      label: "Categories",
      key: "2",
      icon: <BranchesOutlined />,
      onClick: () => {
        router.push("/category")
      },
    },
    {
      label: "Tags",
      key: "3",
      icon: <TagOutlined />,
      onClick: () => {
        router.push("/tags")
      },
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
