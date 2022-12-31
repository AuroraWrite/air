// 定义主题颜色，谁需要用到就直接引入
export const theme = {
  Color: {
    primaryColor: '#ff385c', //主题的主要颜色
    secondaryColor: '#00848a', //主题的次要颜色
  },
  textColor: {
    primaryColor: '#484848',
    secondaryColor: '#222222',
  },
  mixin: {
    boxShadow: `transition:box-shadow 200ms ease; &:hover{box-shadow:0 2px 4px rgba(0,0,0,.18)}`,
  },
}
