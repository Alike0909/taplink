import React, { useEffect, useState } from 'react'

// * STYLES
import { Wrapper, Block, Title, Text, Link, Gallery, GalleryItem, GalleryItemMask, Img } from './style'

// * FIREBASE
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

export function GalleryPreview() {

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
                <Title>01. Gallery</Title>
                <Link href="/gallery">
                    more
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </Link>
            </Block>
            <Gallery className="block">
                {
                    gallery.map((item, i) => 
                        <GalleryItem key={i}>
                            <Link href="/gallery">
                                <Img src={item.link} alt={`img-${item.id}`} />
                            </Link>
                        </GalleryItem>
                    )
                }
                {
                    gallery.length < 3 && 
                    <GalleryItemMask>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                        </svg>
                        <Text >...coming</Text>
                    </GalleryItemMask>
                }
            </Gallery>
        </Wrapper>
    )
}