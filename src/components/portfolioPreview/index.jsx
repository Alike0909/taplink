import React, { useEffect, useState } from 'react'

// * STYLES
import { Wrapper, Block, Title, Text, Link, Portfolio, PortfolioItem } from './style'

// * FIREBASE
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

export function PortfolioPreview() {

    // * PROPS START

    const db = getFirestore();

    // * PROPS END

    // * VARIABLES START

    const [portfolio, setPortfolio] = useState([])

    // * VARIABLES END

    // * FETCH STARTS

    async function fetchPortfolio() {
        setPortfolio([])
        let querySnapshot = await getDocs(query(collection(db, "portfolio"), orderBy('id', 'asc'), limit(5)))
        querySnapshot.forEach((doc) => {
            setPortfolio(prev => [...prev, { ...doc.data(), uid: doc.id }])
        });
    }

    // * FETCH ENDS

    useEffect(() => {
        fetchPortfolio()
    }, [])

    return (
        <Wrapper className="dashboard">
            <Block className="block">
                <Title>Portfolio</Title>
                <Link href="/jobs">
                    more
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </Link>
            </Block>
            <Portfolio className="block">
                {
                    portfolio.map((item, i) =>
                        <PortfolioItem>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder" viewBox="0 0 16 16">
                                <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                            </svg>
                            <Text>../{item.name}</Text>
                        </PortfolioItem>
                    )
                }
            </Portfolio>
        </Wrapper>
    )
}