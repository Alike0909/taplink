import React, { useEffect, useState } from 'react'

// * STYLES
import { Wrapper, Block, Title, Img, Divider, Tabs, Tab, Posts, Post, PostDetails, PostTitle, PostSubTitle } from './style'

export function Trading(props) {

    // * PROPS START

    // * PROPS END

    // * VARIABLES START

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
                <Title>Posts</Title>
                <Divider></Divider>
                <Tabs>
                    <Tab content="Latest"/>
                </Tabs>
                <Posts>
                    <Post>
                        <PostDetails>
                            <PostTitle>Trade idea - bearish on OXY (Brent oil)</PostTitle>
                            <PostSubTitle>Buying SHORT from $37.6, with approximate target to just below $32</PostSubTitle>
                        </PostDetails>
                        <Img src="https://www.tradingview.com/i/9bNtyZfu/"/>
                    </Post>
                </Posts>
            </Block>
        </Wrapper>
    )
}