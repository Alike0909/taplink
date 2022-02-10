import React, { useEffect, useState } from 'react'

// * STYLES
import { Text, Warning } from './style'

export function CharCounter({ text, setError }) {

    // * PROPS START

    const length = text?.length

    // * PROPS END

    function checkAmount(length) {
        if (length > 180) {
            setError(true)
            return true
        }

        if (length == 0) {
            setError(true)
            return false
        }

        setError(false)
        return false
    }

    return (
        <>
            <Text error={checkAmount(length)}>
                {length ? length : 0 } / 180
            </Text>
            { checkAmount(length) &&  <Warning>You can't use more than 180 characters</Warning> }
        </>
    )
}