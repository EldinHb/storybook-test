import React from "react";
import styled from "styled-components";

type Props = {
    children?: string | never[];
    className?: string;
}

export const Label = (props: Props) => {
    return (
        <StyledLabel className={props.className}>
            {
                props.children
            }
        </StyledLabel>
    );
}

const StyledLabel = styled.span`
    font-size: 1rem;
`;