'use client'

import { useState, useEffect } from 'react'

export function usePagePosition() {
    const [pagePosition, setPagePosition] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setPagePosition(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return pagePosition
} 