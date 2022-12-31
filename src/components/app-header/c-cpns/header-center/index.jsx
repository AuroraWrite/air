import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTitles from '@/assets/data/search_titles.json'
import React, { memo, useState } from 'react'
import SearchTabs from './c-cpns/search-taps'
import { CenterWrapper } from './style'
import SearchSections from './c-cpns/search-sections'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo((props) => {
  const [tabIndex, SetTabIndex] = useState(0)
  const { isSearch, SearchBarClick } = props
  const titles = SearchTitles.map((item) => item.title)

  function SearchBarClickHandle() {
    if (SearchBarClick) SearchBarClick()
  }

  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={SearchBarClickHandle}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={SetTabIndex} />
          <div className="infos">
            <SearchSections SearchInfos={SearchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter
