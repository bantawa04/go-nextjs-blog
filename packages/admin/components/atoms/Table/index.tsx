import React from "react"
import { Table } from "antd"
import styled from "styled-components"
interface ITable {
  columns: any[]
  data: any[]
}

const TableWrapper = styled.div`
  width: 100%;
`
const StyledTable = styled(Table)`
  width: 100%;
`
const TableComponent: React.FC<ITable> = ({ columns, data }) => {
  return (
    <TableWrapper>
      <StyledTable columns={columns} dataSource={data} />
    </TableWrapper>
  )
}
export { TableComponent }
