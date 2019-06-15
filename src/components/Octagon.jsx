import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LineTo from 'react-lineto';
import TacoButton from './TacoButton';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

export default function NestedGrid() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid justify="center" alignItems="center" item xs={4}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
                <Grid justify="center" alignItems="center" item xs={4}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
                <Grid justify="center" alignItems="center" item xs={4}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
            </React.Fragment>
        );
    }

    function RowOne() {
        return (
            <React.Fragment>
                <Grid justify="center" alignItems="center" item xs={3}></Grid>
                <Grid justify="center" alignItems="center" item xs={3}>
                    <TacoButton />
                </Grid>
                <Grid justify="center" alignItems="center" item xs={3}>
                    <TacoButton />
                </Grid>
                <Grid justify="center" alignItems="center" item xs={3}></Grid>
            </React.Fragment>
        );
    }

    function RowTwo() {
        return (
            <React.Fragment>
                <Grid justify="center" alignItems="center" item xs={3}>
                    <TacoButton />
                </Grid>
                <Grid justify="center" alignItems="center" item xs={3}></Grid>
                <Grid justify="center" alignItems="center" item xs={3}></Grid>
                <Grid justify="center" alignItems="center" item xs={3}>
                    <TacoButton />
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className="centerVertical">
            <div className={classes.root}>
                <Grid container spacing={6}>
                    <Grid justify="center" alignItems="center" container item xs={12} spacing={0}>
                        <RowOne />
                    </Grid>
                    <Grid justify="center" alignItems="center" container item xs={12} spacing={0}>
                        <RowTwo />
                    </Grid>
                    <Grid justify="center" alignItems="center" container item xs={12} spacing={0}>
                        <RowTwo />
                    </Grid>
                    <Grid justify="center" alignItems="center" container item xs={12} spacing={0}>
                        <RowOne />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
