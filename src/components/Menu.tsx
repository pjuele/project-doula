'use client';

import { ReactElement, useState, MouseEvent } from "react";
import { UserButton } from "@clerk/nextjs";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { AppBar, Button, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import Image from "next/image";

const pages = ['Projects', 'About', 'WDPJ']; //['Products', 'Pricing', 'Blog'];
const links = ['/projects', '/about', ''];

export default function Component(): ReactElement {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar >
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', marginRight: '2rem' }}>
            <Link href="/">
              <Image src="/icon.png" width={40} height={40} alt="logo" />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link href={links[index]}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Link href={links[index]} key={index}>
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <UserButton
              afterSignOutUrl="/"
              showName={true}
              appearance={{
                elements: {
                  userButtonAvatarImage: "border-3 border-white rounded-full",
                  userButtonOuterIdentifier: "text-white text-bold text-uppercase text-lg",
                }
              }}
              />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
//         <AppBar position="relative" variant="outlined">
//             <Container maxWidth="lg">
//                 {/* <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}> */}
//                     <Link href="/">
//                         <Image src="/icon.png" width={40} height={40} alt="logo" />
//                         {/* <Typography variant="h6" color="inherit" noWrap className="ms-2 text-bold">
//                             <small>PROJECT DOULA</small>
//                         </Typography> */}
//                         {/* <Typography sx={{ minWidth: 100, color: "white" }}>Project Doula</Typography> */}
//                     </Link>
//                     {/* <Typography sx={{ minWidth: 100, color: "white" }}>Profile</Typography> */}


//                     <UserButton afterSignOutUrl="/"/>
//                     {/* <Tooltip title="Account settings">
//                     <IconButton
//                         onClick={handleClick}
//                         size="small"
//                         sx={{ ml: 2 }}
//                         aria-controls={open ? 'account-menu' : undefined}
//                         aria-haspopup="true"
//                         aria-expanded={open ? 'true' : undefined}
//                     >
//                         <Avatar
//                             alt="Pablo Juele"
//                             src="https://res.cloudinary.com/wdpj/image/upload/c_scale,q_auto,w_350/v1638310449/web-design-pablo-juele/mug/wdpj-mug_yuznc7.png"
//                             sx={{ width: 32, height: 32 }}>M</Avatar>
//                     </IconButton>
//                     </Tooltip> */}


//                 {/* </Box> */}
//                 <Menu
//                     anchorEl={anchorEl}
//                     id="account-menu"
//                     open={open}
//                     onClose={handleClose}
//                     onClick={handleClose}
//                     PaperProps={{
//                     elevation: 0,
//                     sx: {
//                         overflow: 'visible',
//                         filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//                         mt: 1.5,
//                         '& .MuiAvatar-root': {
//                         width: 32,
//                         height: 32,
//                         ml: -0.5,
//                         mr: 1,
//                         },
//                         '&:before': {
//                         content: '""',
//                         display: 'block',
//                         position: 'absolute',
//                         top: 0,
//                         right: 14,
//                         width: 10,
//                         height: 10,
//                         bgcolor: 'background.paper',
//                         transform: 'translateY(-50%) rotate(45deg)',
//                         zIndex: 0,
//                         },
//                     },
//                     }}
//                     transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//                     anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//                 >
//                     <MenuItem onClick={handleClose}>
//                     <Avatar /> Profile
//                     </MenuItem>
//                     <MenuItem onClick={handleClose}>
//                     <Avatar /> My account
//                     </MenuItem>
//                     <Divider />
//                     <MenuItem onClick={handleClose}>
//                     <ListItemIcon>
//                         <PersonAdd fontSize="small" />
//                     </ListItemIcon>
//                     Add another account
//                     </MenuItem>
//                     <MenuItem onClick={handleClose}>
//                     <ListItemIcon>
//                         <Settings fontSize="small" />
//                     </ListItemIcon>
//                     Settings
//                     </MenuItem>
//                     <MenuItem onClick={handleClose}>
//                     <ListItemIcon>
//                         <Logout fontSize="small" />
//                     </ListItemIcon>
//                     Logout
//                     </MenuItem>
//                 </Menu>
//            </Container>
//         </AppBar>
//     )
// }