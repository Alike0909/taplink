import React, { useEffect, useState } from 'react'

// * STYLES
import { Wrapper, Block, Title, Text, Link, Education, EducationItem, Img } from './style'

// * FIREBASE
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

export function EducationPreview() {

    // * PROPS START

    const db = getFirestore();

    // * PROPS END

    // * VARIABLES START

    const [education, setEducation] = useState([])

    // * VARIABLES END

    // * FETCH STARTS

    async function fetchEducation() {
        setEducation([])
        let querySnapshot = await getDocs(query(collection(db, "education"), orderBy('from', 'desc'), limit(3)))
        querySnapshot.forEach((doc) => {
            setEducation(prev => [...prev, { ...doc.data(), id: doc.id }])
        });
    }

    // * FETCH ENDS

    useEffect(() => {
        fetchEducation()
    }, [])

    return (
        <Wrapper className="dashboard">
            <Block className="block">
                <Title>Education</Title>
                <Link href="/education">
                    more
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </Link>
            </Block>
            <Education className="block">
                {
                    education.map((item, i) =>
                        <EducationItem key={i}>
                            <Link href="/education">
                                <Img src={item.img} alt={`img-${item.id}`} />
                            </Link>
                            <Text>
                                {item.school}
                            </Text>
                        </EducationItem>
                    )
                }
            </Education>
        </Wrapper>
    )
}