import { useEffect, useState } from 'react'
// npm install underscore
import { throttle } from 'underscore'
// 自定义一个滚动检测的hook
export default function useScrollPosition() {
  const [scrollX, SetScrollX] = useState(0)
  const [scrollY, SetScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = throttle(function () {
      SetScrollX(window.scrollX)
      SetScrollY(window.scrollY)
    }, 100) //100毫秒只执行一次

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollX, scrollY }
}
