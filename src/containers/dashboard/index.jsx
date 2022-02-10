import React, { useEffect, useState } from 'react'
import moment from 'moment'
import PuffLoader from "react-spinners/PuffLoader";

// * ROUTERS 
import { Route } from 'react-router';

// * STYLES
import { Wrapper, Layout, Content, Footer } from './style'

// * COMPONENTS
import { Home } from '../home'
import { Trading } from '../trading'
import { Message } from '../message'
import { User } from '../user'
import { Navbar } from '../../components/navbar'

// * UTILS 
import { generatePushID } from '../../utils/generateId'

// * FIREBASE 
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; 
import app from '../../firebase'

export function Dashboard(props) {

    // * PROPS START

    const db = getFirestore();

    // * PROPS END

    // * VARIABLES START

    const [isLoading, setIsLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState(``)

    // * VARIABLES END

    // * FETCH STARTS

    async function postUser() {
        const docId = generatePushID()
        const urlRef = doc(db, 'users', docId);
        setDoc(urlRef, { liked: [], date: moment().format('YYYY-MM-DD') }).then((res) => {
            setCurrentUser({ uid: docId })
        });
        localStorage.setItem("user", JSON.stringify(docId));
    }

    // * FETCH ENDS

    function LoadingContent({ isLoading }) {
        if (isLoading) {
            return (
                <PuffLoader color={'rgb(102, 103, 171)'} loading={isLoading} css={{ position: 'absolute', zIndex: 2, margin: 'auto', top: 0, bottom: 0, left: 0, right: 0 }} size={150} />
            )
        }

        return (
            <>
                <Route 
                    exact
                    path={'/dashboard/home'}
                    component={() => <Home />}
                />
                <Route 
                    exact
                    path={'/dashboard/trading'}
                    component={() => <Trading />}
                />
                <Route 
                    exact
                    path={'/dashboard/message'}
                    component={() => <Message currentUser={currentUser}/>}
                />
                <Route
                    exact
                    path={'/dashboard/user'}
                    component={() => <User />}
                />
            </>
        )
    }

    useEffect(() => {
        localStorage.getItem('user') === null ? postUser() : setCurrentUser(JSON.parse(localStorage.getItem('user')))
    }, [])

    return (
        <Wrapper className="dashboard">
            <Layout className="layout">
                <Content className="content">
                    <LoadingContent isLoading={isLoading} />
                </Content>
                <Footer className="footer">
                    <Navbar {...props}/>
                </Footer>
            </Layout>
        </Wrapper>
    )
}