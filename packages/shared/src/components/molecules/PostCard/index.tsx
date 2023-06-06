import { ClockCircleOutlined, MessageOutlined } from "@ant-design/icons"
import React from "react"
import styled from "styled-components"
interface IPostCard {
  title?: string
  date?: string
  category?: string
  summary?: string
  thumbnail?: string
  link?: string
  tags?: string[]
  className?: string
  children?: React.ReactNode
}

const PostCardWrapper = styled.div`
  background-image: ${({ thumbnail }: IPostCard) =>
    thumbnail ? `url(${thumbnail})` : ""};
  background-size: cover;
  background-position: center;
  height: 576px;
  width: auto;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 40px;
  justify-content: center;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .postMeta {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    color: #999;
    width: 100%;
    text-align: center;
    &__title {
      color: #f6f9fc;
      font-size: 1.65rem;
      cursor: pointer;
      line-height: 1.3em;
      font-family: "Domine", serif;
      font-weight: normal;
    }
    &__author {
      &--name {
        color: #f6f9fc;
        margin-left: 0.5rem;
        font-size: 14px;
        font-weight: 700;
      }
    }
    &__details {
      display: flex;
      flex-direction: row;
      column-gap: 1rem;
      justify-content: center;
      font-size: 14px;
      span {
        margin-right: 0.5rem;
      }
    }
  }
`

const PostCard: React.FC<IPostCard> = ({ thumbnail }) => {
  return (
    <PostCardWrapper thumbnail={thumbnail}>
      <div className={"overlay"}></div>
      <div className={"postMeta"}>
        <div className={"postMeta__title"}>{"Post title"}</div>
        <div className={"postMeta__author"}>
          <span>{"by"}</span>
          <span className={"postMeta__author--name"}>{"Author Name"}</span>
        </div>
        <div className={"postMeta__details"}>
          <div className={"postMeta__details--comments"}>
            <MessageOutlined />
            <span>{"0 comments"}</span>
          </div>
          <div className={"postMeta__details--minRead"}>
            <ClockCircleOutlined />
            <span>{"3 min read"}</span>
          </div>
        </div>
      </div>
    </PostCardWrapper>
  )
}
export { PostCard }
