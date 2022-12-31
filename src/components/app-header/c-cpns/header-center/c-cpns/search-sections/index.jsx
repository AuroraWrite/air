import React, { memo } from 'react'
import { SectionWrapper } from './style'

const SearchSections = memo((props) => {
  const { SearchInfos } = props
  return (
    <SectionWrapper>
      {SearchInfos.map((item, index) => {
        return (
          <div className="item" key={index}>
            <div className="info">
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
            {index !== SearchInfos.length - 1 && (
              <div className="divider"></div>
            )}
          </div>
        )
      })}
    </SectionWrapper>
  )
})

export default SearchSections
