import React, { useEffect, useState } from 'react'
import moment from 'moment'

// * STYLES
import { Wrapper, Block, Title, TextArea, Text, Input, Button } from './style'

// * COMPONENTS
import { CharCounter } from '../../components/charCounter'
import { Posts } from '../../components/posts'

// * FIREBASE 
import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import { onSnapshot, query, orderBy } from "firebase/firestore";

export function Message({ currentUser }) {

    // * PROPS START

    const db = getFirestore();

    // * PROPS END

    // * VARIABLES START

    const [posts, setPosts] = useState([])
    const [error, setError] = useState(false)
    const [question, setQuestion] = useState({
        text: ``,
        name: ``,
    })

    // * VARIABLES END

    async function postQuestion() {
        !error &&
        await addDoc(collection(db, "questions"), {
            date: moment().format('YYYY-MM-DD HH:mm:ss'),
            name: question.name,
            text: question.text,
            user: currentUser,
        }).then(() => {
            setQuestion({
                text: ``,
                name: ``,
            })
        });
    }

    useEffect(() => {
        onSnapshot(query(collection(db, "questions"), orderBy('date', 'desc')), (querySnapshot) => {
            setPosts([])
            querySnapshot.forEach((doc) => {
                setPosts(prev => [...prev, {...doc.data(), id: doc.id }])
            });
        });
    }, [])

    return (
        <Wrapper className="dashboard">
            <Block className="block">
                <Title>Ask Question</Title>
                <TextArea value={question.text} placeholder="Feel free to use your mothertongue..." onChange={(event) => setQuestion(prev => ({ ...prev, text: event.target.value }))}/>
                <CharCounter text={question.text} setError={setError}/>
                <Block className="block" flex>
                    <Input value={question.name} placeholder="Name: (optional)" onChange={(event) => setQuestion(prev => ({ ...prev, name: event.target.value }))}/>
                    <Button onClick={() => postQuestion()}>Send</Button>
                </Block>
            </Block>
            <Block className="block">
                <Title>Posts</Title>
                <Posts posts={posts} />
            </Block>
        </Wrapper>
    )
}