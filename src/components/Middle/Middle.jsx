import React, { useState } from "react";
import { Box, Button, ButtonBase, IconButton, InputBase, List, Typography } from "@mui/material";
import { HiChevronDown, HiOutlineArrowCircleDown, HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineUserGroup, HiPause,HiPlay, HiSearch } from "react-icons/hi";

const Middle=()=>{
    const [play, pause]=useState(true);
    const [search, showSearch]=useState(true)
    const togglePlay=()=>{
        pause(!play)
    }
    const toggleSearch=()=>{
        showSearch(!search)
    }
    const data=[
        'Liked Songs', 'Olivia Rodrigo', 'Hindi', 'Malayalam',
        'English', 'Coldplay', 'Hans Zimmer', 'Tamil',
        'Imagine Dragons', 'Arctic Monkeys', 'Taylor Swift', 'Harry Styles',
    ];
    return(
        <Box display="flex" flexDirection="column"  bgcolor="white" width="100%" margin="8px 0 8px 0" borderRadius="10px" >
            <Box display="flex" alignItems="center" justifyContent="space-between" margin="10px" bgcolor="white">
                <Box display="flex" gap="8px">
                    <IconButton style={{ background:"lightgray" }}>
                        <HiOutlineChevronLeft size="20px" color="black"/>
                    </IconButton>
                    <IconButton style={{ background:"lightgray" }}>
                        <HiOutlineChevronRight size="20px" color="black"/>
                    </IconButton>
                </Box>
                <Box display="flex" gap="8px">
                    <Button disableRipple sx={{ width:"150px", borderRadius:"20px", background:"lightgray", color:"black", "&:hover":{ background:"gray", color:"white" }, "&:active":{ background:"black", transition:"background 0.7s" }}}>
                        <Typography fontSize="14px" fontWeight="bold" sx={{ textTransform:"none"}} >
                            Explore Premium
                        </Typography>
                    </Button>
                    <IconButton style={{ background:"lightgray"}}>
                        <HiOutlineUserGroup size="20px" color="black"/>
                    </IconButton>
                    <img src={`../../assets/user.png`} style={{ width:"36px", height:"36px", borderRadius:"50%"}} alt=""/>
                </Box>
            </Box>

           
            <Box 
                overflow="auto">
                <List disablePadding sx={{ background:"white"}}>
                    <Box display="flex" bgcolor="blueviolet" margin="10px" >
                        <Box display="flex">
                            <img src={`../../assets/liked.png`} style={{ width:"200px" }} alt=""/>
                        </Box>
                        <Box display="flex" flexDirection="column" margin="50px 20px 0 20px">
                            <Typography fontSize="15px" fontWeight="bold" color="white" >
                                Playlist
                            </Typography>
                            <Typography fontSize="60px" fontWeight="bold" color="white">
                                Liked Songs
                            </Typography>
                            <Box display="flex" alignItems="center"marginBottom="10px">
                                <img src={`../../assets/user.png`} style={{width:"36px", height:"36px", borderRadius:"50%"}}alt=""/>
                                <Typography fontSize="15px" fontWeight="bold" color="white" marginLeft="10px">
                                    Midhun
                                </Typography>
                                <Typography color="white" marginLeft="5px">
                                    |
                                </Typography>
                                <Typography fontSize="15px" color="white" marginLeft="5px">
                                    10 songs
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="column"  bgcolor="white" >
                        <Box display="flex" justifyContent="space-between">
                            <Box display="flex" alignItems="center">
                                <IconButton disableRipple onClick={togglePlay}>
                                    {play ? <HiPause size="80px" color="green"/> : <HiPlay size="80px" color="green"/>}
                                </IconButton>
                                <IconButton>
                                    <HiOutlineArrowCircleDown size="30px" color="black"/>
                                </IconButton>
                            </Box>
                            <Box display="flex" margin="8px" alignItems="center">
                                <ButtonBase disableRipple sx={{background:"lightgray", borderRadius:"20px", margin:"8px"}}>
                                    <IconButton type="button" sx={{p:1, transition: "ease-in-out"}} onClick={toggleSearch}>
                                        <HiSearch size="20px" color="black" />
                                    </IconButton>
                                    {search ? <></> : <InputBase sx={{margin:"0 10px 0 8px"}} placeholder="Search"/>}
                                </ButtonBase>
                                <Box display="flex">
                                    <ButtonBase disableRipple>
                                        <Typography fontSize="14px" fontWeight="bold" margin="8px">
                                            Date added
                                        </Typography>
                                        <Box display="flex">
                                            <HiChevronDown size="20px" color="black" />
                                        </Box>
                                    </ButtonBase>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="column" position="sticky" top={0} zIndex={1} bgcolor="white">
                        <Box display="flex">
                            <Typography fontSize="14px" fontWeight="bold" margin="8px" width="40%" align="left">
                                Title
                            </Typography>
                            <Typography fontSize="14px" fontWeight="bold" margin="8px" width="40%" align="center">
                                Date Added
                            </Typography>
                            <Typography fontSize="14px" fontWeight="bold" margin="8px" width="20%" align="right">
                                Played
                            </Typography>
                        </Box>
                        <hr style={{ color: "gray", width: "calc(100% - 16px)" }}>
                        </hr>
                    </Box>
                    {data.map((item, index) => (
                        <Button key={index} disableRipple sx={{ height: "72px", textTransform: "none", fontWeight: "bold",background: "lightgray", color: "black", borderRadius: "10px", width: "calc(100% - 16px)", margin: "0 8px 8px", justifyContent: "left", "&:hover": { background: "gray", color: "white" }, "&:active": { background: "black", transition: "background .7s" }, }} >
                            {index === 1 ? (
                                <img src={`../../assets/olivia.jpeg`} width="56px" height="56px" style={{ objectFit: 'cover', borderRadius: "10px" }} alt="olivia" />
                            ) : (
                                <img src={`../../assets/liked.png`} width="56px" height="56px" style={{ borderRadius: "10px" }} alt="liked" />
                            )}
                            <Box alignItems="center" marginLeft="8px">
                                {item}
                            </Box>
                        </Button>
                    ))}
                </List>
            </Box>
        </Box>
    )
}

export default Middle