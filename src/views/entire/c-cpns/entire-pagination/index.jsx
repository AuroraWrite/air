import React, { memo } from 'react'
import { Pagination } from 'antd'
import { PaginationWrapper } from './style'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entires'

const EntirePagination = memo((props) => {
  // 通过useSelector从redux拿数据
  const { currentPage, roomList, totalCount } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  // 算法
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20
  // 事件处理逻辑
  function pageChangeHandle(page) {
    // 更新最新的页码
    dispatch(fetchRoomListAction(page - 1))
    window.scrollTo(0, 0) //点击完分页返回顶部
  }
  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination
            total={totalCount}
            defaultPageSize={20}
            onChange={pageChangeHandle}
          />
          <div className="desc">
            {/* currentPage:0  拿到的数据 1·-·20
            currentPage:0  拿到的数据 21·-·40 */}
            第{startCount}-{endCount}个房源，共不超过{totalCount}个
          </div>
        </div>
      )}
    </PaginationWrapper>
  )
})

export default EntirePagination
