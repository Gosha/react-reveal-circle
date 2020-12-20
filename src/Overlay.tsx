/** @jsxImportSource @emotion/react */

import React from "react"
import {
  useSpring,
  animated,
  // config
} from "react-spring"
import * as d3 from "d3-ease"

const Overlay: React.FC = () => {
  const [hidden, setHidden] = React.useState(false)
  const wh = 1000
  const from = {
    x: 0,
    y: wh,
  }
  // See: https://www.geogebra.org/classic/ktsany5r
  const diagonal = Math.max(
    // m - top left -> center
    Math.sqrt(Math.pow(from.x, 2) + Math.pow(from.y, 2)),
    // l - top right -> center
    Math.sqrt(Math.pow(wh - from.x, 2) + Math.pow(from.y, 2)),
    // k - bottom right -> center
    Math.sqrt(Math.pow(from.x, 2) + Math.pow(wh - from.y, 2)),
    // center -> bottom left
    Math.sqrt(Math.pow(wh - from.x, 2) + Math.pow(wh - from.y, 2))
  )

  const props = useSpring({
    from: { r: 0 },
    to: {
      r: diagonal, // / 4 - 10,
    },

    config: {
      //   mass: 2,
      //   ...config.default,
      duration: 1500,
      easing: d3.easeExp,
    },
    delay: 200,
    onRest() {
      setHidden(true)
    },
  })

  return (
    <animated.svg
      css={[
        {
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          height: "100vh",
          width: "100vw",
          zIndex: 1000,
        },
        hidden ? { display: "none" } : {},
      ]}
      preserveAspectRatio={"xMidYMid slice"}
      viewBox={`0 0 ${wh} ${wh}`}
    >
      <mask id="circle-mask">
        <rect x="0" y="0" width={wh} height={wh} fill="white" />
        <animated.circle cx={from.x} cy={from.y} fill="black" {...props} />
      </mask>
      <rect
        x="0"
        y="0"
        width={wh}
        height={wh}
        mask="url(#circle-mask)"
        style={{ maskMode: "alpha" }}
        fill="white"
      />
    </animated.svg>
  )
}

export default Overlay
