import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  color: ${(props) =>
    props.theme.isAirpha ? '#fff' : props.theme.Color.primaryColor};
  .logo {
    margin-left: 24px;
    cursor: pointer;
  }
`
