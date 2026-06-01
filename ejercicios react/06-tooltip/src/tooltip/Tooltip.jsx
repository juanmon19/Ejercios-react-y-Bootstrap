import { useEffect, useRef, useState } from 'react'

function Tooltip({ text, domRect }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const tooltipElement = useRef(null)

  useEffect(() => {
    if (!tooltipElement.current || !domRect) {
      return
    }

    const { width, height } = tooltipElement.current.getBoundingClientRect()

    const nextPosition = {
      x: domRect.x + domRect.width / 2 - width / 2,
      y: domRect.y < height ? domRect.y + height : domRect.y - height,
    }

    setPosition(nextPosition)
  }, [domRect])

  return (
    <span
      ref={tooltipElement}
      style={{ left: position.x, top: position.y }}
      className="tooltip"
    >
      {text}
    </span>
  )
}

export default Tooltip
