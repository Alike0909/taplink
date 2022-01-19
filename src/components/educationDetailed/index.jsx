import React, { useEffect, useState, useRef } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

// * STYLES
import { Wrapper, Block, Title, Link, Button, Timeline, TimelineBar, Education, EducationItem, EducationItemMask, Img, Text } from './style'

// * FIREBASE
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

export function EducationDetailed() {

    // * PROPS START

    const db = getFirestore();

    // * PROPS END

    // * VARIABLES START
    const componentStart = useRef(null)
    const [timelineSettings, setTimelineSettings] = useState({
        startHeight: ``,
    })
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
        let querySnapshot = await getDocs(query(collection(db, "education"), orderBy('from', 'desc')))
        querySnapshot.forEach((doc) => {
            setEducation(prev => [...prev, { ...doc.data(), id: doc.id }])
        });
    }

    // * FETCH ENDS

    useEffect(() => {
        fetchEducation()
    }, [])

    useEffect(() => {
        timelineSettings.startHeight = componentStart.current.offsetHeight
        setTimelineSettings(timelineSettings)
    }, [education])

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
                <TimelineBar timelineSettings={timelineSettings}></TimelineBar>
                <Block>
                    <Timeline>
                        <ClipLoader color={'rgb(102, 103, 171)'} loading={true} size={24} />
                    </Timeline>
                    <EducationItemMask ref={componentStart}>
                        <Block column>
                            <Text>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                                </svg>
                                Next Step!
                            </Text>
                            <Text><b>Degree:</b> Master's Degree</Text>
                            <Text><b>Field:</b> Economics or Risk Management</Text>
                        </Block>
                    </EducationItemMask>
                </Block>
                {
                    education.map((item, i) => 
                        <Block>
                            <Timeline filled></Timeline>
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
                                            item[element] && <Text><b>{element}</b>: {item[element]}</Text>
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
                        </Block>
                    )
                }
            </Education>
        </Wrapper>
    )
}