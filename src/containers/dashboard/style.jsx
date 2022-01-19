import styled from 'styled-components'

export const Wrapper = styled.div`
    background: white;
    font-family: 'Montserrat', sans-serif !important;
`;

export const Layout = styled.div`
    position: relative;
    height: 100%;
    min-height: 100vh;
    background: white;
    display: flex;

    @media screen and (min-width: 320px) {
        flex-direction: column;
        justify-content: space-between;
    }

    @media screen and (min-width: 1024px) {
        flex-direction: row-reverse;
        justify-content: flex-end;
    }
`;

export const Content = styled.div`
    background: white;

    @media screen and (min-width: 320px) {
        width: 100%;
    }

    @media screen and (min-width: 1024px) {
        margin: 0 auto;
        max-width: 775px;
    }
`;

export const Footer = styled.div`
    background: transparent;

    @media screen and (min-width: 320px) {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
    }

    @media screen and (min-width: 1024px) {
        position: relative;
        width: fit-content;
    }
`;