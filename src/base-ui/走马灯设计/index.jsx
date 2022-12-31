import React, { memo, useEffect, useRef } from 'react'
import { InicatorWrapper } from './style'
// 走马灯设计
const Inicator = memo((props) => {
  const { selectIndex = 0 } = props
  const contentRef = useRef()
  useEffect(() => {
    // 1.获取selectIndex对应的item
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth

    // 2.获取content宽度
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth
    // 3.获取selectIndex要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
    // 4.特殊情况处理
    if (distance < 0) distance = 0 //左边特殊情况处理
    const totaldistance = contentScroll - contentWidth
    if (distance > totaldistance) distance = totaldistance //右边特殊情况处理
    // 5.改变位置即可
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])
  return (
    <InicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </InicatorWrapper>
  )
})

export default Inicator
