import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from './button';

const meta: Meta<ButtonProps> = {
    title: 'atoms/Button',
    component: Button,
    args: {
        text: 'Default text'
    }
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({})
Primary.args = {
    primary: true
}

export const Secondary = Template.bind({})

export default meta;