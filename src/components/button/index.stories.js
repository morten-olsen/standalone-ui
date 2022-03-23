import '../../style.scss';
import button from './index.ejs';

export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
  },
};

const Template = ({ label, ...args }) => {
  const modifiers = [];
  if (args.primary) {
    modifiers.push('zn-primary');
  }
  return button({ label, ...args, modifiers });
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
