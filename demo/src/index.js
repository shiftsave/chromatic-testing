import React, { Component } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Button } from '../../src';

class Demo extends Component {
    render() {
        return (
            <ThemeProvider theme={{ mode: 'light' }}>
                <Button>Button</Button>
            </ThemeProvider>
        );
    }
}

render(<Demo />, document.querySelector('#demo'));
