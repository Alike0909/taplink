import React, { useEffect, useState } from 'react'

// * STYLES
import { Wrapper, Block, Title, Link, Button, Timeline, Education, EducationItem, Img, Text } from './style'

// * FIREBASE
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

export function EducationDetailed() {

    // * PROPS START

    const db = getFirestore();

    // * PROPS END

    // * VARIABLES START

    const [education, setEducation] = useState([])
    const educationStructure = [
        'degree',
        'language',
        'field',
        'tuition',
        'place'
    ]

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
                <Link href="/dashboard/home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                    back
                </Link>
                <Title>Education</Title>
                <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                </Button>
            </Block>
            <Education>
                {
                    education.map((item, i) => 
                        <EducationItem key={i}>
                            <Block>
                                <Block>
                                    <Img src={item.photo} />
                                </Block>
                                <Text>{item.from} - {item.to}</Text>
                                <Title>{item.school}</Title>
                            </Block>
                            <Block column>
                                {
                                    educationStructure.map((element) => 
                                        item[element] && <Text>{element}: {item[element]}</Text>
                                    )
                                }
                                {
                                    item.links && item.links.map(link => 
                                        <Link href={link.link}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                            </svg>
                                            [[{link.text}]]
                                        </Link>
                                    ) 
                                }
                            </Block>
                        </EducationItem>
                    )
                }
            </Education>
        </Wrapper>
    )
}