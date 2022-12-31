import { fetchHomeDataAction } from '@/store/modules/home'
import { changeHeaderConfigAction } from '@/store/modules/main'
import { isEmptyO } from '@/utils'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { HomeWrapper } from './style'
const index = memo(() => {
  const {
    goodPriceInfo,
    hithScoreInfo,
    disCountInfo,
    recommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceinfo,
      hithScoreInfo: state.home.hithScoreinfo,
      disCountInfo: state.home.discountinfo,
      recommendInfo: state.home.recommendinfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAirpha: true }))
  }, [dispatch])
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 判断redux传的数据disCountInfo是否有值，有的话则进行后面的组件渲染*/}
        {isEmptyO(disCountInfo) && <HomeSectionV2 infoData={disCountInfo} />}
        {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        {isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo} />}
        {/* 统一封装到home-section-v1 */}
        {isEmptyO(recommendInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyO(recommendInfo) && <HomeSectionV1 infoData={hithScoreInfo} />}
        {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default index
