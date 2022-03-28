import React from "react";
import styled from "styled-components";

export type InputProps = {
    placeholder?: string;
    onChange?: (value: string) => void;
    className?: string;
}

export const Input = (props: InputProps) => {
    return (
        <StyledInput
            className={props.className}
            placeholder={props.placeholder}
            onChange={(e) => props.onChange && props.onChange(e.target.value)}
        />
    );
};

const StyledInput = styled.input`
    padding: .5rem;
    background-color: white;
    border-style: solid;
    border-color: #C8C8C8;
    border-width: 2px;
    border-radius: 4px;
    &:focus {
        border-color: lightblue;
        outline: none;
        -webkit-box-shadow: 0px 0px 13px -3px #35EDFF; 
        box-shadow: 0px 0px 13px -3px #35EDFF;
    }
    &:hover {
        border-color: lightblue;
    }
`;