import React from 'react';

import Navigation from '../../../../components/atomic/molecules/navigation/Navigation';

export default {
    title: 'Molecules/Navigation',
    component: Navigation,
};

const Template = (args) => <Navigation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'Agneat',
    color: 'gray',
    family: 'Oswald',
    size: 'sm',
};



