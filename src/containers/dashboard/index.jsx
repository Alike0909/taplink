import React, { useEffect, useState } from 'react'
import PuffLoader from "react-spinners/PuffLoader";

// * ROUTERS 
import { Route } from 'react-router';

// * STYLES
import { Wrapper, Layout, Content, Footer } from './style'

// * COMPONENTS
import { Home } from '../home'
import { Trading } from '../trading'
import { Message } from '../message'
import { Navbar } from '../../components/navbar'

// * FIREBASE 
import { getFirestore } from "firebase/firestore";
import { doc, onSnapshot } from "firebase/firestore";
import app from '../../firebase'

export function Dashboard(props) {

    // * PROPS START

    const db = getFirestore();

    // * PROPS END

    // * VARIABLES START

    const [isLoading, setIsLoading] = useState(false)

    // * VARIABLES END

    // * FETCH STARTS

    // async function fetchArea() {
    //     let data = await getDocs(query(collection(db, "area"), orderBy('id', 'asc')))
    //     setAllArea(data.docs)
    // }

    // * FETCH ENDS

    function LoadingContent({ isLoading }) {
        if (isLoading) {
            return (
                <PuffLoader color={'#145A5A'} loading={isLoading} css={{ position: 'absolute', zIndex: 2, margin: 'auto', top: 0, bottom: 0, left: 0, right: 0 }} size={150} />
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
                    component={() => <Message />}
                />
            </>
        )
    }

    useEffect(() => {
        // fetchArea()
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