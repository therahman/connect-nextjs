import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll()
  const [visible, setVisiblity] = useState(false)

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true)
    } else {
      setVisiblity(false)
    }
  }, [pageYOffset])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) {
    return false
  }

  return (
    <div
      className="scroll-to-top cursor-pointer text-center"
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" />
      </svg>
    </div>
  )
}

export default ScrollToTop
