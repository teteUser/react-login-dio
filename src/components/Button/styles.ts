import styled from 'styled-components';

export const ButtonContainer = styled.button`
    pointer-events:${(props)=>props.disabled ? 'none' : null};
    opacity: ${(props)=>props.disabled ? 0.2 : 1};

    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`