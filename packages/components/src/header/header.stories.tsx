import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Header as HeaderComponent } from './header';

const meta: Meta = {
    title: 'organism/Header',
    component: HeaderComponent,
    parameters: {
        layout: 'fullscreen'
    }
}

const Template: Story = (args) => {
    return (
        <HeaderComponent
            {...args} />
    )
}

export const Header = Template.bind({})

export default meta;