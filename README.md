# ScreenScize-ReactJS
This custom function can be use to determine real-time screen resolution.

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

## Use of this function
> The function return an object called **windowDimenion**. **windowDimenion** object contain two values, one is *winWidth* and other *winHeight*.
1 Import the function
2 Assign to a variable
3 Access all property with the variable using *.(dot)* property

```
import ScreenSize from './ScreenSize';
function App() {
  const screen = ScreenSize();
  return (
    <p>{screen.winWidth}</p>
    <p>{screen.winHeight}</p>
  )
}
}
```
