import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {  withRouter } from 'react-router-dom'
import { signout ,isAuth } from '../actions/auth'
import {useHistory} from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));




const NavBar = () => {
  const history = useHistory();
    const classes = useStyles();
    return(
                    <div>
                <AppBar position="static">
            <Toolbar>
                
                <Typography variant="h6" className={classes.title} >
                Simple Page
                </Typography>
                
                {!isAuth() && (
              <React.Fragment>
              <Button color="inherit" href="/signin">Login</Button>
                <Button color="inherit" href="/register">Register</Button> 
              </React.Fragment>
            )}

            {isAuth() && (
              <Button color="inherit" href="/signin"  onClick={() => signout(() => history.push(`/signin`))}>signout</Button>
            )}


               
               {/* <Link to="/logoooo">
                 helooooooo
               </Link> */}
               {/* <Button color="inherit" onClick={event => window.location.href='/logo'} > heloooooooo </Button> */}
            </Toolbar>
            </AppBar>
       
                    </div>
                    
    )
  
    
}
export default withRouter(NavBar);