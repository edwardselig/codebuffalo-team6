import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import ActivityChooser from './ActivityChooser';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};

export default function ScrollableTabsButtonPrevent() {
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div>
            <div className="content">
                {value === 0 && <TabContainer>Item One</TabContainer>}
                {value === 1 && (
                    <TabContainer>
                        <ActivityChooser />
                    </TabContainer>
                )}
                {value === 2 && <TabContainer></TabContainer>}
            </div>
            <div className="toolbar">
                <AppBar position="static">
                    <Tabs
                        className="tabs"
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        scrollButtons="off"
                    >
                        <Tab icon={<PersonPinIcon />} aria-label="Profile" />
                        <Tab icon={<DirectionsRunIcon />} aria-label="Daily Activities" />
                        <Tab icon={<ExitToAppIcon />} aria-label="Logout" />
                    </Tabs>
                </AppBar>
            </div>
        </div>
    );
}
