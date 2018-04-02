import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';

class DynamicStatusBar extends PureComponent {
    static propTypes = {
        /** Status bar background color */
        backgroundColor: PropTypes.string.isRequired,
    };

    render() {
        const { backgroundColor } = this.props;
        const statusBarStyle = tinycolor(backgroundColor).isDark() ? 'light-content' : 'dark-content';

        return <StatusBar barStyle={statusBarStyle} backgroundColor={backgroundColor} translucent />;
    }
}

export default DynamicStatusBar;