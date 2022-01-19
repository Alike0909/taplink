import React, { useEffect, useState } from 'react'

// * STYLES
import { Wrapper, Block, Title, Text, Link, Music, MusicItem, MusicItemMask, Img } from './style'

// * FIREBASE
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

export function PlayerPreview() {

    // * PROPS START

    const db = getFirestore();

    // * PROPS END

    // * VARIABLES START

    const [music, setMusic] = useState([])

    // * VARIABLES END

    // * FETCH STARTS

    async function fetchMusic() {
        setMusic([])
        let querySnapshot = await getDocs(query(collection(db, "music"), orderBy('author', 'desc'), limit(3)))
        querySnapshot.forEach((doc) => {
            setMusic(prev => [...prev, { ...doc.data(), uid: doc.id }])
        });
    }

    // * FETCH ENDS

    useEffect(() => {
        fetchMusic()
    }, [])

    return (
        <Wrapper className="dashboard">
            <Block className="block">
                <Title>02. Music</Title>
                <Link href="/music">
                    more
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </Link>
            </Block>
            <Music className="block">
                {
                    music.map((item, i) =>
                        <MusicItem key={i}>
                            <Link href={"/music/" + item.uid}>
                                <Img src={item.img} alt={`img-${item.id}`} />
                            </Link>
                            <Text>
                                {item.author} - {item.name}
                            </Text>
                        </MusicItem>
                    )
                }
                {
                    music.length < 3 &&
                    <MusicItemMask>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
                            <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                            <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
                            <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                        </svg>
                        <Text >...coming</Text>
                    </MusicItemMask>
                }
            </Music>
        </Wrapper>
    )
}