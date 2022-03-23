import '../../style.scss';
import row from './index.ejs';
import button from '../button/index.ejs';

export default {
  title: 'Components/Row',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    title: { control: 'text' },
    onClick: { action: 'onClick' },
    alternate: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['normal', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  const modifiers = [];
  if (args.alternate) {
    modifiers.push('zn-alternate');
  }
  if (args.size === 'large') {
    modifiers.push('zn-large');
  }
  return row({ label, ...args, modifiers });
};

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Normal.args = {
  title: 'Row title',
  body: button({ label: 'test' }),
};

export const Alternate = Template.bind({});
Alternate.args = {
  title: 'Row title',
  alternate: true,
};

export const Large = Template.bind({});
Large.args = {
  title: 'Row title',
  size: 'large',
};
