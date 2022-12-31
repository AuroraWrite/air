import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    .ant-pagination-item {
      border-radius: 50%;
    }
    .desc {
      margin-top: 16px;
    }
  }
`
