import React, { useEffect, useState } from 'react'
import moment from 'moment'

// * STYLES
import { Wrapper, Block, Avatar, Title, Text, Link, Divider, Bio, Highlighted, Contact, Img } from './style'

// * FIREBASE
import { getFirestore, collection } from "firebase/firestore";
import { doc, getDocs, getDoc, query, orderBy } from "firebase/firestore";

// * COMPONENTS
import { GalleryPreview } from '../../components/galleryPreview'
import { JobsPreview } from '../../components/jobsPreview'
import { EducationPreview } from '../../components/educationPreview'
import { PlayerPreview } from '../../components/playerPreview'
import { PortfolioPreview} from '../../components/portfolioPreview'

export function Home() {

    // * PROPS START

    const db = getFirestore();

    // * PROPS END

    // * VARIABLES START

    const [isStatsVisible, setIsStatsVisible] = useState(false)
    const [isProfileVisible, setIsProfileVisible] = useState(false)
    const [usersCount, setUsersCount] = useState({
        total: 0,
        new: 0
    })
    const [bio, setBio] = useState({})
    const bioStructure = [
        'tribe',
        'born',
        'body',
        'chinese_name',
    ]
    const contactStructure = [
        'instagram',
        'telegram',
        'linkedin',
        'e-mail'
    ]

    // * VARIABLES END

    // * FETCH STARTS

    async function fetchBio() {
        const docRef = doc(db, "bio", process.env.REACT_APP_FIREBASE_BIO);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setBio(docSnap.data());
        }
    }

    async function fetchUsers() {
        setUsersCount([])
        let querySnapshot = await getDocs(query(collection(db, "users"), orderBy('date', 'asc')))
        querySnapshot.forEach((doc) => {
            usersCount.total = usersCount.total + 1
            if (doc.data().date == moment().format('YYYY-MM-DD')) {
                usersCount.new = usersCount.new + 1
            }

            setUsersCount(usersCount)
        });
    }

    // * FETCH ENDS

    useEffect(() => {
        fetchBio()
        fetchUsers()
    }, [])

    return (
        <Wrapper className="dashboard">
            <Block className="block" column>
                <Avatar class="avatar"></Avatar>
                <Title>Alnur Mustafayev</Title>
                <Text>
                    <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" />
                    <Link href="https://www.instagram.com/fck.urself.pls/">
                        @fck.urself.pls
                    </Link>
                </Text>
            </Block>
            <Bio className="bio">
                <Block className="block">
                    <Text>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
                            <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        </svg>
                        Profile
                    </Text>
                    <Text onClick={() => setIsProfileVisible(!isProfileVisible)}>{isProfileVisible ? 'hide' : 'show'}</Text>
                </Block>
                <Block className="block" column isVisible={isProfileVisible}>
                    <Text>{isProfileVisible && bio.profile}</Text>
                </Block>
            </Bio>
            <Bio className="bio">
                <Block className="block">
                    <Text>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                        </svg>
                        Basic stats
                    </Text>
                    <Text onClick={() => setIsStatsVisible(!isStatsVisible)}>{isStatsVisible ? 'hide' : 'show'}</Text>
                </Block>
                <Block className="block" column isVisible={isStatsVisible}>
                {   
                    isStatsVisible && bioStructure.map((item) => 
                        <Text>{item.replace('_', ' ')}: {bio[item]}</Text>
                    )
                }
                {
                    isStatsVisible && 
                    <Text>
                        Page Viewers: {usersCount.total}
                        <Highlighted>(+{usersCount.new} за сегодня)</Highlighted>
                    </Text>
                }
                </Block>
            </Bio>
            <Divider><Text>Media</Text></Divider>
            <GalleryPreview />
            <PlayerPreview />
            <Divider><Text>for CV</Text></Divider>
            <EducationPreview />
            <JobsPreview />
            <PortfolioPreview />
            <Divider><Text>to Contact</Text></Divider>
            <Contact>
                {
                    contactStructure.map((item) =>
                        <Text>
                            <Img src={bio[item]?.img}/>
                            {bio[item]?.link}
                        </Text>
                    )
                }
            </Contact>
        </Wrapper>
    )
}