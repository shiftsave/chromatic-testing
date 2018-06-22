import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Imports
import { Button } from '../src';

// Stories
storiesOf('Button', module)
    .add('default', () => <Button onClick={action('clicked')}>Button</Button>)
    .add('primary', () => <Button onClick={action('clicked')}>Button</Button>);
