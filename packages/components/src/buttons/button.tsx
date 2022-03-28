import React from 'react';
import styled from "styled-components";

export type ButtonProps = {
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
    className?: string;
}

export const Button = (props: ButtonProps) => {
    return (
        <ButtonContainer primary={props.primary} onClick={props.onClick} className={props.className}>
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
    white-space: nowrap;
    justify-content: space-around;
    align-items: center;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 0 1rem;
    background-color: ${x => x.primary ? 'blue' : 'white'};
    ${x => !x.primary ? 'border: 1px solid gray' : ''};
    color: ${x => x.primary ? 'white' : 'black'};
    &:hover {
        cursor: pointer;
    }
    &:active {
        background-color: ${x => x.primary ? 'darkblue' : 'lightgray'};
    }
`;

const Text = styled.span`
    user-select: none;
`;