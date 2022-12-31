import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Iconclose from '@/assets/svg/icon-close'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { BrowerWrapper } from './style'
import Inicator from '../走马灯设计'
import classNames from 'classnames'
const PictureBrower = memo((props) => {
  const { picture_urls, Closebtn } = props
  const [currentIndex, SetcurrentIndex] = useState(0)
  const [isNext, SetisNext] = useState(true)
  const [showlist, Setshowlist] = useState(true)

  // 当图片浏览器展示出来时，滚动的功能应消失
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      // 当图片浏览器关闭掉，超出部分应展示，则就有滚动条
      document.body.style.overflow = 'auto'
    }
  }, [])
  //   事件监听
  function ClosebtnClick() {
    if (Closebtn) Closebtn()
  }

  function ControlbtnHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = picture_urls.length - 1
    if (newIndex > picture_urls.length - 1) newIndex = 0
    SetcurrentIndex(newIndex)
    SetisNext(isNext)
  }

  function HandlebottomItem(index) {
    SetisNext(index > currentIndex)
    SetcurrentIndex(index)
  }

  return (
    <BrowerWrapper isNext={isNext} showlist={showlist}>
      <div className="top">
        <div className="close-btn" onClick={ClosebtnClick}>
          <Iconclose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => ControlbtnHandle(false)}>
            <IconArrowLeft size={77} />
          </div>
          <div className="btn right" onClick={(e) => ControlbtnHandle(true)}>
            <IconArrowRight size={77} />
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={picture_urls[currentIndex]}
              timeout={200}
              classNames="pic"
            >
              <img src={picture_urls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{picture_urls.length}
              </span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={(e) => Setshowlist(!showlist)}>
              <span>{showlist ? '隐藏' : '显示'}照片列表</span>
            </div>
          </div>
          <div className="list">
            <Inicator selectIndex={currentIndex}>
              {picture_urls?.map((item, index) => {
                return (
                  <div
                    className={classNames('item', {
                      active: currentIndex === index,
                    })}
                    key={item}
                    onClick={(e) => HandlebottomItem(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Inicator>
          </div>
        </div>
      </div>
    </BrowerWrapper>
  )
})

export default PictureBrower
