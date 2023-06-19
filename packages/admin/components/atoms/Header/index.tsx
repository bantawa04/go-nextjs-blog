import { Button } from "@project/shared"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  display: flex;
`
const Header: React.FC = () => {
  return (
    <HeaderWrapper className={"topAction"}>
      <div className={"headerText"}>
        <h3>{"Posts"}</h3>
      </div>
      <div className={"actionWrapper"}>
        <Button type={"info"}>{"Create"}</Button>
      </div>
    </HeaderWrapper>
  )
}
export { Header }
