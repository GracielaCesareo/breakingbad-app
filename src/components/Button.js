import React from 'react';
import styled from '@emotion/styled';

const ButtonComp = styled.button`
    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
    color: #fff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;
    border-radius: 50px;
`;

const Button = () => {

    const checkAPI = () => {
        console.log('consultando...');
    }

    return ( 
        <ButtonComp
            onClick={checkAPI}
        >
        Get phrase
        </ButtonComp>
     );
}
 
export default Button;
