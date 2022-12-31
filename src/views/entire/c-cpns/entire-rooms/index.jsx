import React, { memo, useCallback } from 'react'
import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
  const { roomList, totalCount, isLoading } = props
  let Navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback(
    function (item) {
      //这里item接收子组件回调传来的itemData,再把值传给redux
      dispatch(changeDetailInfoAction(item))
      Navigate('/detail')
    },
    [Navigate, dispatch]
  )
  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}处住所</h2>
      <div className="list">
        {roomList?.map((item) => {
          return (
            <RoomItem
              itemData={item}
              itemWidth="20%"
              key={item._id}
              itemClick={itemClickHandle}
            />
          )
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms
