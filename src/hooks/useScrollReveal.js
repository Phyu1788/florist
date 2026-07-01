import { useEffect } from "react"

/**
 * Hook that reveals [data-reveal] elements when they scroll into view.
 * Mount once in App.jsx — observes all [data-reveal] elements in the page.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    )

    // Observe all current elements with data-reveal
    const observeAll = () => {
      document.querySelectorAll("[data-reveal]:not(.revealed)").forEach((el) => {
        observer.observe(el)
      })
    }

    observeAll()

    // Watch for new elements added to the DOM
    const mutationObserver = new MutationObserver(observeAll)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
