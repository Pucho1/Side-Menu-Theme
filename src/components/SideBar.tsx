import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';

import { Link, NavLink } from 'react-router-dom';
import { useShowBar } from '../context/sideBarContext';

import '../styles/sideBar.css'

const SideBar = () => {

	const { isCollapsed } = useShowBar();
	
  return (
    <div className={`brde-lft ${isCollapsed ?  'cstm-col-3' : 'collapsed-col-3'}`}>
			<MenuList>
			<NavLink to="/dasboard">
					{({ isActive }) => (
						<MenuItem className='cst-mt-2'>
							<ListItemIcon className='side-bar-icons_continer'>
								<DashboardIcon
									fontSize="medium" 
									className={`side-bar-icons ${isActive ? 'adjust-color-toActive' : '' }`}
								/>
							</ListItemIcon>
							<ListItemText className='item-left-menu'>Dashboard</ListItemText>
						</MenuItem>
					)}
				</NavLink>
				
				<Divider className='cst-mt-2 sideBar-adjus' />

				<NavLink to="/products">
				{({ isActive }) => (
					<MenuItem>
						<ListItemIcon  className='side-bar-icons_continer'>
							<CategoryIcon
								fontSize="medium" 
								className={`side-bar-icons ${isActive ? 'adjust-color-toActive' : '' }`}
							/>
						</ListItemIcon>
						<ListItemText className='item-left-menu'>Products</ListItemText>
					</MenuItem>
				)}
				</NavLink>
			</MenuList>
		</div>
  );
};

export default SideBar;
