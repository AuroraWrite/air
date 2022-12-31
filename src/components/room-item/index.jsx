import React, { memo, useRef, useState } from 'react'
import { RoomWrapper } from './style'
import { Rate, Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Inicator from '@/base-ui/走马灯设计'
import classNames from 'classnames'
// import 'antd/dist/reset.css'
const RoomItem = memo((props) => {
  // 当未传入值进来时，默认值25%
  const { itemData, itemWidth = '25%', itemClick } = props
  // 记录索引
  const [selectIndex, setSelectIndex] = useState(0)
  // 事件处理逻辑
  const sliderRef = useRef()
  function controlClickHandle(isRight = true) {
    isRight ? sliderRef.current.next() : sliderRef.current.prev()
    // 拿到最新的索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0
    setSelectIndex(newIndex)
  }
  // 不同情况下判断是否展示轮播或是普通图片
  const PictureEl = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  const SliderEl = memo(() => {
    return (
      <div className="swiper">
        <div className="controls">
          <div
            className="btn left"
            onClick={(e) => {
              controlClickHandle(false)
            }}
          >
            <IconArrowLeft size={30} />
          </div>
          <div
            className="btn right"
            onClick={(e) => {
              controlClickHandle(true)
            }}
          >
            <IconArrowRight size={30} />
          </div>
        </div>
        <div className="inicator">
          <Inicator selectIndex={selectIndex}>
            {itemData?.picture_urls.map((item, index) => {
              return (
                <div className="dot-item" key={index}>
                  <span
                    className={classNames('dot', {
                      active: selectIndex === index,
                    })}
                  ></span>
                </div>
              )
            })}
          </Inicator>
        </div>
        <Carousel dots={false} autoplay={true} ref={sliderRef}>
          {itemData?.picture_urls?.map((item) => {
            return (
              <div className="cover" key={item}>
                <img src={item} alt="" />
              </div>
            )
          })}
        </Carousel>
      </div>
    )
  })
  // 跳转详情页
  function itemClickHandle() {
    if (itemClick) {
      itemClick(itemData) //将此值回调给父组件
    }
  }

  return (
    <RoomWrapper
      verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {itemData.picture_urls ? <SliderEl /> : PictureEl}
        <div className="desc">{itemData.verify_info.messages.join('·')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">${itemData.price}/晚</div>
        <div className="bottom">
          {/* ??比||更加严谨，除去underfind如果此时是0||5那么返回就是5，如果是？？的话就是0 */}
          <Rate allowHalf defaultValue={itemData.star_rating ?? 5} disabled />
          <span className="count">{itemData.reviews_count}</span>
          {itemData?.bottom_info?.content && (
            <span className="extra">·{itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </RoomWrapper>
  )
})

export default RoomItem
