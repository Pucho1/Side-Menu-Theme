import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FormControlLabel } from '@mui/material';

import '../styles/header.css';

import { MaterialUISwitch } from './MaterialUISwitch';
import { useCustomTheme } from '../context/themeContext';
import { NavLink } from 'react-router-dom';
import { useShowBar } from '../context/sideBarContext';


const Header = () => {

  const { setCurrentTheme } = useCustomTheme();

  const { toggleSidebar } = useShowBar();

  const handleTheme = (event: any) => event.target.checked ? setCurrentTheme('dark') : setCurrentTheme('light');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static" 
        className='app-bar'
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            className='btn-header'
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='title'>
            <NavLink to="/" > Home </NavLink>
          </Typography>
          <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
            label="MUI switch"
            onChange={handleTheme}
            className='label'
            // checked={theme.currentTheme === 'light'}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
