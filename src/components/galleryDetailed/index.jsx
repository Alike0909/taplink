import React, { useEffect, useState } from 'react'
import moment from 'moment'

// * STYLES
import { Wrapper, Block, Title, Link, Button, Gallery, GalleryItem, GalleryItemMask, Img, GalleryTitle, Text, SmallText, Quotes } from './style'

// * FIREBASE
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

export function GalleryDetailed() {

    // * PROPS START

    const db = getFirestore();

    // * PROPS END

    // * VARIABLES START

    const [gallery, setGallery] = useState([])

    // * VARIABLES END

    // * FETCH STARTS

    async function fetchGallery() {
        setGallery([])
        let querySnapshot = await getDocs(query(collection(db, "gallery"), orderBy('id', 'asc'), limit(3)))
        querySnapshot.forEach((doc) => {
            setGallery(prev => [...prev, { ...doc.data(), id: doc.id }])
        });
    }

    // * FETCH ENDS

    useEffect(() => {
        fetchGallery()
    }, [])

    return (
        <Wrapper className="dashboard">
            <Block className="block">
                <Link href="/dashboard/home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                    back
                </Link>
                <Title>Gallery</Title>
                <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                </Button>
            </Block>
            <Gallery className="gallery">
                {
                    gallery.map((item, i) =>
                        <GalleryItem key={i}>
                            <Block className="block" column>
                                <Img src={item.link} />
                                <SmallText>by {item.author} for the qnrt.kz</SmallText>
                                <SmallText>{moment(item.date).format('DD MMMM, YYYY')}</SmallText>
                            </Block>
                            <Block className="block" column>
                                <GalleryTitle bold>
                                    <Quotes>
                                        {item.title}
                                    </Quotes>
                                </GalleryTitle>
                                <Text>{item.text}</Text>
                                <Text>
                                    {
                                        item.links?.map((link) => 
                                            <Link href={link.link}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                                </svg>
                                                [[{link.text}]]
                                            </Link>
                                    )}
                                </Text>
                            </Block>
                        </GalleryItem>
                    )
                }
                <GalleryItemMask>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                    </svg>
                    <Text >...coming soon</Text>
                </GalleryItemMask>
            </Gallery>
        </Wrapper>
    )
}