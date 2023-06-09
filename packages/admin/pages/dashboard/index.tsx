import Head from "next/head"
import styled from "styled-components"
import PrivateRoute from "../../withPrivateRoute"

const Container = styled.section`
  padding: 2rem 2.5rem;
  display: flex;
  justify-content: space-between;
`

function Home() {
  return (
    <>
      <Head>
        <title>{"HomePage | Next Owner Skeleton"}</title>
      </Head>
      <Container>
        <h1 className={"title"}>{"Dashboard"}</h1>
      </Container>
    </>
  )
}

export default PrivateRoute(Home)
