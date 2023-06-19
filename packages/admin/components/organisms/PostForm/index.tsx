import { Row, Col, Input, Select } from "antd"
import React from "react"
import styled from "styled-components"
import { Button } from "@project/shared"
const { TextArea } = Input
const FormWrapper = styled.div`
  margin: 40px 0px;
  .formTitle {
    margin-bottom: 20px !important;
  }
  .fieldWrapper {
    margin-bottom: 20px !important;

    .label {
      display: inline-block;
      margin-bottom: 10px !important;
    }
  }
`

const PostForm = () => {
  return (
    <FormWrapper>
      <Row>
        <Col span={18} offset={3}>
          <h2 className={"formTitle"}>{"Create Post"}</h2>
          <Row>
            <Col flex={"auto"}>
              <div className={"fieldWrapper"}>
                <label className={"label"}>{"Title"}</label>
                <Input size={"large"} placeholder={"large size"} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col flex={"auto"}>
              <div className={"fieldWrapper"}>
                <label className={"label"}>{"Category"}</label>
                <Select
                  size={"large"}
                  style={{ width: "100%" }}
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                  ]}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col flex={"auto"}>
              <div className={"fieldWrapper"}>
                <label className={"label"}>{"Tags"}</label>
                <Select
                  size={"large"}
                  style={{ width: "100%" }}
                  mode={"multiple"}
                  allowClear
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                  ]}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col flex={"auto"}>
              <div className={"fieldWrapper"}>
                <label className={"label"}>{"Content"}</label>
                <TextArea rows={10} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={22}></Col>
            <Col span={2}>
              <Button type={"success"}>{"Submit"}</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </FormWrapper>
  )
}

export { PostForm }
