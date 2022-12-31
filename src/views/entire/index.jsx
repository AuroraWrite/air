import React, { memo, useEffect } from 'react'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'
import { fetchRoomListAction } from '@/store/modules/entires'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'
const Entire = memo(() => {
  // 页面渲染结束后引起副作用useEffect执行调用redux里面定义的fetchRoomListAction()方法向服务器响应数据
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAirpha: false }))
  }, [dispatch])

  // 通过useSelector从redux拿数据
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  )
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms
        roomList={roomList}
        totalCount={totalCount}
        isLoading={isLoading}
      />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire
