import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'
const EntireFilter = memo(() => {
  const [selectItems, SetselectItems] = useState([])
  function itemClickHandle(item) {
    const newItems = [...selectItems]
    if (newItems.includes(item)) {
      // 拿到当前点击的数组里面item的索引
      const ItemIndex = newItems.findIndex((filteritem) => filteritem === item)
      newItems.splice(ItemIndex, 1)
    } else {
      newItems.push(item)
    }
    SetselectItems(newItems)
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              className={classNames('item', {
                active: selectItems.includes(item),
              })}
              key={index}
              onClick={(e) => {
                itemClickHandle(item)
              }}
            >
              {item}
            </div>
          )
        })}
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter
