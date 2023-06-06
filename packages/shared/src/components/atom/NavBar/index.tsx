import { MenuOutlined } from "@ant-design/icons"
import React from "react"
import styled from "styled-components"
import { Button } from "antd"

const NavBarWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: transparent;
  justify-content: space-around;
  align-items: center;
  margin-bottom: -100px;
  position: relative;
  z-index: 10;
  max-height: 100px;
  padding: 0.5rem;
  .logoWrapper {
    img {
      max-height: 70px;
      width: auto;
    }
    margin-right: 20px;
  }
`
const HamburgerButton = styled(Button)`
  margin-left: 20px;
  cursor: pointer;
  height: 56px;
  width: 56px;
  background-color: #fff;
  display: grid;
  place-items: center;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  &:hover {
    border-color: transparent !important;
    color: #616161 !important;
  }
`
const NavBar: React.FC = () => {
  return (
    <NavBarWrapper>
      <div className={"logoWrapper"}>
        <img src={"/assets/icons/logo.png"} alt={""} />
      </div>
      <div className={"navButtonWrapper"}>
        <HamburgerButton>
          <MenuOutlined />
        </HamburgerButton>
      </div>
    </NavBarWrapper>
  )
}
export { NavBar }
