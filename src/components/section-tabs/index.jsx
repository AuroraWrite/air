import ScrollView from '@/base-ui/scroll-view'
import classNames from 'classnames'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, SetCurrentIndex] = useState(0)
  function itemClickHandle(index, name) {
    SetCurrentIndex(index)
    tabClick(index, name)
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((name, index) => {
          return (
            <div
              className={classNames('item', { active: index === currentIndex })}
              key={index}
              onClick={(e) => itemClickHandle(index, name)}
            >
              {name}
            </div>
          )
        })}
      </ScrollView>
    </TabsWrapper>
  )
})

export default SectionTabs
