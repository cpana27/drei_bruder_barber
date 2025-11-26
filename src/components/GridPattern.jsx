'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// EINSTELLUNG: Größe der Raster-Zellen (in Pixel)
const BLOCK_SIZE = 30

function Block({ x, y, ...props }) {
  return (
    <motion.path
      // Berechnet die Position basierend auf dem einfachen X/Y Raster
      transform={`translate(${x * BLOCK_SIZE}, ${y * BLOCK_SIZE})`}
      // Ein perfektes Quadrat zeichnen
      d={`M0 0H${BLOCK_SIZE}V${BLOCK_SIZE}H0Z`}
      fill="currentColor"
      strokeWidth="0"
      {...props}
    />
  )
}

export function GridPattern({ yOffset = 0, interactive = false, ...props }) {
  let id = useId()
  let ref = useRef(null)
  let currentBlock = useRef(undefined)
  let counter = useRef(0)
  let [hoveredBlocks, setHoveredBlocks] = useState([])

  // Statische Blöcke, die immer sichtbar sind (leicht angepasst für das neue Raster)
  let staticBlocks = [
    [2, 2],
    [5, 4],
    [10, 3],
    [14, 6],
    [18, 2],
    [8, 8],
  ]

  useEffect(() => {
    if (!interactive) {
      return
    }

    function onMouseMove(event) {
      if (!ref.current) return

      let rect = ref.current.getBoundingClientRect()
      let x = event.clientX - rect.left
      let y = event.clientY - rect.top
      
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return

      // Vereinfachte Mathematik: Kein Tangens/Skew mehr, nur einfache Division
      y = y - yOffset
      x = Math.floor(x / BLOCK_SIZE)
      y = Math.floor(y / BLOCK_SIZE)

      if (currentBlock.current?.[0] === x && currentBlock.current?.[1] === y) {
        return
      }

      currentBlock.current = [x, y]

      setHoveredBlocks((blocks) => {
        let key = counter.current++
        let block = [x, y, key]
        // Behält nur die letzten paar Blöcke im State für Performance
        return [...blocks, block].filter(
          (block) => !(block[0] === x && block[1] === y && block[2] !== key),
        )
      })
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [yOffset, interactive])

  return (
    <svg ref={ref} aria-hidden="true" {...props}>
      {/* Das Grundraster */}
      <rect width="100%" height="100%" fill={`url(#${id})`} strokeWidth="0" />
      
      {/* Container für die Blöcke */}
      <svg x="0" y={yOffset} strokeWidth="0" className="overflow-visible">
        {/* Statische (immer sichtbare) Blöcke - in hellem Grau */}
        {staticBlocks.map((block) => (
          <Block 
            key={`${block}`} 
            x={block[0]} 
            y={block[1]} 
            className="text-neutral-900/2" // Sehr subtil
          />
        ))}
        
        {/* Interaktive Hover-Blöcke */}
        {hoveredBlocks.map((block) => (
          <Block
            key={block[2]}
            x={block[0]}
            y={block[1]}
            className="text-neutral-900/10" // Etwas dunkler beim Hovern
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.9, 1, 0.9] // Pulsierender Effekt beim Hover
            }}
            transition={{ duration: 0.8, times: [0, 0.2, 1] }}
            onAnimationComplete={() => {
              setHoveredBlocks((blocks) =>
                blocks.filter((b) => b[2] !== block[2]),
              )
            }}
          />
        ))}
      </svg>

      <defs>
        <pattern
          id={id}
          width={BLOCK_SIZE}
          height={BLOCK_SIZE}
          patternUnits="userSpaceOnUse"
          patternTransform={`translate(0 ${yOffset})`}
          x="0"
          y="0"
        >
          {/* Das Gittermuster: Nur zwei Linien (oben und links) bilden das Grid */}
          <path 
            d={`M${BLOCK_SIZE} 0 L0 0 L0 ${BLOCK_SIZE}`} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            className="text-neutral-500/8" // Farbe der Gitterlinien
          />
        </pattern>
      </defs>
    </svg>
  )
}