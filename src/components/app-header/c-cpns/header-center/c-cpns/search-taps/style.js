import styled from 'styled-components'

export const TabsWrapper = styled.div`
  width: 200px;
  display: flex;
  margin: 10px auto;
  position: relative;
  top: 10px;
  color: ${(props) => (props.theme.isAirpha ? '#fff' : '#222')};

  .item {
    height: 30px;
    line-height: 30px;
    margin: 0px 10px;
  }

  .active {
    border-bottom: 2px solid
      ${(props) => (props.theme.isAirpha ? '#fff' : '#222')};
    padding-bottom: 3px;
  }
`
