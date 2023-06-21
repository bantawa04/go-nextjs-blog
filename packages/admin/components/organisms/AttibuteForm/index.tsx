import React from "react"
import styled from "styled-components"
import { Row, Col, Input } from "antd"
import { Button, TableComponent } from "@project/shared"

const Wrapper = styled.div`
  margin-top: 40px;
  padding: 20px;
  .fieldWrapper {
    margin-bottom: 20px;
    .label {
      display: inline-block;
      margin-bottom: 10px !important;
    }
  }
`
const AttributeForm: React.FC = () => {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
  ]
  const data = [
    {
      key: "1",
      id: "1",
      title: "John Brown",
    },
  ]
  return (
    <Wrapper>
      <Row>
        <Col span={16}>
          <TableComponent columns={columns} dataSource={data} />
        </Col>
        <Col span={8}>
          <div className={"fieldWrapper"}>
            <label className={"label"}>{"Name"}</label>
            <Input size={"large"} placeholder={"large size"} />
          </div>
          <Button type={"success"}>{"Submit"}</Button>
        </Col>
      </Row>
    </Wrapper>
  )
}
export { AttributeForm }
