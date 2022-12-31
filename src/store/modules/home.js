import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData,
} from '@/services'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const fetchHomeDataAction = createAsyncThunk(
  'fetchdata',
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then((res) => {
      dispatch(changeHithScoreInfoAction(res))
    })
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res))
    })
    getHomeHotRecommendData().then((res) => {
      dispatch(changeRecommendInfoAction(res))
    })
    getHomeLongforData().then((res) => {
      dispatch(changeLongforInfoAction(res))
    })
    getHomePlusData().then((res) => {
      dispatch(changePlusInfoAction(res))
    })
  }
)
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceinfo: {},
    hithScoreinfo: {},
    discountinfo: {},
    recommendinfo: {},
    longforInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceinfo = payload
    },

    changeHithScoreInfoAction(state, { payload }) {
      state.hithScoreinfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountinfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendinfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    },
  },
})
export const {
  changeGoodPriceInfoAction,
  changeHithScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction,
} = homeSlice.actions
export default homeSlice.reducer
