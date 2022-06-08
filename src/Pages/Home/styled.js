import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
`

export const Title = styled.h1`
    text-aling:center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus,
    &:active {
        outline:none;
        box-shadow:none;
    }
`
export const Button = styled.button`
    height: 1.6rem;
    border: 1px solid #fff;
    background: linear-gradient(to right,black 50%, white 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    color: #000;
    border-radius: 0 .25rem .25rem 0;
    transition: all 300ms ease-out;

    &:focus,
    &:active {
        outline:none;
        box-shadow:none;
    }
    &:hover {
        background-position: left bottom;
        color:#7ed957;
        text-shadow: 0 0 10px #fff, 0 0 2px #7ed957;
        border: 1px solid white;
    }
`

export const ErrorMessage = styled.span`
    margin-top: 5px;
    color: red;
    font-size: .8rem;
`
export const Footer = styled.footer`
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    color: white;
    font-size:.5rem;
`