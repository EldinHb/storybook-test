import React from "react";
import styled from "styled-components";
import { Button } from "../buttons";
import { Label } from "../labels";

export type CardProps = {
    headerText: string;
    imageUrl: string;
    onClick?: () => void;
    bodyText: string;
    buttonText: string;
}

export const Card = (props: CardProps) => {
    return (
        <CardContainer>
            <Img
                src={props.imageUrl}
            />
            <BodyContainer>
                <Label
                    text={props.headerText}
                />
                <BodyText>
                    {
                        props.bodyText
                    }
                </BodyText>
                <CardButton
                    text={props.buttonText}
                    onClick={props.onClick}
                />
            </BodyContainer>
        </CardContainer>
    )
};

const CardContainer = styled.div`
    width: 15rem;
    -webkit-box-shadow: 0px 0px 20px -6px #000000; 
    box-shadow: 0px 0px 20px -6px #000000;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
`;

const Img = styled.img`
    height: 7rem;
    width: 100%;
    object-fit: cover;
`;

const BodyContainer = styled.div`
    padding: 0.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const BodyText = styled.div`
    font-size: .8rem;
    margin-bottom: 1rem;
    margin-top: .7rem;
    white-space: normal;
`;

const CardButton = styled(Button)`
    width: 100%;
`;