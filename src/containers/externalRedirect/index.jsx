import React, { useEffect, useState } from 'react'
import { Route, Redirect } from "react-router-dom";
import prependHttp from 'prepend-http';
import PuffLoader from "react-spinners/PuffLoader";

// * FIREBASE
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";

export function ExternalRedirect(props) {

    // * PROPS START

    const db = getFirestore();
    const path = props.match.params.id

    // * PROPS END

    // * VARIABLES START

    const [isLoading, setIsLoading] = useState(true)
    const [link, setLink] = useState(null)

    // * VARIABLES END

    // * FETCH STARTS

    async function fetchLink() {
        const docRef = doc(db, "urls", path);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setLink(docSnap.data().link);
        }
    }

    async function updateViews() {
        const urlRef = doc(db, "urls", path);
        await updateDoc(urlRef, {
            views: increment(1)
        });
    }

    // * FETCH ENDS

    function LoadingContent({ isLoading }) {
        if (isLoading) {
            return (
                <PuffLoader color={'rgb(102, 103, 171)'} loading={isLoading} css={{ position: 'absolute', zIndex: 2, margin: 'auto', top: 0, bottom: 0, left: 0, right: 0 }} size={150} />
            )
        }

        return (
            <Route
                {...props.exact}
                path={`/${path}`}
                render={() => {
                    window.location.replace(prependHttp(link));
                    return null;
                }}
            />
        )
    }

    useEffect(() => {
        fetchLink()
        updateViews().then(() => setIsLoading(false))
    }, [])

    return (
        <LoadingContent isLoading={isLoading} />
    );
}
