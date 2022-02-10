import React, { useEffect, useState, useRef} from 'react'
import { useSwipeable } from 'react-swipeable';
import ReactPlayer from 'react-player'

// * STYLES
import { Wrapper, Block, Title, Link, Button, Music, MusicItemMask, LargeText, Text, SmallText, Img, Quotes, Player, PlayerProgress, PlayerDuration, Counter, Footer } from './style'

// * FIREBASE
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

// * COMPONENTS
import { PlayerItems } from "../playerItem"

export function PlayerDetailed(props) {

    // * PROPS START

    const db = getFirestore();

    // * PROPS END

    // * VARIABLES START

    const ref = useRef(null)
    const component = useRef(null)
    const [music, setMusic] = useState([])
    const [player, setPlayer] = useState({
        width: ``,
        isPlaying: false,
        data: ``,
        duration: ``,
        progress: ``,
    })

    // * VARIABLES END

    // * FETCH STARTS

    async function fetchMusic() {
        setMusic([])
        let querySnapshot = await getDocs(query(collection(db, "music"), orderBy('author', 'desc')))
        querySnapshot.forEach((doc) => {
            setMusic(prev => [...prev, { ...doc.data(), uid: doc.id }])
        });
    }

    // * FETCH ENDS

    const handlers = useSwipeable({
        onSwiping: (e) => {
            const position = (e.deltaX + e.initial[0]) / player.width
            if (ref.current !== null) {
                if (position < 0.83 || position > 0.96) {
                    if (position < 0) {
                        ref.current.seekTo(0)
                    } else if (position > 1) {
                        ref.current.seekTo(1)
                    } else {
                        ref.current.seekTo(position)
                    }
                }
            }
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const playMusic = (data) => {
        if (player.data.uid == data.uid) {
            setPlayer(prev => (
                { ...prev, data: data, isPlaying: !player.isPlaying }
            ))
            return;
        }

        setPlayer(prev => (
            { ...prev, data: data, isPlaying: true }
        ))
    }

    useEffect(() => {
        fetchMusic()
        setPlayer(prev => (
            { ...prev, width: component.current.children[0].offsetWidth}
        ))
    }, [])

    useEffect(() => {
        const path = props.location.pathname.replace('/music/', '')
        path.replace('/music', '') != '' ?
            music.map(item => item.uid == path && playMusic(item))
            :
            music[0] && playMusic(music[0])
    }, [music])

    return (
        <Wrapper className="dashboard">
            <Block className="block">
                <Link href="/dashboard/home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                    back
                </Link>
                <Title>Music</Title>
                <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                </Button>
            </Block>
            <Block className="block" column>
                <LargeText>
                    <Quotes>
                        One artist - one favourite  song
                    </Quotes>
                    <SmallText>concept</SmallText>
                </LargeText>
            </Block>
            <Music className="music">
                <PlayerItems music={music} playMusic={playMusic} player={player}/>
                <MusicItemMask>
                    <Block>
                        <Counter>{(music.length + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}</Counter>
                    </Block>
                    <Block column>
                        <Text>...coming soon</Text>
                    </Block>
                    <Block>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
                            <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                            <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
                            <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                        </svg>
                    </Block>
                </MusicItemMask>
                <ReactPlayer
                    ref={ref}
                    url={player.data?.link}
                    playing={player.isPlaying}
                    onDuration={(event) => setPlayer(prev => (
                        { ...prev, duration: event }
                    ))}
                    onProgress={(event) => setPlayer(prev => (
                        { ...prev, progress: event }
                    ))}
                    onEnded={() => playMusic(music[player.data.id] ? music[player.data.id] : music[player.data.id - 2])}
                    style={{ display: 'none' }}
                />
            </Music>
            <Footer ref={component} isVisible={player.isPlaying}>
                <Player {...handlers}>
                    <Block>
                        <Img src={player.data.img}/>
                    </Block>
                    <Block column>
                        <Text>{player.data.name ? player.data.name : 'Unknown track'}</Text>
                        <Text blurred>{player.data.author ? player.data.author : 'Unknown artist'} - {player.data.published ? player.data.published : 'someday'}</Text>
                        <PlayerDuration>
                            {Math.floor(player.progress.playedSeconds / 60) + ':' + Math.floor(player.progress.playedSeconds % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
                            /
                            {Math.floor(player.duration / 60) + ':' + Math.floor(player.duration % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
                        </PlayerDuration>
                    </Block>
                    <Button onClick={() => playMusic(player.data)}>
                        {
                            player.isPlaying ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
                                    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                </svg>
                        }
                    </Button>
                    <PlayerProgress width={`${player.progress.played * 100}%`} />
                </Player>
            </Footer>
        </Wrapper>
    )
}