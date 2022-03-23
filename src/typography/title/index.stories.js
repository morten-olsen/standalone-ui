import '../../style.scss';
import body from './index.ejs';

export default {
  title: 'Typography/Title',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    text: { control: 'text' },
    alternate: { control: 'boolean' },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ ...args }) => {
  return body({ ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Hello ZeroNorth',
}
