import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import { green, grey, red } from '@mui/material/colors'
import React from 'react'

export default function Featured() {
    const items = [
        {
            src: "apple.png",
            name: "Red Apple",
            items: "26 Items",
            bg: "#FFCDD2"
        },
        {
            src: "birthday-cake.png",
            name: "Birthday Cake",
            items: "16 Items",
            bg: "#C8E6C9"
        },
        {
            src: "cabbage.png",
            name: "Cabbage",
            items: "22 Items",
            bg: "#FFCDD2"
        },
        {
            src: "coffee.png",
            name: "Coffee",
            items: "24 Items",
            bg: "#C8E6C9"
        },
        {
            src: "green-tea.png",
            name: "Green Tea",
            items: "39 Items",
            bg: "#FFCDD2"
        },
        {
            src: "headphones.png",
            name: "Headphone",
            items: "14 Items",
            bg: "#C8E6C9"
        },
        {
            src: "orange.png",
            name: "Orange",
            items: "10 Items",
            bg: "#C8E6C9"
        },
        {
            src: "pasta.png",
            name: "Pasta",
            items: "09 Items",
            bg: "#FFCDD2"
        },
        {
            src: "pizza.png",
            name: "Pizza",
            items: "52 Items",
            bg: "#C8E6C9"
        },
        {
            src: "strawberry.png",
            name: "Strawberry",
            items: "20 Items",
            bg: "#C8E6C9"
        }
    ]
    return (
        <Box p={"20px 70px"}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="flex-end" gap={2}>
                    <Typography variant='h6' fontWeight="600">Feature Categories</Typography>
                    <Typography variant='body1'>Cake & Milk</Typography>
                    <Typography variant='body1'>Coffee & Teas</Typography>
                    <Typography variant='body1'>Pet Foods</Typography>
                    <Typography variant='body1'>Vagetables</Typography>
                </Box>
                <Box>
                    <IconButton sx={{ bgcolor: grey[300], mr: "10px" }}>
                        <ArrowLeft></ArrowLeft>
                    </IconButton>
                    <IconButton sx={{ bgcolor: grey[300] }}>
                        <ArrowRight></ArrowRight>
                    </IconButton>
                </Box>
            </Box>
            <Box display="grid" gridTemplateColumns='repeat(10, 1fr)' mt={4} gap={2}>
                {items.map((item) => (<Box textAlign="center" sx={{ background: item.bg }} p="30px 0px" borderRadius="10px">
                    <img src={`Image/${item.src}`} alt="" width="60px" />
                    <Typography lineHeight="15px" fontSize="13px" variant='body1' mt="20px" fontWeight="bold">{item.name}</Typography>
                    <Typography variant='subtitle2' fontSize="13px" color="text.secondary" fontWeight="bold">{item.items}</Typography>
                </Box>))}

            </Box>
        </Box>
    )
}