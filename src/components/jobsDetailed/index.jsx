import React, { useEffect, useState, useRef } from 'react'
import moment from 'moment'
import ClipLoader from "react-spinners/ClipLoader";

// * STYLES
import { Wrapper, Block, Title, Link, Button, Timeline, TimelineBar, Jobs, JobsItem, JobsItemMask, Img, Text } from './style'

// * FIREBASE
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

export function JobsDetailed(props) {

    // * PROPS START

    const db = getFirestore();

    // * PROPS END

    // * VARIABLES START
    const componentStart = useRef(null)
    const [timelineSettings, setTimelineSettings] = useState({
        startHeight: ``,
    })
    const [jobs, setJobs] = useState([])
    const JobsStructure = [
        'occupation'
    ]

    // * VARIABLES END

    // * FETCH STARTS

    async function fetchJobs() {
        setJobs([])
        let querySnapshot = await getDocs(query(collection(db, "jobs"), orderBy('from', 'desc')))
        querySnapshot.forEach((doc) => {
            setJobs(prev => [...prev, { ...doc.data(), uid: doc.id }])
        });
    }

    // * FETCH ENDS

    useEffect(() => {
        fetchJobs()
    }, [])

    useEffect(() => {
        timelineSettings.startHeight = componentStart.current.offsetHeight
        setTimelineSettings(timelineSettings)
    }, [jobs])

    return (
        <Wrapper className="dashboard">
            <Block className="block">
                <Link href="/dashboard/home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                    back
                </Link>
                <Title>Employment</Title>
                <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                </Button>
            </Block>
            <Jobs>
                <TimelineBar timelineSettings={timelineSettings}></TimelineBar>
                <Block>
                    <Timeline>
                        <ClipLoader color={'rgb(102, 103, 171)'} loading={true} size={24} />
                    </Timeline>
                    <JobsItemMask ref={componentStart}>
                        <Block column>
                            <Text>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                                Next Step!
                            </Text>
                            <Text><b>Occupation:</b> Frontend Developer</Text>
                        </Block>
                    </JobsItemMask>
                </Block>
                {
                    jobs.map((item, i) =>
                        <Block>
                            <Timeline filled></Timeline>
                            <JobsItem key={i}>
                                <Block>
                                    <Block>
                                        <Img src={item.photo} />
                                    </Block>
                                    <Text>{moment(item.from).format('MM-YYYY')} till {moment(item.to).isValid() ? moment(item.to).format('MM-YYYY') : item.to}</Text>
                                    <Title>{item.company}</Title>
                                </Block>
                                <Block column>
                                    {
                                        JobsStructure.map((element) =>
                                            item[element] && <Text><b>{element}</b>: {item[element]}</Text>
                                        )
                                    }
                                    <Text><b>Duties</b>:</Text>
                                    {
                                        item.duties && item.duties.map(duty =>
                                            <Text>- {duty}</Text>
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
                            </JobsItem>
                        </Block>
                    )
                }
            </Jobs>
        </Wrapper>
    )
}