import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, createStyles, createTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { MonetizationOnRounded, LocalShippingRounded, ShoppingCartRounded, CallRounded, Battery80Rounded } from '@material-ui/icons';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { ComputerRounded } from '@material-ui/icons';
import MailIcon from '@material-ui/icons/Mail';
import { purple, green } from '@material-ui/core/colors';
import theme from '../theme';
import { ThemeProvider } from '@material-ui/styles';
import { Box } from '@mui/system';
import { Avatar } from '@material-ui/core';
import { flexbox } from '@mui/system';

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      palette: {
        primary: theme.palette.primary
      }
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

const colorTheme = createTheme({
  palette: {
    primary: {
      main: '#708A8C',
    },
    secondary: {
      main: '#705C5D'
    }
  },
  typography: {
    fontFamily: 'Roboto'
  }
});

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={colorTheme}>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color="primary"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Box justifyContent="flex-start" flexGrow={1}>
            <Typography variant="h4" noWrap>
              Chipchex Marketplace
            </Typography>
          </Box>
          <Box display="flex-end" flexGrow={1}>
            <IconButton aria-label="add an alarm">
              <MonetizationOnRounded />
              <Typography variant="button"> Offers </Typography>
            </IconButton>
            <IconButton aria-label="add an alarm">
              <LocalShippingRounded />
              <Typography variant="button"> Materials </Typography>
            </IconButton>
          </Box>
          <Box display="flex-end" flexGrow={1}>
            <Avatar>H</Avatar>
          </Box>
          <Box display="flex-end" flexGrow={1}>
            <IconButton>
              <ShoppingCartRounded />
            </IconButton>
            <IconButton>
              <CallRounded />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['SCADA', 'Drives', 'Batteries', 'Industrial Hardware'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <ComputerRounded /> : <Battery80Rounded />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Sell my PLC', 'Sell Other Hardware', 'Offers'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          Chipchex Marketplace is a trusted environment to buy and sell secondhand industrial electronics. 
        </Typography>
      </main>
    </div>
    </ThemeProvider>
  );
}
