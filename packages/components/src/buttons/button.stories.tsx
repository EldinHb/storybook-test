import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { Button } from './button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        text: {
            name: 'text',
            defaultValue: 'default value',
            description: 'Text for button',
            type: 'string'
        }
    }
} as ComponentMeta<typeof Button>;

const Template: Story = (args) => {
    return (
        <Button {...args} />
    )
}

export const Primary = Template.bind({})
Primary.args = {
    primary: true
}

const TemplateLabel: Story = (args) => {
    return (
        <Button {...args} />
    )
}
export const Secondary = TemplateLabel.bind({})