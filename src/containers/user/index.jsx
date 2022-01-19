import React, { useEffect, useState } from 'react'

// * STYLES
import { Wrapper, Block, Title, Input, Text, Highlighted, Button } from './style'

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
        <Wrapper className="dashboard">
            <Block className="block">
                <Title>Only for Admin</Title>
                <Input placeholder="Password" type="password"/>
            </Block>
            <Block>
                <Text>...but <Highlighted>feel free</Highlighted> to use url-shortener 👇👇👇</Text>
            </Block>
            <Block className="block">
                <Input placeholder="Shorten your link" type="text" />
                <Button>Shorten</Button>
            </Block>
        </Wrapper>
    )
}