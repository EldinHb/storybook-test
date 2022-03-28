import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Input as InputComponent, InputProps } from './input';

const meta: Meta<InputProps> = {
    title: 'atoms/Input',
    component: InputComponent
};

const Template: Story<InputProps> = (args) => {
    return (
        <InputComponent
            placeholder='placeholder'
            {...args} />
    )
}

export const Input = Template.bind({})

export default meta;