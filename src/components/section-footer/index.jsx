import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterWrapper } from './style'
const SectionFooter = memo((props) => {
  const { name } = props

  let message = '显示全部'
  if (name) {
    message = `显示更多${name}房源`
  }
  /** 事件处理的逻辑 */
  const navigate = useNavigate()
  function moreClickHandle() {
    navigate('/entire')
  }

  return (
    <FooterWrapper name={name}>
      <div className="info">
        <span className="text" onClick={moreClickHandle}>
          {message}
        </span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

export default SectionFooter
