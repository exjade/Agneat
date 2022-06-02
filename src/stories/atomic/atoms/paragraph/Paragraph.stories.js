import React from 'react';

import Paragraph from '../../../../components/atomic/atoms/paragraph/Paragraph';

export default {
    title: 'Atoms/Paragraph',
    component: Paragraph,
};

const Template = (args) => <Paragraph {...args} />;

export const Black = Template.bind({});
Black.args = {
    text: 'Home',
    color: 'black',
    family: 'Oswald',
    size: 'sm',
};

export const White = Template.bind({});
White.args = {
    text: 'About',
    color: 'white',
    family: 'Oswald',
    size: 'sm',
};

export const Gray = Template.bind({});
Gray.args = {
    text: 'Pricing',
    color: 'gray',
    family: 'Oswald',
    size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
    text: 'Blog',
    color: 'black',
    family: 'Oswald',
    size: 'md',
};
export const Small = Template.bind({});
Small.args = {
    text: 'People trust us',
    color: 'black',
    family: 'Oswald',
    size: 'sm',
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
    text: 'Say on top...',
    color: 'black',
    family: 'Oswald',
    size: 'xs',
};

