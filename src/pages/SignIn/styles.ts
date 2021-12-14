import styled from "styled-components";

export const Wrapper = styled.main`
    position: relative;

    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Background = styled.div<{image: any}>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vh;
    background-image: url(${({image}) => image});
    background-size: contain;
    z-index: -1;
`

export const InputContainer = styled.div`
    margin-top: 67px;
    width: 90%;
    flex: 1;
`
export const ButtonContainer = styled.div`
    width: 90%;
    margin-top: 20px;

    display: flex;
    align-items: center;
    flex-direction: column;

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        color: ${({theme}) => theme.colors.secondary};
        margin-top: 1em;

        a {
            font-family: 'Roboto', sans-serif;
            font-size: 1.25rem;
            font-weight: 700;
            color: ${({theme}) => theme.colors.primary};
        }
    }
`