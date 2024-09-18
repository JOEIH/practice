import React from "react";
import StoryCounter from "../components/StoryCounter";

export default {
  title: 'Example/StoryCounter',
  component: StoryCounter,
  argTypes: {onIncrease: {action: 'increased'}}
};

const Template = (args) => <StoryCounter {...args} />

export const Default = Template.bind({})

// Primary.args = {
//     primary: true,
//     label: 'Button',
// };