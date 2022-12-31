import { getEntireRoomListData } from '@/services'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const fetchRoomListAction = createAsyncThunk(
  'fetdata',
  (payload = 0, { dispatch }) => {
    //当分页什么都没传的时候默认第0页
    dispatch(changeisLoadingAction(true))
    dispatch(changeisLoadingAction(payload)) //拿到分页传来的值（第几页）
    getEntireRoomListData(payload * 20).then((res) => {
      dispatch(changeEntireRoomListAction(res))
    })
    dispatch(changeisLoadingAction(false)) //发送完了网络请求再给他改成false
  }
)
const entireSlice = createSlice({
  name: 'entire',
  initialState: {
    currentPage: 0, //当前页面
    roomList: [], //房间列表
    totalCount: 0, //总数据个数
    isLoading: false, //用来改变页面开始发送网络请求前的空白模板
  },
  reducers: {
    changeEntireRoomListAction(state, { payload }) {
      state.roomList = payload.list
      state.totalCount = payload.totalCount
    },
    changecurrentPageAction(state, { payload }) {
      console.log(payload)
      state.currentPage = payload
    },
    changeisLoadingAction(state, { payload }) {
      state.isLoading = payload
    },
  },
})
export const {
  changeEntireRoomListAction,
  changecurrentPageAction,
  changeisLoadingAction,
} = entireSlice.actions
export default entireSlice.reducer
