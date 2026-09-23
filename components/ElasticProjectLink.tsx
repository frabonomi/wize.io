'use client'

import { useEffect, useRef } from 'react'

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react'

import styles from './ElasticProjectLink.module.css'

const viewBoxWidth = 1000
const baselineY = 50
const contactRadius = 0
const releaseDistance = 80

type ElasticProjectLinkProps = {
  name: string
  url: string
}

function getPath(x: number, bend: number) {
  const bendY = baselineY + bend

  return [
    `M 0 ${baselineY}`,
    `Q ${x / 2} ${bendY} ${x} ${bendY}`,
    `Q ${(x + viewBoxWidth) / 2} ${bendY} ${viewBoxWidth} ${baselineY}`,
  ].join(' ')
}

export function ElasticProjectLink({ name, url }: ElasticProjectLinkProps) {
  const shouldReduceMotion = useReducedMotion()
  const stringRef = useRef<SVGSVGElement>(null)
  const pointerX = useMotionValue(viewBoxWidth / 2)
  const bend = useSpring(0, {
    damping: 14,
    mass: 0.8,
    restDelta: 0.02,
    restSpeed: 0.02,
    stiffness: 520,
  })
  const path = useTransform(() => getPath(pointerX.get(), bend.get()))

  useEffect(() => {
    if (shouldReduceMotion) {
      bend.jump(0)
      return
    }

    let interaction: 'cooldown' | 'engaged' | 'idle' = 'idle'
    let previousDistance: number | null = null

    function releaseString() {
      if (interaction === 'engaged') {
        bend.set(0)
      }

      interaction = 'idle'
      previousDistance = null
    }

    function handlePointerMove(event: globalThis.PointerEvent) {
      const string = stringRef.current

      if (!string || event.pointerType !== 'mouse') {
        return
      }

      const bounds = string.getBoundingClientRect()
      const isWithinString =
        event.clientX >= bounds.left && event.clientX <= bounds.right

      if (!isWithinString) {
        releaseString()
        return
      }

      const distance = event.clientY - (bounds.top + bounds.height / 2)
      const crossedString =
        previousDistance !== null && previousDistance * distance <= 0

      previousDistance = distance

      if (interaction === 'cooldown') {
        if (Math.abs(distance) > contactRadius * 2) {
          interaction = 'idle'
        }

        return
      }

      if (
        interaction === 'idle' &&
        Math.abs(distance) > contactRadius &&
        !crossedString
      ) {
        return
      }

      interaction = 'engaged'

      const pointerProgress = (event.clientX - bounds.left) / bounds.width
      const clampedDistance = Math.max(
        -releaseDistance,
        Math.min(releaseDistance, distance),
      )

      pointerX.set(
        Math.min(
          viewBoxWidth - 36,
          Math.max(36, pointerProgress * viewBoxWidth),
        ),
      )
      bend.jump((clampedDistance / bounds.height) * 100)

      if (Math.abs(distance) >= releaseDistance) {
        interaction = 'cooldown'
        bend.set(0)
      }
    }

    window.addEventListener('blur', releaseString)
    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    })

    return () => {
      window.removeEventListener('blur', releaseString)
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [bend, pointerX, shouldReduceMotion])

  return (
    <a className={styles.link} href={url} rel="noreferrer" target="_blank">
      <span className={styles.label}>{name}</span>
      <svg
        aria-hidden="true"
        className={styles.string}
        preserveAspectRatio="none"
        ref={stringRef}
        viewBox={`0 0 ${viewBoxWidth} 100`}
      >
        <motion.path className={styles.stringPath} d={path} />
      </svg>
    </a>
  )
}
