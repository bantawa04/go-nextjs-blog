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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff; /* Adjust the text color */
  }
`

const FeaturedPost: React.FC = () => {
  return (
    <FeaturedPostWrapper>
      <div className={"overlay"}></div>
      <div className={"contentWrapper"}></div>
    </FeaturedPostWrapper>
  )
}
export { FeaturedPost }
