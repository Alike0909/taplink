import React from 'react';

// * STYLES
import { Block, Link, Button, MusicItem, Text, Counter, MusicProgress } from './style'

export function PlayerItems({ music, playMusic, player }) {

    return (
        <>
            {
                music.map((item, i) =>
                    <MusicItem key={i}>
                        <Block onClick={() => playMusic(item)}>
                            <Counter>{
                                player.data.uid == item.uid &&
                                    player.isPlaying ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
                                            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                                        </svg>
                                        :
                                        (i + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
                            }</Counter>
                        </Block>
                        <Block column onClick={() => playMusic(item)}>
                            <Text>{item.name}</Text>
                            <Text blurred>{item.author} - {item.published}</Text>
                        </Block>
                        <Block>
                            <Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z" />
                                    <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z" />
                                </svg>
                            </Link>
                            <Button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg>
                            </Button>
                        </Block>
                        <MusicProgress width={`${player.data.uid == item.uid && player.progress.played * 100}%`}/>
                    </MusicItem>
                )
            }
        </>
    )
}