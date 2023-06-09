import React, { useState } from "react"
import type { MenuProps } from "antd"
import { Menu } from "antd"

const items: MenuProps["items"] = [
  {
    label: "Navigation One",
    key: "1",
  },
  {
    label: "Navigation Two",
    key: "2",
  },
]
const [current, setCurrent] = useState("1")

const onClick: MenuProps["onClick"] = (e) => {
  setCurrent(e.key)
}
const AdminNav: React.FC = () => {
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
