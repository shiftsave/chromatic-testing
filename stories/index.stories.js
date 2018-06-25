import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Imports
import { Button } from '../src';

// Initialize the theme
const Theme = storyFn => (
    <ThemeProvider theme={{ mode: 'light' }}>{storyFn()}</ThemeProvider>
);

// Stories
storiesOf('Button', module)
    .addDecorator(Theme)
    .add('default', () => <Button onClick={action('clicked')}>Button</Button>)
    .add('primary', () => (
        <Button buttonType="primary" onClick={action('clicked')}>
            Button
        </Button>
    ))
    .add('success', () => (
        <Button buttonType="success" onClick={action('clicked')}>
            Button
        </Button>
    ))
    .add('warning', () => (
        <Button buttonType="warning" onClick={action('clicked')}>
            Button
        </Button>
    ))
    .add('danger', () => (
        <Button buttonType="danger" onClick={action('clicked')}>
            Button
        </Button>
    ));
