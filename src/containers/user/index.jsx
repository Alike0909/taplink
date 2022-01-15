import React, { useEffect, useState } from 'react'

export function User() {

    // * PROPS START

    // * PROPS END

    // * VARIABLES START

    // const [allArea, setAllArea] = useState([])

    // * VARIABLES END

    // * FETCH STARTS

    // async function fetchArea() {
    //     let data = await getDocs(query(collection(db, "area"), orderBy('id', 'asc')))
    //     setAllArea(data.docs)
    // }

    // * FETCH ENDS

    useEffect(() => {
        // fetchArea()
    }, [])

    return (
        <div className="user">

        </div>
    )
}