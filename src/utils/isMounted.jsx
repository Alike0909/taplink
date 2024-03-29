import React, { useEffect, useState, useRef }  from 'react'

export function useIsMounted() {
    const componentIsMounted = useRef(true)
    useEffect(() => () => { componentIsMounted.current = false }, [])
    return componentIsMounted
}