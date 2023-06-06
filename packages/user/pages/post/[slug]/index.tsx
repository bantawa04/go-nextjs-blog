import { CommentForm, FeaturedPost } from "@project/shared"
import { Tag } from "antd"
import React from "react"
import styled from "styled-components"

interface IContainer {
  color?: string
}
const Container = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${({ color }: IContainer) => (color ? color : null)};
`
const PostContentWrapper = styled.article`
  padding-top: 80px;
  width: 60%;
`
const TagsWrapper = styled.div`
  margin-top: 80px;
  padding-bottom: 80px;
`

const SinglePost: React.FC<IContainer> = () => {
  return (
    <>
      <FeaturedPost />
      <Container>
        <PostContentWrapper>
          <p>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat nulla turpis, ut aliquet nisi ornare at. Ut ut sollicitudin purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Vestibulum tincidunt eu quam id varius. Nunc in consectetur risus, sit amet imperdiet dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam faucibus diam leo, in imperdiet arcu tincidunt sit amet. Maecenas aliquam semper sem a fringilla. Pellentesque nibh ipsum, egestas quis congue nec, vestibulum sed risus."
            }
          </p>
          <p>
            {
              "Nunc auctor bibendum diam nec aliquam. Praesent non lorem sed risus posuere consequat sit amet a magna. Donec tristique dui a risus porta pulvinar. Suspendisse fringilla, magna nec interdum blandit, justo ex mollis tortor, sed fermentum nisi velit sed diam. Nam vel odio eget nisl molestie fringilla nec sit amet odio. Nam libero augue, eleifend ut auctor non, tempor id felis. Donec at sollicitudin lectus. Quisque egestas venenatis velit et sollicitudin. Fusce non luctus leo. Duis molestie sagittis orci."
            }
          </p>
          <TagsWrapper>
            <Tag color={"default"}>{"default"}</Tag>
            <Tag color={"default"}>{"default"}</Tag>
            <Tag color={"default"}>{"default"}</Tag>
            <Tag color={"default"}>{"default"}</Tag>
            <Tag color={"default"}>{"default"}</Tag>
          </TagsWrapper>
        </PostContentWrapper>
      </Container>
      <Container color={"#e2e8e9"}>
        <CommentForm />
      </Container>
    </>
  )
}

export default SinglePost
