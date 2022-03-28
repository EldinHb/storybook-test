import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Card as CardComponent, CardProps } from './card';

const meta: Meta<CardProps> = {
    title: 'molecule/Cards',
    component: CardComponent,
    args: {
        bodyText: 'Default body text',
        buttonText: 'Default button text',
        headerText: 'Header text',
        imageUrl: 'https://www.worldatlas.com/r/w1200/upload/da/27/73/shutterstock-459943711.jpg',
    }
};

const Template: Story<CardProps> = (args) => <CardComponent {...args} />;

export const Card = Template.bind({})

export default meta;