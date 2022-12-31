import styled from 'styled-components'

export const SectionWrapper = styled.div`
  display: flex;
  position: relative;
  background-color: #fff;
  border-radius: 48px;
  top: 20px;

  .item {
    flex: 1;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 20px 0;
    cursor: pointer;
    border-radius: 48px;
    transition: all 300ms ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .info {
      height: 38px;

      .title {
        font-weight: 700;
      }
    }

    &:nth-child(2) > .info {
      border-left: 1px solid #333;
      border-right: 1px solid #333;
    }
  }
`
