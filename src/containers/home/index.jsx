import React, { useEffect, useState } from 'react'

// * STYLES
import { Wrapper, Block, Avatar, Title, Text, Link } from './style'

// * COMPONENTS
import { GalleryPreview } from '../../components/galleryPreview'
import { JobsPreview } from '../../components/jobsPreview'
import { EducationPreview } from '../../components/educationPreview'

export function Home() {

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
            <Block className="block" column>
                <Avatar class="avatar"></Avatar>
                <Title>Alnur Mustafayev</Title>
                <Text>
                    <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" />
                    <Link href="https://www.instagram.com/fck.urself.pls/">
                        @fck.urself.pls
                    </Link>
                </Text>
            </Block>
            <GalleryPreview />
            <EducationPreview />
            <JobsPreview />
        </Wrapper>
    )
}