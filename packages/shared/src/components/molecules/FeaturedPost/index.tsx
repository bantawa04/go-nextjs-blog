import {
  ClockCircleOutlined,
  FacebookOutlined,
  MessageOutlined,
  TwitterOutlined,
} from "@ant-design/icons"
import React from "react"
import styled from "styled-components"
import Link from "next/link"

const FeaturedPostWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 101.4vh;
  overflow: hidden;
  background-image: url("/assets/imgs/1.jpeg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .contentWrapper {
    position: relative;
    color: #f6f9fc;
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    width: 60%;
    .postDetails {
      display: flex;
      row-gap: 40px;
      flex-direction: column;
      .postTitle {
        font-size: 2.8rem;
        line-height: 1.3em;
        font-family: "Domine", serif;
        text-align: center;
      }
      .postMetaWrapper {
        display: flex;
        width: 100%;
        justify-content: center;
        column-gap: 20px;
        &__author {
          span {
            color: #888;
          }
          &--name {
            font-size: 1rem;
            font-weight: 700;
          }
        }
        div {
          display: flex;
          width: auto;
          flex-direction: row;
        }
        span {
          margin-right: 0.5rem;
        }
      }
    }
    .social {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .postCategory {
        color: #888;
        font-size: 14px;

        a {
          font-size: 14px;
          margin-left: 0.5rem;
          color: #999;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .share {
        display: flex;
        column-gap: 10px;
        span {
          font-size: 14px;
          margin-left: 0.3rem;
          color: #999;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`

const FeaturedPost: React.FC = () => {
  return (
    <FeaturedPostWrapper>
      <div className={"overlay"}></div>
      <div className={"contentWrapper"}>
        <div className={"social"}>
          <div className={"postCategory"}>
            {"Filed in Blog"}
            <Link href={"#"}>{"Category"}</Link>
          </div>
          <div className={"share"}>
            <div className={"facebook"}>
              <FacebookOutlined />
              <span>{"Share"}</span>
            </div>
            <div className={"twitter"}>
              <TwitterOutlined />
              <span>{"Tweet"}</span>
            </div>
          </div>
        </div>
        <div className={"postDetails"}>
          <div className={"postTitle"}>
            {
              "Shey Phoksundo Lake - A Mesmerizing Blend of Nature, Culture, and Spirituality"
            }
          </div>
          <div className={"postMetaWrapper"}>
            <div className={"postMetaWrapper__author"}>
              <span>{"by"}</span>
              <div className={"postMetaWrapper__author--name"}>
                {"Author Name"}
              </div>
            </div>
            <div className={"postMetaWrapper__comments"}>
              <MessageOutlined size={14} />
              <span>{"0 comments"}</span>
            </div>
            <div className={"postMetaWrapper__minRead"}>
              <ClockCircleOutlined size={14} />
              <span>{"3 min read"}</span>
            </div>
          </div>
          <div className={"scrollDown"}></div>
        </div>
      </div>
    </FeaturedPostWrapper>
  )
}
export { FeaturedPost }
