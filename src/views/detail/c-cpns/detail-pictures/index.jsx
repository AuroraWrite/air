import React, { memo, useState } from 'react'
import { PictureWrapper } from './style'

import { shallowEqual, useSelector } from 'react-redux'
import PictureBrower from '@/base-ui/picture-brower'
const DetailPictures = memo(() => {
  // 从redux获取数据
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  )
  // 定义组件内部状态
  const [showbroser, Setshowbroser] = useState(false)

  return (
    <PictureWrapper>
      <div className="top">
        <div className="left">
          <div
            className="item"
            onClick={(e) => {
              Setshowbroser(true)
            }}
          >
            <img src={detailInfo.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo.picture_urls?.slice(1, 5).map((item) => {
            return (
              <div
                className="item"
                key={item}
                onClick={(e) => {
                  Setshowbroser(true)
                }}
              >
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="show-btn" onClick={(e) => Setshowbroser(true)}>
        显示照片
      </div>
      {showbroser && (
        <PictureBrower
          picture_urls={detailInfo.picture_urls}
          Closebtn={(e) => Setshowbroser(false)}
        />
      )}
    </PictureWrapper>
  )
})

export default DetailPictures
