import React, { useState } from "react"
import styled from "styled-components"
import { Button } from "../buttons"
import { Input } from "../input"
import { Label } from "../labels"

export type SearchboxProps = {
    /**
     * label for the searchbox
     */
    label?: string;
    buttonText?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    /**
     * Gets called when the search button has been clicked.
     */
    onSearchClick: (value: string) => void;
    className?: string;
}

export const SearchBox = (props: SearchboxProps) => {
    const [value, setValue] = useState('');

    const onSearchChange = (newValue: string) => {
        setValue(newValue);
        props.onChange && props.onChange(newValue);
    }

    return (
        <Container className={props.className}>
            {
                props.label && <Label
                    text={props.label}
                />
            }
            <SearchBoxContainer>
                <SearchInput
                    onChange={onSearchChange}
                    placeholder={props.placeholder ?? 'Search...'}
                />
                <SearchBoxButton
                    primary
                    onClick={() => props.onSearchClick(value)}
                    text={props.buttonText ?? 'Search'}
                />
            </SearchBoxContainer>
        </Container>
    )
}

const SearchBoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const SearchBoxButton = styled(Button)`
    height: 36px;
`;

const SearchInput = styled(Input)`
    width: 100%;
    min-width: 100px;
`;