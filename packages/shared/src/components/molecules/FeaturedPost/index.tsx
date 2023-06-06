import { FacebookOutlined, TwitterOutlined } from "@ant-design/icons"
import React from "react"
import styled from "styled-components"

const FeaturedPostWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 101.4vh;
  overflow: hidden;
  background-image: url("/assets/imgs/1.jpeg");
  background-size: cover;
  background-position: center;

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
    width: 100%;
    .postTitle {
      font-size: 2.8rem;
      line-height: 1.3rem;
      font-family: "Domine", serif;
    }
  }
`

const FeaturedPost: React.FC = () => {
  return (
    <FeaturedPostWrapper>
      <div className={"overlay"}></div>
      <div className={"contentWrapper"}>
        <div className={"social"}>
          <div className={"postCategory"}>{"Filed in Blog Category"}</div>
          <div className={"share"}>
            <FacebookOutlined />
            <TwitterOutlined />
          </div>
        </div>
        <div className={"postDetails"}>
          <div className={"postTitle"}>{"Featured Post Title"}</div>
          <div className={"postMetaWrapper"}>
            <div className={"postMetaWrapper__author"}></div>
            <div className={"postMetaWrapper__comments"}></div>
            <div className={"postMetaWrapper__minRead"}></div>
          </div>
        </div>
      </div>
    </FeaturedPostWrapper>
  )
}
export { FeaturedPost }
