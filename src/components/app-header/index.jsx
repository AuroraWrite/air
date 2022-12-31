import useScrollPosition from '@/hooks/useScrollPosition.js'
import classNames from 'classnames'
import React, { memo, useState, useRef } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import HeaderCenter from './c-cpns/header-center/index.jsx'
import HearLeft from './c-cpns/header-left/index.jsx'
import HearderRight from './c-cpns/header-right/index.jsx'
import { HeaderWrapper, SearchArea } from './style.js'

const index = memo(() => {
  const [isSearch, SetisSearch] = useState(false)

  // 从redux获取数据
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  )
  const { isFixed, topAirpha } = headerConfig

  // 监听滚动
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)
  if (!isSearch) prevY.current = scrollY //当搜索框没有弹出来时使定义的值始终保持和滚动的一致
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) SetisSearch(false)

  // 透明度
  const isAirpha = topAirpha && scrollY === 0

  return (
    <ThemeProvider theme={{ isAirpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HearLeft />
            <HeaderCenter
              isSearch={isAirpha || isSearch}
              SearchBarClick={(e) => SetisSearch(true)}
            />
            <HearderRight />
          </div>
          <SearchArea isSearch={isAirpha || isSearch}></SearchArea>
        </div>
        {isSearch && (
          <div className="cover" onClick={(e) => SetisSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default index
