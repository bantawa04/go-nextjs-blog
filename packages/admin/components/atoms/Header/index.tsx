import { Button } from "@project/shared"
import { Row, Col } from "antd"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  margin-bottom: 40px;
`
const Header: React.FC = () => {
  return (
    <HeaderWrapper className={"topAction"}>
      <Row>
        <Col span={22} className={"headerWrapper"}>
          <h3>{"Posts"}</h3>
        </Col>
        <Col className={"actionWrapper"} span={2}>
          <Button type={"info"}>{"Create"}</Button>
        </Col>
      </Row>
    </HeaderWrapper>
  )
}
export { Header }
