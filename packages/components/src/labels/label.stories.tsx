import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Label, LabelProps } from './label';

const meta: Meta<LabelProps> = {
    title: 'atoms/Label',
    component: Label,
    args: {
        text: 'Default value'
    }
}

const Template: Story<LabelProps> = (args) => {
    return (
        <Label {...args} />
    )
}

export const Large = Template.bind({})
Large.args = {
    size: 'lg'
}

export const Medium = Template.bind({})
Medium.args = {
    size: 'md'
}

export const Small = Template.bind({})
Small.args = {
    size: 'sm'
}

export default meta;