import React, { useEffect, useState } from 'react'

// * STYLES
import { Menu, Label } from './style'

// * COMPONENTS
import { Navlink } from '../navlink'

export function Navbar(props) {

    // * PROPS START

    // * PROPS END

    // * VARIABLES START

    // const [allArea, setAllArea] = useState([])

    // * VARIABLES END

    // * FETCH STARTS

    // async function fetchArea() {
    //     let data = await getDocs(query(collection(db, "area"), orderBy('id', 'asc')))
    //     setAllArea(data.docs)
    // }

    // * FETCH ENDS

    useEffect(() => {
        // fetchArea()
    }, [])

    return (
        <Menu className="menu" defaultActive={1}>
            <Navlink path={'/dashboard/home'}>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.9902 20H16.0002V13C16.0002 12.447 15.5522 12 15.0002 12H9.0002C8.4472 12 8.0002 12.447 8.0002 13V20H5.0002L5.0062 11.583L11.9982 4.43199L19.0002 11.624L18.9902 20ZM10.0002 20H14.0002V14H10.0002V20ZM20.4242 10.185L12.7152 2.30099C12.3382 1.91599 11.6622 1.91599 11.2852 2.30099L3.5752 10.186C3.2102 10.561 3.0002 11.085 3.0002 11.624V20C3.0002 21.103 3.8472 22 4.8882 22H9.0002H15.0002H19.1112C20.1522 22 21.0002 21.103 21.0002 20V11.624C21.0002 11.085 20.7902 10.561 20.4242 10.185Z" fill="#757D8A" />
                </svg>
                <Label>Home</Label>
            </Navlink>
            <Navlink path={'/dashboard/trading'}>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9922 6.96289C20.9902 6.89089 20.9692 6.82289 20.9502 6.75389C20.9352 6.69589 20.9282 6.63689 20.9032 6.58389C20.8802 6.53189 20.8412 6.48989 20.8072 6.44189C20.7652 6.38089 20.7272 6.31989 20.6732 6.26989C20.6642 6.26089 20.6602 6.24889 20.6502 6.24089C20.6142 6.20989 20.5702 6.19889 20.5312 6.17389C20.4712 6.13489 20.4122 6.09489 20.3442 6.06889C20.2772 6.04489 20.2112 6.03889 20.1422 6.02889C20.0942 6.02189 20.0512 5.99989 20.0002 5.99989H15.0002C14.4472 5.99989 14.0002 6.44789 14.0002 6.99989C14.0002 7.55189 14.4472 7.99989 15.0002 7.99989H17.8262L13.7902 12.7079L9.51419 10.1429C9.09119 9.88689 8.54719 9.98089 8.23119 10.3599L3.23119 16.3599C2.87819 16.7839 2.93519 17.4149 3.35919 17.7679C3.54719 17.9239 3.77319 17.9999 3.99919 17.9999C4.28619 17.9999 4.57019 17.8779 4.76819 17.6399L9.22019 12.2979L13.4852 14.8579C13.9042 15.1089 14.4422 15.0209 14.7592 14.6509L19.0002 9.70289V11.9999C19.0002 12.5519 19.4472 12.9999 20.0002 12.9999C20.5532 12.9999 21.0002 12.5519 21.0002 11.9999V6.99989C21.0002 6.98689 20.9932 6.97589 20.9922 6.96289Z" fill="#757D8A" />
                </svg>
                <Label>Trading</Label>
            </Navlink>
            <Navlink path={'/dashboard/message'}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10C7 9.448 7.448 9 8 9C8.552 9 9 9.448 9 10C9 10.552 8.552 11 8 11C7.448 11 7 10.552 7 10ZM12 9C11.448 9 11 9.448 11 10C11 10.552 11.448 11 12 11C12.552 11 13 10.552 13 10C13 9.448 12.552 9 12 9ZM16 9C15.448 9 15 9.448 15 10C15 10.552 15.448 11 16 11C16.552 11 17 10.552 17 10C17 9.448 16.552 9 16 9ZM20 15C20 15.551 19.551 16 19 16H8.554C8.011 16 7.477 16.148 7.01 16.428L4 18.234V5C4 4.449 4.449 4 5 4H19C19.551 4 20 4.449 20 5V15ZM19 2H5C3.346 2 2 3.346 2 5V20C2 20.36 2.194 20.693 2.507 20.87C2.66 20.957 2.83 21 3 21C3.178 21 3.356 20.953 3.515 20.857L8.039 18.143C8.195 18.049 8.373 18 8.554 18H19C20.654 18 22 16.654 22 15V5C22 3.346 20.654 2 19 2Z" fill="#757D8A" />
                </svg>
                <Label>Messages</Label>
            </Navlink>
            <Navlink path={'/dashboard/user'}>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 7C14 5.897 13.103 5 12 5C10.897 5 10 5.897 10 7C10 8.103 10.897 9 12 9C13.103 9 14 8.103 14 7ZM16 7C16 9.206 14.206 11 12 11C9.794 11 8 9.206 8 7C8 4.794 9.794 3 12 3C14.206 3 16 4.794 16 7ZM5 20C5 16.14 8.141 13 12 13C15.859 13 19 16.14 19 20C19 20.552 18.553 21 18 21C17.447 21 17 20.552 17 20C17 17.243 14.757 15 12 15C9.243 15 7 17.243 7 20C7 20.552 6.553 21 6 21C5.447 21 5 20.552 5 20Z" fill="#757D8A" />
                </svg>
                <Label>User</Label>
            </Navlink>
        </Menu>
    )
}