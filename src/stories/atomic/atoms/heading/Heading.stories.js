import React from 'react';

import Heading from '../../../../components/atomic/atoms/heading/Heading';

export default {
    title: 'Atoms/Heading',
    component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const LightMode = Template.bind({});
LightMode.args = {
    text: 'Agneat',
    color: 'black',
    family: 'Oswald',
    size: 'md',
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    text: 'Agneat',
    color: 'white',
    family: 'Oswald',
    size: 'md',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
    text: 'Agneat',
    color: 'black',
    family: 'Oswald',
    size: 'xl',
};
export const Large = Template.bind({});
Large.args = {
    text: 'Agneat',
    color: 'black',
    family: 'Oswald',
    size: 'lg',
};

export const Medium = Template.bind({});
Medium.args = {
    text: 'Agneat',
    color: 'black',
    family: 'Oswald',
    size: 'md',
};
export const Small = Template.bind({});
Small.args = {
    text: 'Agneat',
    color: 'black',
    family: 'Oswald',
    size: 'sm',
};


