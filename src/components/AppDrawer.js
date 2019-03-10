import React, { Component } from 'react';
import Drawer, { DrawerContent, DrawerAppContent } from '@material/react-drawer';
import { TopMenu } from './TopMenu';
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';
import MaterialIcon from '@material/react-material-icon';

import '@material/react-drawer/dist/drawer.min.css';
import '@material/react-list/index.scss';
import '@material/react-ripple/index.scss';
import '@material/react-top-app-bar/index.scss';
import '@material/react-material-icon/index.scss';

// https://github.com/material-components/material-components-web-react/tree/rc0.11.0/packages/drawer
class AppDrawer extends Component {
    state = {selectedIndex: 0, open: false};
  // handleScrimClick={() => this.setState({open:false})}
    render() {
      return (
      <div className='drawer-container'>
        <Drawer modal open={this.state.open}>
            <DrawerContent>
                <List>
                    {[
                      {label:'Prijavite se', icon:'account_circle'},
                      {label:'Zadnje penjano', icon:'whatshot'},
                      {label:'Smjerovi', icon:'directions'},
                      {label:"Moji usponi",icon:'view_carousel'},
                      {label:"Moji partneri", icon:'group'}].map(el => (
                        <ListItem key={el.label}  onClick={() => this.setState({open:false})}>
                            <ListItemGraphic graphic={<MaterialIcon icon={el.icon}/>} />
                            <ListItemText primaryText={el.label} />
                        </ListItem>
                    ))}
                </List>
            </DrawerContent>
        </Drawer>

        <DrawerAppContent className='drawer-app-content'>
            <TopMenu onToggleDrawer={() => this.setState({open: !this.state.open})} />
            <TopAppBarFixedAdjust>
                <List>
                    {[
                      {label:'Prijavite se', icon:'account_circle'},
                      {label:'Zadnje penjano', icon:'whatshot'},
                      {label:'Smjerovi', icon:'directions'},
                      {label:"Moji usponi",icon:'view_carousel'},
                      {label:"Moji partneri", icon:'group'}].map(el => (
                        <ListItem key={el.label}  onClick={() => this.setState({open:false})}>
                            <ListItemGraphic graphic={<MaterialIcon icon={el.icon}/>} />
                            <ListItemText primaryText={el.label} />
                        </ListItem>
                    ))}
                </List>
            </TopAppBarFixedAdjust>
        </DrawerAppContent>
      </div>);
    }
};

export { AppDrawer };