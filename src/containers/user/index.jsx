import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import prependHttp from 'prepend-http';

// * STYLES
import { Wrapper, Block, Title, Input, Text, Highlighted, Button, Warning, Links, LinkItem, ButtonOption } from './style'

// * FIREBASE 
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; 

// * UTILS 
import { generatePushID } from '../../utils/generateId'

export function User() {

    // * PROPS START

    const db = getFirestore();

    // * PROPS END

    // * VARIABLES START

    const [error, setError] = useState(false)
    const [link, setLink] = useState(``)
    const [recentLinks, setRecentLinks] = useState(
        localStorage.getItem('recentLinks') === null ? [] : [...JSON.parse(localStorage.getItem('recentLinks'))]
    )

    // * VARIABLES END

    function postUrl(url) {
        if (isValidURL(url) == false) {
            setError(true)
            return;
        }

        setError(false)
        const docId = generatePushID()
        const urlRef = doc(db, 'urls', docId);
        setDoc(urlRef, { link: link, views: 0 }).then((res) => {
            setRecentLinks(prev => [...prev, { link: link, id: docId, views: 0, isCopied: false, isOptionsVisible: false }])
            setLink(``)
        });
        localStorage.setItem("recentLinks", JSON.stringify([...recentLinks, { link: link, id: docId }]));
    }

    async function getViews(index, docId) {
        const docRef = doc(db, "urls", docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            recentLinks[index].views = docSnap.data().views;
            setRecentLinks([...recentLinks])
        }
    }

    function isValidURL(string) {
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
    };

    // * HANDLERS 

    const copyHandle = (index) => {
        // navigator.clipboard.writeText('https://qnrt.kz/' + recentLinks[index].id)
        recentLinks[index].isCopied = !recentLinks[index].isCopied
        setRecentLinks([...recentLinks])
        setTimeout(() => {
            recentLinks[index].isCopied = !recentLinks[index].isCopied
            setRecentLinks([...recentLinks])
        }, 3000)
    }

    const optionHandle = (index) => {
        recentLinks[index].isOptionsVisible = !recentLinks[index].isOptionsVisible
        setRecentLinks([...recentLinks])
        getViews(index, recentLinks[index].id)
    }

    return (
        <Wrapper className="dashboard">
            <Block className="block">
                <Title>Only for Admin</Title>
                <Input placeholder="Password" type="password"/>
            </Block>
            <Block>
                <Text>...but <Highlighted>feel free</Highlighted> to use url-shortener 👇👇👇</Text>
            </Block>
            <Block className="block">
                <Input value={link} placeholder="Shorten your link" type="text" onChange={(event) => setLink(event.target.value)}/>
                <Button onClick={() => postUrl(link)}>Shorten</Button>
                {error && <Warning>Unable to shorten that invalid url!</Warning>}
                <Links>
                    {
                        recentLinks.map((item, i) => 
                            <LinkItem active={item.isOptionsVisible}>
                                <Text>{prependHttp(item.link)}</Text>
                                <Block>
                                    <Text>{'https://qnrt.kz/' + item.id}</Text>
                                    <ButtonOption active={item.isOptionsVisible} onClick={() => optionHandle(i)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-gear-wide-connected" viewBox="0 0 16 16">
                                            <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
                                        </svg>
                                    </ButtonOption>
                                </Block>
                                <Block>
                                    <Text>Views</Text>
                                    <Text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                        </svg>
                                        {item?.views}
                                    </Text>
                                </Block>
                                <CopyToClipboard text={'https://qnrt.kz/' + item.id} onCopy={() => copyHandle(i)}>
                                    <Button>{item.isCopied ? 'Copied!' : 'Copy'}</Button>
                                </CopyToClipboard>
                            </LinkItem>
                        )
                    }
                </Links>
            </Block>
        </Wrapper>
    )
}