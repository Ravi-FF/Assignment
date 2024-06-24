import { ArrowDropDownCircleTwoTone, KeyboardArrowDownTwoTone, Public } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function TopNav() {
    const links = ["About Us", "My Account", "WishList", "OrderTracking"]
    return (
        <>
            <Box sx={{ display: { xs: "block", lg: "flex" }, justifyContent: { xs: "center", lg: "space-between" }, textAlign: "center" }} alignItems="center" p="8px">
                <Box>
                    {links.map((link, i) => (<Typography key={i} mx={1} variant='body2' href='#' sx={{ textDecoration: "none", color: "black" }} component="a">{link}</Typography>))}
                </Box>
                <Typography sx={{ marginY: { xs: "10px", lg: "0" } }} variant='body2'>Get greate devices up to 50% off
                    <Typography variant='body2' mx={1} href='#' sx={{ color: "#45C883", textDecoration: "none" }} component="a">View Details</Typography>
                </Typography>
                <Box display="flex" alignItems="center" sx={{ justifyContent: { xs: "center", lg: "space-between" }, textAlign: "center" }}>
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
