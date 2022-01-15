import React, { useEffect, useState } from 'react'

// * STYLES
import { Block, Link, Button, MusicItem, Text, Counter } from './style'

export function PlayerItem({ music, playMusic, player }) {

    return (
        <>
            {
                music.map((item, i) =>
                    <MusicItem key={i}>
                        <Block onClick={() => playMusic(item)}>
                            <Counter>{(i + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}</Counter>
                        </Block>
                        <Block column onClick={() => playMusic(item)}>
                            <Text>{item.name}</Text>
                            <Text blurred>{item.author} - {item.published}</Text>
                        </Block>
                        <Block>
                            <Link to={item.link} download>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg>
                            </Link>
                            <Button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg>
                            </Button>
                        </Block>
                    </MusicItem>
                )
            }
        </>
    )
}