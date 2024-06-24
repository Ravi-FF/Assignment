import React from 'react'
import { CategoryOutlined, Headphones, Home, MenuOutlined, KeyboardArrowDownTwoTone, Public, Search, Mail, MailOutline, CompareArrowsOutlined, FavoriteBorderOutlined, ShoppingBagOutlined, Person2Outlined } from '@mui/icons-material';
import { Box, Button, AppBar, Container, IconButton, Menu, MenuItem, Toolbar, Typography, TextField, Badge } from '@mui/material';
import { grey } from '@mui/material/colors';


const pages = ['Hot Deals', 'Home', 'Blog', 'About', 'Shop', 'Vendors', 'Mega Menu', "Pages", "Contact"];


export default function NavBars() {
    return (
        <div>
            <TopNav></TopNav>
            <CenterNav></CenterNav>
            <ResponsiveAppBar></ResponsiveAppBar>
        </div>
    )
}

function TopNav() {
    const links = ["About Us", "My Account", "WishList", "OrderTracking"]
    return (
        <>
            <Box sx={{ display: { xs: "block", lg: "flex" }, justifyContent: { xs: "center", lg: "space-between" }, textAlign: "center" }} padding="10px 70px" alignItems="center">
                <Box>
                    {links.map((link, i) => (<Typography key={i} mx={1} variant='body2' href='#' sx={{ textDecoration: "none", color: "black" }} component="a">{link}</Typography>))}
                </Box>
                <Typography sx={{ marginY: { xs: "10px", lg: "0" } }} variant='body2'>Get greate devices up to 50% off
                    <Typography variant='body2' mx={1} href='#' sx={{ color: "#45C883", textDecoration: "none" }} component="a">View Details</Typography>
                </Typography>
                <Box display="flex" alignItems="center" gap={2} sx={{ justifyContent: { xs: "center", lg: "space-between" }, textAlign: "center" }}>
                    <Typography variant='body2'>Need call? Help us -
                        <Typography variant='body2' mx={1} href='#' sx={{ textDecoration: "none", color: "#45C883" }} component="a">1800-12</Typography>
                    </Typography>
                    <Button variant='outlined' sx={{
                        fontSize: "13px",
                        py: "0",
                        color: "black",
                        '& .MuiSvgIcon-root': {
                            fontSize: "15px",
                        },
                    }} startIcon={<Public sx={{ fontSize: "5px" }}></Public>}>English</Button>
                    <Button variant='outlined' sx={{
                        fontSize: "13px",
                        py: "0",
                        color: "black",
                        '& .MuiSvgIcon-root': {
                            fontSize: "15px",
                        },
                    }} endIcon={<KeyboardArrowDownTwoTone sx={{ fontSize: "5px" }}></KeyboardArrowDownTwoTone>}>USD</Button>
                </Box>
            </Box >
        </>
    )
}

function CenterNav() {
    return (
        <Box sx={{ display: { xs: "block", lg: "flex" }, justifyContent: { xs: "center", lg: "space-between" }, alignItems: "center", textAlign: "center", padding: "20px 70px", border: "1px solid lightgrey", borderLeft: "none", borderRight: "none" }} >
            <Typography component="a" href='#' >
                <img src="https://img.freepik.com/free-photo/pencil-icon-left-side-white-background_187299-40188.jpg?t=st=1719135053~exp=1719138653~hmac=b31c30100774d3f361b5aa2a05a0e13985e579e70d0a11748dc99c671cde2b5b&w=740" alt="" width={60} />
            </Typography>
            <Box component="div" sx={{ marginBottom: { xs: "20px", lg: "0" }, justifyContent: { xs: "center", lg: "space-between" } }} height="43px" paddingRight={1} border="1px solid lightGrey" borderRadius="3px" overflow="hidden" display="flex" alignItems="center" >
                <Button endIcon={<KeyboardArrowDownTwoTone></KeyboardArrowDownTwoTone>} sx={{ height: "inherit", fontSize: "12px", fontWeight: "600", bgcolor: grey[200], color: "black" }}>All categories</Button>
                <TextField placeholder='Search' variant="outlined" sx={{
                    width: { xs: "70%", lg: "350px" },
                    fontSize: "12px",
                    '& .MuiOutlinedInput-root input': {
                        paddingY: "0",
                        height: "inherit"
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            border: 'none',
                            py: "0",
                        },
                        '&:hover fieldset': {
                            border: 'none',
                        },
                        '&.Mui-focused fieldset': {
                            border: 'none',
                        },
                    },
                }} />
                <Search></Search>
            </Box>
            <Box display="flex" alignItems="self-end" justifyContent="center" gap="15px">
                <Button sx={{ fontSize: "12px", color: "black" }} size='small' variant='outlined' endIcon={<KeyboardArrowDownTwoTone></KeyboardArrowDownTwoTone>}>Your Location</Button>
                <Box display="flex" gap={1}>
                    <Badge badgeContent={4} sx={{
                        '& .MuiBadge-badge': {
                            bgcolor: "#45C883",
                            color: "white"
                        }
                    }}>
                        <CompareArrowsOutlined color="black" />
                    </Badge>
                    <Typography alignSelf="flex-end" variant='body2'>Compare</Typography>
                </Box>
                <Box display="flex" gap={1}>
                    <Badge badgeContent={4} sx={{
                        '& .MuiBadge-badge': {
                            bgcolor: "#45C883",
                            color: "white"
                        }
                    }}>
                        <FavoriteBorderOutlined color="black" />
                    </Badge>
                    <Typography alignSelf="flex-end" variant='body2'>Wish List</Typography>
                </Box>
                <Box display="flex" gap={1}>
                    <Badge badgeContent={4} sx={{
                        '& .MuiBadge-badge': {
                            bgcolor: "#45C883",
                            color: "white"
                        }
                    }}>
                        <ShoppingBagOutlined color="black" />
                    </Badge>
                    <Typography alignSelf="flex-end" variant='body2'>Card</Typography>
                </Box>
                <Box display="flex" gap={1}>
                    <Person2Outlined color="black" />
                    <Typography alignSelf="flex-end" variant='body2'>Account</Typography>
                </Box>
            </Box>

        </ Box >
    )
}

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ m: "0", bgcolor: "transparent", boxShadow: "none", px: "50px", borderBottom: "1px solid lightGrey" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ m: "0", justifyContent: "space-between" }}>
                    <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            {<MenuOutlined></MenuOutlined>}
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
                                display: { xs: 'block', lg: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Button sx={{
                        mr: 2,
                        display: { lg: 'flex' },
                        fontWeight: 500,
                        color: 'inherit',
                        bgcolor: "#45B881",
                        '&:hover': {
                            bgcolor: "#45C883"

                        }
                    }}
                        startIcon={<CategoryOutlined></CategoryOutlined>}
                    >
                        Browser All Categories
                    </Button>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
                        {pages.map((page, index) => (
                            <Typography
                                variant='h6'
                                fontSize="15px"
                                component="a"
                                href='#'
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ m: 2, color: 'black', display: "inline-flex", textDecoration: "none" }}
                            >
                                {index === 0 && <Home sx={{ mr: 1 }} />}
                                {page}
                            </Typography>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Box display="flex" justifyContent="center" gap="10px" alignItems="center" >
                            <Headphones sx={{ fontSize: "50px", color: "black" }}></Headphones>
                            <Box>
                                <Typography variant='h6' lineHeight="25px" fontWeight="bold" color="#45B881">
                                    1999-180
                                </Typography>
                                <Typography variant='subtitle2' fontWeight="bold" color="black">
                                    24 x 7 support center
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
