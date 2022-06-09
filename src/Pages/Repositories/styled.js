import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width:100%;
    max-width: 500px;
    margin: 0 auto;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 ;
    font-family: sans-serif;
`

export const ListItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
    text-align: center;
`
export const LinkHome = styled(Link)`
    display: block;
    width: 8rem;
    background: #000;
    color: #fff;
    margin: 2rem auto;
    padding: .25rem;
    text-align: center;
    border-radius: .25rem ;
    text-decoration: none;

    &:hover{
        background: #fff;
        color: #000;
        border: 1px solid black;
    }
`
export const Footer = styled.footer`
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    color: white;
    font-size:.7rem;
`