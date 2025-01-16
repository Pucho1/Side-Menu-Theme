import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';

const SideBar = () => {
  return (
    <div className="cstm-col-3 brde-lft">
			<MenuList>
				<MenuItem>
					<ListItemIcon>
						<DashboardIcon 
							fontSize="medium" 
							color="primary"
							sx={{
								color: 'white'
							}}
						/>
					</ListItemIcon>
					<ListItemText>Dashboard</ListItemText>
					{/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
						⌘X
					</Typography> */}
				</MenuItem>
				<Divider />
				<MenuItem>
					<ListItemIcon>
						<CategoryIcon 
							fontSize="medium" 
							color="primary"
							sx={{
								color: 'white'
							}}
						/>
					</ListItemIcon>
					<ListItemText>Products</ListItemText>
				</MenuItem>
			</MenuList>
		</div>
  );
};

export default SideBar;
