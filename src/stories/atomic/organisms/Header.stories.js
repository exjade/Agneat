import React from 'react';

import Header from '../../../components/atomic/organisms/Header';

export default {
    title: 'Organisms/Header',
    component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Agneat',
};

export const Secondary = Template.bind({});
Secondary.args = {
    title: 'Agneat',
};

