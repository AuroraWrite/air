import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
const ScrollView = memo((props) => {
  // 轮播切换按钮实现
  const [showRight, SetShowRight] = useState(false)
  const [posIndex, SetposIndex] = useState(0)
  const [showLeft, SetShowLeft] = useState(false)
  const totalDistanceRef = useRef()
  //   判断是否显示右侧的按钮
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth //一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth //本身占据的宽度
    const totalDistance = scrollWidth - clientWidth //还有滚动的距离
    SetShowRight(totalDistance > 0)
    totalDistanceRef.current = totalDistance
  }, [props.children])

  // 按钮
  function controlClickHandle(blen) {
    // 每次点击按钮当前数组的索引值+1
    const newIndex = blen ? posIndex + 1 : posIndex - 1
    const newEle = scrollContentRef.current.children[newIndex]
    const newEleOffest = newEle.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newEleOffest}px)`
    SetposIndex(newIndex)
    // 是否继续展示右侧按钮
    SetShowRight(totalDistanceRef.current > newEleOffest)
    SetShowLeft(newEleOffest > 0)
  }
  return (
    <ViewWrapper>
      {showLeft && (
        <div
          className="control left"
          onClick={(e) => controlClickHandle(false)}
        >
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div
          className="control right"
          onClick={(e) => controlClickHandle(true)}
        >
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

export default ScrollView
