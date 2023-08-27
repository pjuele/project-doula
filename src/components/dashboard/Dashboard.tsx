'use client';
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import ProjectList from '../ProjectList';
import type { ProjectWithDeliverables } from '../../lib/typesWithChildren'

// import * as React from 'react';
// import TreeView from '@mui/lab/TreeView';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import TreeItem, {
//   TreeItemProps,
//   useTreeItem,
//   TreeItemContentProps,
// } from '@mui/lab/TreeItem';
// import clsx from 'clsx';
// import Typography from '@mui/material/Typography';

// const CustomContent = React.forwardRef(function CustomContent(
//   props: TreeItemContentProps,
//   ref,
// ) {
//   const {
//     classes,
//     className,
//     label,
//     nodeId,
//     icon: iconProp,
//     expansionIcon,
//     displayIcon,
//   } = props;

//   const {
//     disabled,
//     expanded,
//     selected,
//     focused,
//     handleExpansion,
//     handleSelection,
//     preventSelection,
//   } = useTreeItem(nodeId);

//   const icon = iconProp || expansionIcon || displayIcon;

//   const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     preventSelection(event);
//   };

//   const handleExpansionClick = (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>,
//   ) => {
//     handleExpansion(event);
//   };

//   const handleSelectionClick = (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>,
//   ) => {
//     handleSelection(event);
//   };

//   return (
//     // eslint-disable-next-line jsx-a11y/no-static-element-interactions
//     <div
//       className={clsx(className, classes.root, {
//         [classes.expanded]: expanded,
//         [classes.selected]: selected,
//         [classes.focused]: focused,
//         [classes.disabled]: disabled,
//       })}
//       onMouseDown={handleMouseDown}
//       ref={ref as React.Ref<HTMLDivElement>}
//     >
//       {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
//       <div onClick={handleExpansionClick} className={classes.iconContainer}>
//         {icon}
//       </div>
//       <Typography
//         onClick={handleSelectionClick}
//         component="div"
//         className={classes.label}
//       >
//         {label}
//       </Typography>
//     </div>
//   );
// });

// function CustomTreeItem(props: TreeItemProps) {
//   return <TreeItem ContentComponent={CustomContent} {...props} />;
// }

// export default function IconExpansionTreeView() {
//   return (
//     <TreeView
//       aria-label="icon expansion"
//       defaultCollapseIcon={<ExpandMoreIcon />}
//       defaultExpandIcon={<ChevronRightIcon />}
//       sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
//     >
//       <CustomTreeItem nodeId="1" label="Applications">
//         <CustomTreeItem nodeId="2" label="Calendar" />
//         <CustomTreeItem nodeId="3" label="Chrome" />
//         <CustomTreeItem nodeId="4" label="Webstorm" />
//       </CustomTreeItem>
//       <CustomTreeItem nodeId="5" label="Documents">
//         <CustomTreeItem nodeId="10" label="OSS" />
//         <CustomTreeItem nodeId="6" label="MUI">
//           <CustomTreeItem nodeId="7" label="src">
//             <CustomTreeItem nodeId="8" label="index.js" />
//             <CustomTreeItem nodeId="9" label="tree-view.js" />
//           </CustomTreeItem>
//         </CustomTreeItem>
//       </CustomTreeItem>
//     </TreeView>
//   );
// }

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://pablojuele.com/">
        Web Design Pablo Juele
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard(
  { projects } : { projects: ProjectWithDeliverables[] }
): React.ReactElement {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <ProjectList projects={projects} />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}