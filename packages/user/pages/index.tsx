/* eslint-disable react/jsx-curly-brace-presence */
import Head from "next/head"
import { FeaturedPost, NavBar } from "@project/shared"
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
          {"  1"}
        </Col>
        <Col xxl={8} xl={8} lg={8} md={12} sm={24}>
          {"  2"}
        </Col>
        <Col xxl={8} xl={8} lg={8} md={12} sm={24}>
          {"  3"}
        </Col>
      </Row>
    </>
  )
}

export default Home
