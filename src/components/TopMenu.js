import React from 'react';
import TopAppBar from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

import '@material/react-top-app-bar/index.scss';
import '@material/react-material-icon/index.scss';

// https://github.com/material-components/material-components-web-react/tree/rc0.11.0/packages/top-app-bar
export const TopMenu = ({onToggleDrawer}) => {
    return (
        <TopAppBar
            title='Zadnje penjano'
            navigationIcon={
            <MaterialIcon
                icon='menu'
                onClick={onToggleDrawer}
            />}
        />
    );
  }