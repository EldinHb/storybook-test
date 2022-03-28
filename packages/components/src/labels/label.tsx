import React from "react";
import styled from "styled-components";

type Size = 'sm' | 'md' | 'lg';

export type LabelProps = {
    children?: string | never[];
    text?: string;
    className?: string;
    size?: Size;
}

export const Label = (props: LabelProps) => {
    return (
        <StyledLabel
            size={props.size ?? 'md'}
            className={props.className}>
            {
                props.text ?? props.children
            }
        </StyledLabel>
    );
}

const StyledLabel = styled.span<{ size: Size }>`
    font-size: ${x => {
        switch (x.size) {
            case 'lg':
                return '1.2rem';
            case 'md':
                return '1rem';
            case 'sm':
                return '0.8rem';
            default:
                return '1rem';
        }
    }};
    font-weight: 600;
`;