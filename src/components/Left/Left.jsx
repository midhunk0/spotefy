import React from "react";
import { HiHome, HiSearch, HiOutlineCollection, HiPlus, HiArrowRight, HiChevronDown } from "react-icons/hi";
import { Box, Typography, Button, ButtonBase, List, IconButton } from "@mui/material";

const Left = () => {
    const iconStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '25px',
        height: '25px',
    };

    const data = [
        'Liked Songs', 'Olivia Rodrigo', 'Hindi', 'Malayalam', 
        'English','Coldplay', 'Hans Zimmer'
    ];

    return (
        <Box padding="8px" display="flex" flexDirection="column" gap="8px" height="100%" bgcolor="black">
            <Box height="100%">
                <Box display="flex" flexDirection="column" borderRadius="10px" bgcolor="white">
                    <a href="/home" style={{ textDecoration: "none", color: "black" }}>
                        <Box display="flex" sx={{ m: 1, gap: 1 }}>
                            <Box sx={{ ...iconStyle, p: 1 }}>
                                <HiHome size="25px" />
                            </Box>
                            <Typography variant="h6" fontWeight="bold" sx={{ m: 0.5 }}>
                                Home
                            </Typography>
                        </Box>
                    </a>
                    <a href="/search" style={{ textDecoration: "none", color: "black" }}>
                        <Box display="flex" sx={{ m: 1, gap: 1 }}>
                            <Box sx={{ ...iconStyle, p: 1 }}>
                                <HiSearch size="25px" />
                            </Box>
                            <Typography variant="h6" fontWeight="bold" sx={{ m: 0.5 }}>
                                Search
                            </Typography>
                        </Box>
                    </a>
                </Box>

                <Box display="flex" flexDirection="column" borderRadius="10px" mt="8px" height="79.5%" bgcolor="white">
                    <Box display="flex" height="10.6%">
                        <Box display="flex" sx={{ m: 1 }}>
                            <ButtonBase sx={{ width: "157px", gap: 0.5, borderRadius: "20px" }}>
                                <Box sx={{ ...iconStyle, p: 1 }}>
                                    <HiOutlineCollection size="25px" color="black" />
                                </Box>
                                <Typography fontWeight="bold" sx={{ m: 1 }}>
                                    Your Library
                                </Typography>
                            </ButtonBase>
                        </Box>
                        <Box display="flex" sx={{ m: 1, ml: 2.7, gap: 1, alignItems: "center" }}>
                            <IconButton>
                                <HiPlus size="20px" color="black" />
                            </IconButton>
                            <IconButton>
                                <HiArrowRight size="20px" color="black" />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box display="flex" m={1} gap={1}>
                        <Button disableRipple sx={{ background: "lightgray", "&:hover": { background: "gray", color: "white" }, "&:active": { background: "black", transition: "background .7s" }, borderRadius: "20px", color: "black" }}>
                            <Typography fontWeight="bold" sx={{ textTransform: 'none' }} fontSize="14px">
                                Playlists
                            </Typography>
                        </Button>
                        <Button disableRipple sx={{ background: "lightgray", "&:hover": { background: "gray", color: "white" }, "&:active": { background: "black", transition: "background .7s" }, borderRadius: "20px", color: "black" }}>
                            <Typography fontWeight="bold" sx={{ textTransform: 'none' }} fontSize="14px">
                                Artists
                            </Typography>
                        </Button>
                    </Box>

                    <Box sx={{ height: '81%', overflow: 'auto' }}>
                        <List sx={{ padding: 0 }}>
                            <Box display="flex" sx={{ m: 1, gap: 16.8 }}>
                                <IconButton>
                                    <HiSearch size="20px" color="black" />
                                </IconButton>
                                <Box display="flex">
                                    <ButtonBase sx={{ borderRadius: "20px" }}>
                                        <Typography fontWeight="bold" sx={{ m: 1 }} fontSize="14px">
                                            Recents
                                        </Typography>
                                        <Box sx={{ ...iconStyle }}>
                                            <HiChevronDown size="20px" color="black" />
                                        </Box>
                                    </ButtonBase>
                                </Box>
                            </Box>

                            {data.map((item, index) => (
                                <Button disableRipple sx={{ height: "65px",textTransform:"none",fontWeight:"bold", background: "lightgray", color: "black", border: "1px solid black", borderRadius: "10px", width: "94%", m: 1, justifyContent: "left", "&:hover": { background: "gray", color: "white" }, "&:active": { background: "black", transition: "background .7s" }}}>
                                    {index === 1 && (
                                        <img src={`../../assets/olivia.jpeg`} width="40px" height="40px" style={{ objectFit: 'cover',marginLeft: "5px", borderRadius: "20px" }} alt="olivia"/>
                                    )}
                                    {index !== 1 && (
                                        <img src={`../../assets/liked.png`} width="40px" style={{ marginLeft: "5px", borderRadius: "10px" }} alt="liked" />
                                    ) }
                                    <Box alignItems="center" ml={1.5}>
                                        {item}
                                    </Box>
                                </Button>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Left;