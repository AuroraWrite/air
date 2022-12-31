import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import React, { memo, useState, useCallback } from 'react'
import { SectionV2Wrapper } from './style'

const HomeSectionV2 = memo((props) => {
  const { infoData = {} } = props
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setname] = useState(initialName)
  //   这个页面会渲染两次，第一次是因为redux初始还没拿到值，此时name就是空没有值，
  //第二次渲染的时候redux就拿到值了，但是useState只接收第一次的值，所以页面就没有数据
  // 解决：通过Object.keys(infoData.dest_list)[0]拿到对象里面第一个数组的key值然后给name，再通过父页面的判断
  const tabNames = infoData?.dest_address?.map((item) => item.name)
  const tabClickHandle = useCallback(function (index, name) {
    setname(name)
  }, [])
  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms
        roomList={infoData?.dest_list?.[name]}
        itemWidth={'33.3333%'}
      />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  )
})

export default HomeSectionV2
