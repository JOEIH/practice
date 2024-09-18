import React from "react";
import StoryBox from "../components/StoryBox";

export default {
  title: 'Example/StoryBox',
  component: StoryBox,
  
  argTypes: {
    width: {control: 'number'},
    height: {control: 'number'},
    backgroundColor: { control: 'color' },
  },

};

const Template = (args) => <StoryBox {...args} />

export const Default = Template.bind({})

// Primary.args = {
//     primary: true,
//     label: 'Button',
// };