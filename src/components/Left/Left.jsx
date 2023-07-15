import React, { useState } from 'react';
import { Box,  Button,  ButtonBase, IconButton, Link, List, Typography } from '@mui/material';
import { HiArrowLeft, HiArrowRight, HiChevronDown, HiHome, HiOutlineCollection, HiPlus, HiSearch } from "react-icons/hi";

const Left=({ toggleLeftWidth, toggleMaxWidth })=>{
    const [left, smallLeft]=useState(true)
    const [max, notMax]=useState(false);

    const leftToggle = () => {
        smallLeft(!left)
        toggleLeftWidth()
    };

    const maxToggle=()=>{
        notMax(!max)
        toggleMaxWidth()
    }

    const data=[
        'Liked Songs', 'Olivia Rodrigo', 'Hindi', 'Malayalam',
        'English', 'Coldplay', 'Hans Zimmer', 'Tamil',
        'Imagine Dragons', 'Arctic Monkeys', 'Taylor Swift', 'Harry Styles',
    ];
    return (
        <>
        {left ? (
            <Box display="flex" flexDirection="column" width="100%" margin="8px 0 8px 8px" gap="8px">
                <Box display="flex" flexDirection="column" bgcolor="white" borderRadius="10px">
                    <Link href="/home" color="#000" sx={{textDecoration:"none"}}>
                        <Box display="flex" margin="8px" gap="1px">
                            <Box display="flex" width="25px" height="25px" padding="10px">
                                <HiHome size="25px"/>
                            </Box>
                            <Typography variant="h6" fontWeight="bold" margin="4px" padding="2px" justifyContent="center">
                                Home
                            </Typography>
                        </Box>
                    </Link>
                    <Link href="/search" color="#000" sx={{textDecoration:"none"}}>
                        <Box display="flex" margin="8px" gap="1px">
                            <Box display="flex" width="25px" height="25px" padding="10px">
                                <HiSearch size="25px"/>
                            </Box>
                            <Typography variant="h6" fontWeight="bold" margin="4px" padding="2px" justifyContent="center">
                                Search
                            </Typography>
                        </Box>
                    </Link>
                </Box>

                <Box display="flex" flexDirection="column" bgcolor="white" borderRadius="10px" overflow="auto">
                    <Box display="flex" justifyContent="space-between">
                        <Box display="flex" margin="8px">
                            <ButtonBase disableRipple sx={{gap:"1px", justifyContent:"flex-start"}} onClick={leftToggle}>
                                <Box display="flex" width="25px" height="25px" padding="10px">
                                    <HiOutlineCollection size="25px" color="black"/>
                                </Box>
                                <Typography variant='h6' fontWeight="bold" margin="4px" padding="2px">
                                    Your Library
                                </Typography>
                            </ButtonBase>
                        </Box>
                        <Box display="flex" margin="8px" gap="5px" alignItems="center">
                            <IconButton>
                                <HiPlus size="20px" color="black"/>
                            </IconButton>
                            <IconButton onClick={maxToggle}>
                                {max ? <HiArrowLeft size="20px" color="black"/> : <HiArrowRight size="20px" color="black"/>}
                            </IconButton>
                        </Box>
                    </Box>

                    <Box display="flex" margin="8px">
                        {max ? (
                            <Box display="flex">
                                <Box display="flex" gap="8px">
                                    <Button disableRipple sx={{borderRadius:"20px", background:"lightgray", color:"black", "&:hover":{background:"gray", color:"white"}, "&:active":{background:"black", transition:"background 0.7s"}}}>
                                        <Typography fontSize="14px" fontWeight="bold" sx={{textTransform:"none"}}>
                                            Playlists
                                        </Typography>
                                    </Button>
                                    <Button disableRipple sx={{borderRadius:"20px", background:"lightgray", color:"black", "&:hover":{background:"gray", color:"white"}, "&:active":{background:"black", transition:"background 0.7s"}}}>
                                        <Typography fontSize="14px" fontWeight="bold" sx={{textTransform:"none"}}>
                                            Artists
                                        </Typography>
                                    </Button>
                                </Box>
                                <Box display="flex" gap="8px" marginLeft="109.7%">
                                    <IconButton>
                                        <HiSearch size="20px" color="black"/>
                                    </IconButton>
                                    <Box display="flex">
                                        <ButtonBase disableRipple>
                                            <Typography fontSize="14px" fontWeight="bold" margin="8px">
                                                Recents
                                            </Typography>
                                            <Box display="flex">
                                                <HiChevronDown size="20px" color="black"/>
                                            </Box>
                                        </ButtonBase>
                                    </Box>
                                </Box>
                            </Box>
                        ) : (
                            <Box display="flex" height="37px" gap="8px"> 
                                <Button disableRipple sx={{borderRadius:"20px", background:"lightgray", color:"black", "&:hover":{background:"gray", color:"white"}, "&:active":{background:"black", transition:"background 0.7s"}}}>
                                    <Typography fontSize="14px" fontWeight="bold" sx={{textTransform:"none"}}>
                                        Playlists
                                    </Typography>
                                </Button>
                                <Button disableRipple sx={{borderRadius:"20px", background:"lightgray", color:"black", "&:hover":{background:"gray", color:"white"}, "&:active":{background:"black", transition:"background 0.7s"}}}>
                                    <Typography fontSize="14px" fontWeight="bold" sx={{textTransform:"none"}}>
                                        Artists
                                    </Typography>
                                </Button>
                            </Box>
                        )}
                    </Box>

                    <Box overflow="auto">
                        <List disablePadding>
                            {max ? (
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
                                    <hr style={{ color: "gray", width: "calc(100% - 16px)" }}></hr>
                                </Box>
                            ) : (
                                <Box display="flex" flexDirection="column" position="sticky" top={0} zIndex={1} bgcolor="white">
                                    <Box display="flex" margin="8px" justifyContent="space-between">
                                        <IconButton>
                                            <HiSearch size="20px" color="black" />
                                        </IconButton>
                                        <Box display="flex">
                                            <ButtonBase disableRipple>
                                                <Typography fontSize="14px" fontWeight="bold" margin="8px">
                                                    Recents
                                                </Typography>
                                                <Box display="flex">
                                                    <HiChevronDown size="20px" color="black" />
                                                </Box>
                                            </ButtonBase>
                                        </Box>
                                    </Box>
                                    <hr style={{ color: "gray", width: "calc(100% - 16px)", margin:"0 8px 8px 8px"}}></hr>
                                </Box>
                            )}
                            {data.map((item, index) => (
                                <Button key={index} disableRipple sx={{ height: "72px", textTransform: "none", fontWeight: "bold", background: "lightgray", color: "black", borderRadius: "10px", width: "calc(100% - 16px)", margin: "0 8px 8px", justifyContent: "left", "&:hover": { background: "gray", color: "white" }, "&:active": { background: "black", transition: "background .7s" }, }} >
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
            </Box>
        ):(
            <Box display="flex" flexDirection="column" width="100%" margin="8px 0 8px 8px" gap="8px">
                <Box display="flex" flexDirection="column" bgcolor="white" borderRadius="10px" alignItems="center">
                    <Link href="/home" color="#000" sx={{textDecoration:"none"}}>
                        <Box display="flex" margin="8px" width="25px" padding="10px" height="25px">
                            <HiHome size="25px"/>
                        </Box>
                    </Link>
                    <Link href="/search" color="#000" sx={{textDecoration:"none"}}>
                        <Box display="flex" margin="8px" gap="1px" width="25px" height="25px" padding="10px">
                            <HiSearch size="25px"/>
                        </Box>
                    </Link>
                </Box>

                <Box display="flex" flexDirection="column" bgcolor="white" borderRadius="10px" overflow="auto">
                    <Box display="flex" justifyContent="center">
                        <ButtonBase disableRipple sx={{gap:"1px", margin:"8px"}} onClick={leftToggle}>
                            <Box display="flex" width="25px" height="25px" padding="10px">
                                <HiOutlineCollection size="25px" color="black"/>
                            </Box>
                        </ButtonBase>
                    </Box>

                    <Box overflow="auto">
                        <List disablePadding>
                            {data.map((item, index) => (
                                <Button key={index} disableRipple sx={{height:"72px", textTransform: "none", fontWeight: "bold", background: "lightgray", color: "black", borderRadius: "10px", width: "calc(100% - 16px)", margin: "0 8px 8px", justifyContent: "left", "&:hover": { background: "gray", color: "white" }, "&:active": { background: "black", transition: "background .7s" }}}>
                                    {index === 1 ? (
                                        <img src={`../../assets/olivia.jpeg`} width="56px" height="56px" style={{ objectFit: 'cover', borderRadius: "10px" }} alt="olivia"/>
                                    ) : (
                                        <img src={`../../assets/liked.png`} width="56px" height="56px" style={{ borderRadius: "10px" }} alt="liked" />
                                    )}
                                </Button>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Box>
        )}
        </>
    );
};

export default Left;
