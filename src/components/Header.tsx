import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FormControlLabel } from '@mui/material';

import '../styles/header.css'

import { MaterialUISwitch } from './MaterialUISwitch';
import { useCustomTheme } from '../context/themeContext';


const Header = () => {

  const theme = useCustomTheme();

  const handleTheme = (event: any) => event.target.checked ? theme.setCurrentTheme('dark') : theme.setCurrentTheme('light');

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
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='title'>
            News
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
