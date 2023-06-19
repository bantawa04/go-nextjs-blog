import { Button } from "@project/shared"
import { Row, Col } from "antd"
import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  margin-bottom: 40px;
`
const Header: React.FC = () => {
  const router = useRouter()
  return (
    <HeaderWrapper className={"topAction"}>
      <Row>
        <Col span={22} className={"headerWrapper"}>
          <h3>{"Posts"}</h3>
        </Col>
        <Col className={"actionWrapper"} span={2}>
          <Button type={"info"} onClick={() => router.push("/post/create")}>
            {"Create"}
          </Button>
        </Col>
      </Row>
    </HeaderWrapper>
  )
}
export { Header }
