# ScreenScize-ReactJS
This custom function can be use to determine real-time screen resolution.
## Use of this function
> The function return an object called **windowDimenion**. **windowDimenion** object contain two values, one is *winWidth* and other *winHeight*.
## The function
```
import { useState, useEffect } from 'react'

export default function ScreenSize() {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])

  return windowDimenion;
}
```
