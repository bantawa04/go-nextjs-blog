/* eslint-disable react/jsx-curly-brace-presence */
import Head from "next/head"
import { FeaturedPost, NavBar, PostCard } from "@project/shared"
import { Col, Row } from "antd"
const Home = () => {
  return (
    <>
      <Head>
        <title>{"HomePage | Consumer "}</title>
      </Head>
      <NavBar />
      <FeaturedPost />
      <Row>
        <Col xxl={8} xl={8} lg={8} md={12} sm={24}>
          <PostCard thumbnail={"/assets/imgs/2.jpeg"} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={12} sm={24}>
          <PostCard thumbnail={"/assets/imgs/3.jpeg"} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={12} sm={24}>
          <PostCard thumbnail={"/assets/imgs/4.jpeg"} />
        </Col>
      </Row>
      <Row>
        <Col xxl={8} xl={8} lg={8} md={12} sm={24}>
          <PostCard thumbnail={"/assets/imgs/5.jpeg"} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={12} sm={24}>
          <PostCard thumbnail={"/assets/imgs/6.jpeg"} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={12} sm={24}>
          <PostCard thumbnail={"/assets/imgs/6.jpeg"} />
        </Col>
      </Row>
    </>
  )
}

export default Home
