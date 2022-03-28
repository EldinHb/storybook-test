import { Meta, Story } from '@storybook/react';
import React from 'react';
import { SearchBox as SearchBoxComponent, SearchboxProps } from './searchBox';

const meta: Meta<SearchboxProps> = {
    title: 'molecule/SearchBox',
    component: SearchBoxComponent,
    argTypes: {
        buttonText: {
            description: 'text for the button next to the box'
        }
    }
};

const Template: Story<SearchboxProps> = (args) => {
    return (
        <SearchBoxComponent {...args} />
    )
}

export const SearchBox = Template.bind({})
export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'Default searchbox label'
}

export default meta;