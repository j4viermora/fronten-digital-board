import { logout } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';

export function AppBarDB(props){

    console.log(props)

    const dispatch = useDispatch()

    const handleDrawerOpen = () => {
        setOpen(true);
      };
     const handleLogout = () => {
        localStorage.removeItem('token')
        dispatch( logout() );
      }

    return(
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Cartelera Digital
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={0} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
        onClick={ handleLogout }
        color="inherit">
            <ExitToAppIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
    )
  };