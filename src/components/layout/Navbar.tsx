import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/material';


export const StyledNavLink = styled("a")(() => ({
    textDecoration: "none",
    color: "inherit",
    fontFamily: 'var(--font-titillium), sans-serif',
    fontSize: "1.25rem",
}));

export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: "flex",
    justifyContent: "space-between", // 🔥 importante
    alignItems: "center",
  },
  [theme.breakpoints.up('md')]: {
    display: "none",
  },
}));

export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        display: "none",
    },
    [theme.breakpoints.up('md')]: {
        display: "flex",
        justifyContent: "space-evenly",
    },
}));

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSmoothScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        handleClose(); // fecha o menu (se estiver aberto no mobile)
      };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="absolute" elevation={10} sx={{ backgroundColor: '#010F22'}}>
                <StyledMobileToolbar>
                    
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        
                        <MenuItem onClick={() => handleSmoothScroll("home")}>
                            <StyledNavLink>Home</StyledNavLink>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("about")}>
                            <StyledNavLink>Sobre</StyledNavLink>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("projects")}>
                            <StyledNavLink>Projetos</StyledNavLink>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("skills")}>
                            <StyledNavLink>Habilidades</StyledNavLink>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("informations")}>
                            <StyledNavLink>Mais Informações</StyledNavLink>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("blog")}>
                            <StyledNavLink>Blog</StyledNavLink>
                        </MenuItem>
                        
                    </Menu>
                </StyledMobileToolbar>
                <StyledDesktopToolbar variant="regular">
                    
                <MenuItem onClick={() => handleSmoothScroll("home")}>
                        <StyledNavLink>Home</StyledNavLink>
                    </MenuItem>
                    <MenuItem onClick={() => handleSmoothScroll("about")}>
                        <StyledNavLink>Sobre</StyledNavLink>
                    </MenuItem>
                    <MenuItem onClick={() => handleSmoothScroll("projects")}>
                        <StyledNavLink>Projetos</StyledNavLink>
                    </MenuItem>
                    <MenuItem onClick={() => handleSmoothScroll("skills")}>
                        <StyledNavLink>Habilidades</StyledNavLink>
                    </MenuItem>
                    <MenuItem onClick={() => handleSmoothScroll("informations")}>
                        <StyledNavLink>Mais Informações</StyledNavLink>
                    </MenuItem>

                    
                </StyledDesktopToolbar>
            </AppBar>
        </Box >
    );
}