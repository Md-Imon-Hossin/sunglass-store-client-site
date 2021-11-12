import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import Logout from '../Logout/Logout';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import Products from '../../Home/Products/Products';
const drawerWidth = 240;

function Dashboard(props) {
  const [control,setControl] = React.useState('addProducts')
  console.log(control)
    const {logOut} = useAuth()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
 const {admin} = useAuth()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
   <Link to={`${url}/pay`}>
   <p >Pay</p>
   </Link>
   <Link to={`${url}/myOrders`}>
   <p>My Orders</p>
   </Link>
   <Link to={`${url}/review`}>
   <p>Review</p>
   </Link>

  { admin && <Box>
    
    <Link to={`${url}/makeAdmin`}>
   <p>Make Admin</p>
   </Link>
   <Link to={`${url}/addProduct`}>
   <p>Add A Product</p>
   </Link>
   <Link to={`${url}/manageAllOrders`}>
   <p>Manage All Orders</p>
   </Link>
   <Link to={`${url}/manageProducts`}>
   <p>Manage Products</p>
   </Link>
   
   </Box>
   
   }

   <Link to={`${url}/logOut`}>
   <p onClick={logOut}>Logout</p>
   </Link>




      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          mt : 8,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2,  display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {/* <Typography paragraph>
         Content Here
        </Typography> */}

<Switch>
        <Route exact path={path}>
        </Route>
        <Route  path={`${path}/pay`}>
       <Pay></Pay>
        </Route>
        <Route path={`${path}/myOrders`}>
       <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/review`}>
       <Review></Review>
        </Route>
        <Route path={`${path}/logOut`}>
       <Logout></Logout>
        </Route>
        <Route path={`${path}/makeAdmin`}>
       <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/addProduct`}>
       <AddProduct></AddProduct>
        </Route> 
         

<Route path={`${path}/manageAllOrders`}>
<ManageAllOrders></ManageAllOrders>
</Route> 

       
{/* <Route  path={`${path}/manageProducts`}>
<ManageProducts ></ManageProducts>

</Route>     */}


           

        <Route  path={`${path}/manageProducts`}>

       <li style={{listStyle : 'none'}} onClick={()=>setControl('products')}>
       <ManageProducts ></ManageProducts>
       <div>
         <h2>Mange All Products</h2>
         {
           control === "products" && <Products></Products>
         }
       </div>
       </li>
       
        </Route>    
        
      
      </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
