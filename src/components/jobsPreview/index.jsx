import React, { useEffect, useState } from 'react'

// * STYLES
import { Wrapper, Block, Title, Text, Link, Jobs, JobsItem, Img } from './style'

// * FIREBASE
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

export function JobsPreview() {

    // * PROPS START

    const db = getFirestore();

    // * PROPS END

    // * VARIABLES START

    const [jobs, setJobs] = useState([])

    // * VARIABLES END

    // * FETCH STARTS

    async function fetchJobs() {
        setJobs([])
        let querySnapshot = await getDocs(query(collection(db, "jobs"), orderBy('from', 'desc'), limit(3)))
        querySnapshot.forEach((doc) => {
            setJobs(prev => [...prev, { ...doc.data(), uid: doc.id }])
        });
    }

    // * FETCH ENDS

    useEffect(() => {
        fetchJobs()
    }, [])

    return (
        <Wrapper className="dashboard">
            <Block className="block">
                <Title>04. Employment</Title>
                <Link href="/jobs">
                    more
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </Link>
            </Block>
            <Jobs className="block">
                {
                    jobs.map((item, i) =>
                        <JobsItem key={i}>
                            <Link href="/jobs/">
                                <Img src={item.img} alt={`img-${item.id}`} />
                            </Link>
                            <Text>
                                {item.company}
                            </Text>
                        </JobsItem>
                    )
                }
            </Jobs>
        </Wrapper>
    )
}