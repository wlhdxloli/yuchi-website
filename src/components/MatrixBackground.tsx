'use client'

import { useEffect, useRef } from 'react'

export default function MatrixBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?'
    const streams: Array<{
      element: HTMLDivElement
      x: number
      speed: number
      text: string
      opacity: number
    }> = []

    // Create digital rain streams
    for (let i = 0; i < 50; i++) {
      const stream = document.createElement('div')
      stream.className = 'rain-drop'
      stream.style.left = Math.random() * 100 + '%'
      stream.style.animationDuration = (Math.random() * 8 + 6) + 's'
      stream.style.animationDelay = Math.random() * 2 + 's'
      stream.textContent = characters[Math.floor(Math.random() * characters.length)]
      container.appendChild(stream)
    }


    return () => {
      container.innerHTML = ''
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="digital-rain"
      aria-hidden="true"
    />
  )
}