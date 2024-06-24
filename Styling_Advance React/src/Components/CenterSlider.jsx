import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function CenterSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const theme = useTheme()
    const images = [
        "https://plus.unsplash.com/premium_photo-1664391952734-2759eb94ba60?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1705147296208-dffaf3fe5d7c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://plus.unsplash.com/premium_photo-1661349883108-3aea72f4a83f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
    return (
        <Box p="30px 70px">
            <Slider {...settings}>
                {images.map((img) => (<Box height="500px" position="relative" borderRadius="25px" sx={{ overflow: "hidden" }}>
                    <img src={img} width="100%" height="100%" alt="" style={{ objectFit: "cover" }} />
                    <Box position="absolute" color="white" top="50%" left="60px" sx={{ transform: "translateY(-50%)" }}>
                        <Typography variant="h3" color={blue[900]} fontWeight="bold">
                            Don't miss amazing <br />
                            greocery deals
                        </Typography>
                        <Typography variant='body1' my={3} fontSize="25px" color="text.secondary">
                            Sign up for the daily newsletter
                        </Typography>
                        <Box component="div" bgcolor="white" height="60px" border="1px solid lightGrey" borderRadius="50px" overflow="hidden" display="flex" alignItems="center" >
                            <TextField placeholder='Your Email Address' variant="outlined" sx={{
                                fontSize: "12px",
                                px: "20px",
                                width: "100%",
                                '& .MuiOutlinedInput-root input': {
                                    paddingY: "0",
                                    height: "inherit"
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        border: 'none',
                                        py: "20px",
                                    },
                                    '&:hover fieldset': {
                                        border: 'none',
                                    },
                                    '&.Mui-focused fieldset': {
                                        border: 'none',
                                    },
                                },
                            }} />
                            <Button sx={{
                                height: "inherit",
                                px: "40px",
                                borderRadius: "40px",
                                display: { lg: 'flex' },
                                color: 'inherit',
                                bgcolor: "#45B881",
                                '&:hover': {
                                    bgcolor: "#45C883"
                                }
                            }}
                            >
                                Subscribe
                            </Button>
                        </Box>
                    </Box>
                </Box>))}
            </Slider>
        </Box>
    );
}