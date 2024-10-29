import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Zadatak1.css";
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const nav_sx = {'&.active': {
    bacgroundColor:'primary.dark',
    color:'primary'
}}
const Main = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);

    return <>
    
        <Drawer  open={menuOpen} onClose={() => setMenuOpen(false)}>
            <Box sx={{ width: "250px" ,backgroundColor: 'rgba(240, 190, 130, 0.7)',height: "100%" }} >
                <List >
                    <ListItem>
                        <ListItemButton component={NavLink} to="zadatak1" sx={nav_sx} onClick={() => setMenuOpen(false)}>
                            <ListItemText primary="Zadatak 1 & 2" ></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    
                    
                    <ListItem>
                        <ListItemButton onClick={() => setExpanded(!expanded)} sx={nav_sx}>
                            <ExpandMoreIcon sx={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                            <ListItemText primary="Zadatak 4"></ListItemText>
                        </ListItemButton>
                       
                    </ListItem>
                    <Divider />
                    {expanded && (
                        <>
                            <ListItem>
                                <ListItemButton component={NavLink} to="zadatak4a" sx={nav_sx} onClick={() => setMenuOpen(false)}>
                                    
                                    <LibraryBooksIcon sx={{paddingRight:"10px"}}/>
                                    <ListItemText primary="Subjects" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton component={NavLink} to="zadatak4b" sx={nav_sx} onClick={() => setMenuOpen(false)}>
                                    <PersonIcon sx={{paddingRight:"10px"}}/>
                                    <ListItemText primary="Students" />
                                </ListItemButton>
                            </ListItem>
                        </>
                    )}
                </List>
            </Box>
        </Drawer>
       
        <Stack direction="column">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ backgroundColor: '#ad5e00' }} position='static'>
                    <Toolbar>
                        <IconButton
                            size='large'
                            edge='start'
                            color='inherit'
                            onClick={() => setMenuOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                        <SchoolIcon />
                        <Typography variant='h6' sx={{ flexGrow: 1, marginLeft:"10px" }} component='div'>Elektronski dnevnik: Ivana Gabrić</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            
            <Outlet />
        </Stack>
    </>;
}
export default Main;