import { useState, useEffect } from "react"
import { Button } from "./button"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.pageYOffset > 300)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    const start = window.scrollY
    const duration = 1200
    let startTime: number | null = null

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeInOutCubic(progress)
      window.scrollTo(0, start * (1 - eased))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  if (!visible) return null

  return (
    <Button
      size="icon"
      variant="secondary"
      onClick={scrollToTop}
      className="fixed right-6 bg-pink-mist hover:bg-pink-mist/80 bottom-6 shadow-lg z-50"
    >
      <ArrowUp size={20} />
    </Button>
  )
}
