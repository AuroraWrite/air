import { getEntireRoomListData } from '@/services'
import * as actionTypes from './constance'
export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
})
export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
})
export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
})
export const fetchRoomListAction = () => {
  return async (dispatch, getState) => {
    // 根据页面获取最新数据
    const currenPage = getState().entire.currenPage //拿到当前页码
    const res = await getEntireRoomListData(currenPage * 20)
    //获取到最新的数据，保存redux的store中
    const roomList = res.list
    const totalCount = res.totalCount
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}
