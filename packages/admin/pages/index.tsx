import styled from "styled-components"
import PrivateRoute from "../withPrivateRoute"
import { Space, Tag } from "antd"
import { Header, TableComponent } from "../components"

const Container = styled.section`
  padding: 2rem 2.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

function Home() {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Cateogry",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green"
            if (tag === "loser") {
              color = "volcano"
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size={"middle"}>
          <a>
            {"Invite "}
            {record.name}
          </a>
          <a>{"Delete"}</a>
        </Space>
      ),
    },
  ]
  const data = [
    {
      key: "1",
      title: "John Brown",
      category: "react",
      status: 1,
      tags: ["nice", "developer"],
    },
  ]
  return (
    <>
      <Container>
        <Header />
        <TableComponent columns={columns} data={data} />
      </Container>
    </>
  )
}

export default PrivateRoute(Home, "Posts")
