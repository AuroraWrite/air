import styled from 'styled-components'

export const FooterWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  .info {
    display: flex;
    align-items: center;
    cursor: pointer;

    font-size: 17px;
    font-weight: 700;
    /* 这里判断当前文件夹的父组件是否传来name值，如果有值则从theme主题里拿颜色，没有就是另个颜色 */
    color: ${(props) =>
      props.name
        ? (props) => props.theme.Color.secondaryColor
        : (props) => props.theme.textColor.primaryColor};

    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 6px;
    }
  }
`
