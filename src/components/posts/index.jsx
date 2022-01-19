import React from 'react'
import moment from 'moment'
import 'moment/locale/ru';

// * STYLES
import { Text, SmallText, Post, PostItem, Status } from './style'

export function Posts({posts}) {

    return (
        posts.map((item, i) =>
            <Post key={i}>
                <PostItem>
                    <Text>Question: {item.text}</Text>
                    <Text>
                        by: {item?.name ? item?.name : 'Anonym'}&nbsp;
                        <SmallText>{moment(item.date).calendar()}</SmallText>&nbsp;
                        <Status checked={item?.answer ? true : false}>
                            {
                                item?.answer ?
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
                                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
                                            <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
                                        </svg>
                                        Answered
                                    </>
                                    :
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
                                            <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                                        </svg>
                                        waiting
                                    </>
                            }
                        </Status>
                    </Text>
                </PostItem>
                {
                    item?.answer
                    &&
                    <PostItem flex>
                        <img src="https://img.icons8.com/ios-filled/50/000000/right3.png" />
                        <Text>
                            {item?.answer} <br/>
                            by: Alnur Mustafayev
                        </Text>
                    </PostItem>
                }
            </Post>
        )
    )
}