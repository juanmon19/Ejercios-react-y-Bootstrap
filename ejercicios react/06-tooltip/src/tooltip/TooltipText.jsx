import { useRef, useState } from 'react'
import Tooltip from './Tooltip'

function TooltipText({ children, tooltip }) {
  const [tooltipDomRect, setTooltipDomRect] = useState(null)
  const [showTooltip, setShowTooltip] = useState(false)
  const spanElement = useRef(null)

  function handleMouseOver() {
    if (!spanElement.current) {
      return
    }

    setTooltipDomRect(spanElement.current.getBoundingClientRect())
    setShowTooltip(true)
  }

  return (
    <>
      <span
        className="tooltip-text"
        ref={spanElement}
        onMouseOver={handleMouseOver}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </span>
      {showTooltip && tooltipDomRect && (
        <Tooltip domRect={tooltipDomRect} text={tooltip} />
      )}
    </>
  )
}

export default TooltipText
