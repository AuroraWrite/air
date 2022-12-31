import Logo from '@/assets/svg/icon_logo'
import React, { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftWrapper } from './style'

const HearLeft = memo(() => {
  let Navigate = useNavigate()
  function logoClickHandle() {
    console.log(11)
    Navigate('home')
  }
  return (
    <LeftWrapper>
      <div className="logo" onClick={logoClickHandle}>
        <Logo />
      </div>
    </LeftWrapper>
  )
})

export default HearLeft
