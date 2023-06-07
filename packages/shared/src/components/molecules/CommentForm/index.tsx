import React from "react"
import styled from "styled-components"
import { TextField } from "../../.."
import { Button } from "antd"

const CommentFormWrapper = styled.div`
  padding-top: 75px;
  padding-bottom: 75px;
  width: 60%;
  h1 {
    font-size: 1.8rem;
    font-weight: normal;
    font-family: "Roboto", sans-serif;
    padding-bottom: 25px;
  }
  p {
    font-size: 1.25rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
  .fieldWrapper {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .buttonsWrapper {
    display: flex;
    justify-content: flex-end;
    column-gap: 20px;
  }
`
const CommentForm: React.FC = () => {
  return (
    <>
      <CommentFormWrapper>
        <h1>{"Leave a comment"}</h1>
        <p>
          {
            "Your email address will not be published. Required fields are marked *"
          }
        </p>
        <div className={"fieldWrapper"}>
          <TextField
            type={"textarea"}
            name={"commentBody"}
            rows={10}
            placeholder={"Leave your comment here..."}
            borderradius={"0px"}
          />
        </div>
        <div className={"fieldWrapper"}>
          <TextField
            type={"text"}
            name={"name"}
            rows={10}
            label={"Name"}
            required
            height={"40px"}
            borderradius={"0px"}
          />
        </div>
        <div className={"fieldWrapper"}>
          <TextField
            type={"email"}
            name={"email"}
            rows={10}
            label={"Email"}
            height={"40px"}
            required
            borderradius={"0px"}
          />
        </div>
        <div className={"buttonsWrapper"}>
          <Button size={"large"} style={{ borderRadius: "0px" }}>
            {"Cancel"}
          </Button>
          <Button
            type={"primary"}
            style={{ borderRadius: "0px" }}
            size={"large"}
          >
            {"Submit"}
          </Button>
        </div>
      </CommentFormWrapper>
    </>
  )
}

export { CommentForm }
