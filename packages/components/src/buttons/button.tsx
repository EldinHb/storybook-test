import React from 'react';
import styled from "styled-components";
import { Label } from '../labels';

type Props = {
    children?: string | never[];
    /**
     * This triggers the onclick
     */
    onClick?: () => void;
    /**
     * Use this or children to provide text for the button
     */
    text?: string;
    primary?: boolean;
}

export const Button = (props: Props) => {
    console.log(props.primary)
    return (
        <ButtonContainer primary={props.primary} onClick={props.onClick}>
            <Text>
                {
                    props.text ? props.text : props.children
                }
            </Text>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div<{ primary?: boolean }>`
    height: 50px;
    align-self: flex-start;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 4px;
    background-color: ${x => x.primary ? 'blue' : 'white'};
    ${x => !x.primary ? 'border: 1px solid gray' : ''};
    color: ${x => x.primary ? 'white' : 'black'};
    padding: 0 10px;
    &:hover {
        cursor: pointer;
    }
    &:active {
        background-color: ${x => x.primary ? 'darkblue' : 'lightgray'};
    }
`;

const Text = styled(Label)`
    user-select: none;
`;