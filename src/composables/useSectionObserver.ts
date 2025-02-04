import { scroll } from 'quasar'
import { ref, onMounted, onBeforeUnmount } from 'vue'

type UseSectionScrollOptions = {
  offset?: number
  init?: string
  duration?: number
  sectionIds: string[]
}

export const useSectionScroll = (options: UseSectionScrollOptions) => {
  const { offset = 70, duration = 0, sectionIds, init = '' } = options
  const activeSection = ref<string>('')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    activeSection.value = sectionId
    const target = scroll.getScrollTarget(element)
    const position = element.offsetTop - offset
    scroll.setVerticalScrollPosition(target, position, duration)
  }

  const handleScroll = () => {
    const scrollPosition = window.scrollY + offset + 100
    const currentSection = sectionIds.findLast(id => {
      const element = document.getElementById(id)
      return element && element.offsetTop <= scrollPosition
    })

    if (currentSection) activeSection.value = currentSection
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    scrollToSection(init)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { activeSection, scrollToSection }
}