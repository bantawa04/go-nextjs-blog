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
    &__title {
      color: #f6f9fc;
      font-size: 1.65rem;
      cursor: pointer;
      line-height: 1.2em;
      font-family: "Montserrat", sans-serif;
    }
  }
`

const PostCard: React.FC<IPostCard> = ({ thumbnail }) => {
  return (
    <PostCardWrapper thumbnail={thumbnail}>
      <div className={"overlay"}></div>
      <div className={"postMeta"}>
        <div className={"postMeta__title"}>{"Post title"}</div>
        <div className={"postMeta__author"}>{"Author Name"}</div>
        <div className={"postMeta__details"}>
          <div className={"postMeta__details--comments"}>{"0 comments"}</div>
          <div className={"postMeta__details--minRead"}>{"3 min read"}</div>
        </div>
      </div>
    </PostCardWrapper>
  )
}
export { PostCard }
