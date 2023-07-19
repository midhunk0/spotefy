import React, { useState } from 'react';
import { Box, Button, IconButton, Link, Typography } from '@mui/material';
import { HiBadgeCheck, HiChevronRight, HiDotsHorizontal, HiHeart, HiOutlineHeart, HiMusicNote, HiX } from "react-icons/hi";

const Right=({toggleRightWidth})=>{
    const [isHovered, setIsHovered]=useState(false);
    const [liked, notLiked]=useState(false);

    const setLiked=()=>{
        notLiked(!liked)
    }

    return (
        <Box 
            display="flex" 
            flexDirection="column" 
            bgcolor="white" 
            borderRadius="10px" 
            margin="8px 8px 8px 0" 
            padding="8px" 
            overflow="auto"
        >
            <Box>
                <Box 
                    display="flex" 
                    justifyContent="space-between"
                >
                    <Link 
                        href="/sour" 
                        sx={{
                            textDecoration:"none"
                        }}
                    >
                        <Typography 
                            color="black" 
                            variant="h6" 
                            fontWeight="bold" 
                            marginTop="20px" 
                            marginBottom="10px" 
                            sx={{
                                "&:hover":{
                                    textDecoration:"underline"
                                }
                            }}
                        >
                            SOUR    
                        </Typography>
                    </Link>
                    <IconButton 
                        onClick={toggleRightWidth} 
                        style={{
                            marginTop:"16px",
                            borderRadius:"20px", 
                            height:"40px", 
                            width:"40px"
                            }}
                        >
                        <HiX 
                            size="20px" 
                            color="black"
                        />
                    </IconButton>
                </Box>
                <Link 
                    href="/sour">
                    <img 
                        src={`../../assets/olivia.jpeg`} 
                        alt="olivia" 
                        width="100%" 
                        style={{ 
                            borderRadius: "10px" 
                        }} 
                    />
                </Link>
            </Box>
            <Box 
                display="flex" 
                justifyContent="space-between">
                <Box 
                    display="flex" 
                    flexDirection="column">
                    <Link 
                        href="/sour" 
                        sx={{
                            textDecoration:"none"
                        }}
                    >
                        <Typography 
                            fontSize="23px" 
                            fontWeight="bolder" 
                            color="black" 
                            marginTop="10px" 
                            marginBottom="5px" 
                            sx={{ 
                                "&:hover":{
                                    textDecoration:"underline"
                                }
                            }}
                        > 
                            Drivers licence
                        </Typography>
                    </Link>
                    <Link 
                        href="/olivia" 
                        sx={{
                            textDecoration:"none"
                        }}
                    >
                        <Typography 
                            fontSize="15px" 
                            fontWeight="bold" 
                            color="black" 
                            sx={{
                                "&:hover":{
                                    textDecoration:"underline"
                                }
                            }}
                        >
                            Olivia Rodrigo
                        </Typography>
                    </Link>
                </Box>
                <Box 
                    display="flex" 
                    alignItems="center">
                    <IconButton 
                        onClick={setLiked}
                    >
                        {liked 
                            ? 
                                <HiHeart 
                                    size="20px" 
                                    color="green"
                                />
                            : 
                                <HiOutlineHeart 
                                    size="20px" 
                                    color="black"
                                /> 
                        }
                    </IconButton>
                    <IconButton>
                        <HiDotsHorizontal 
                            size="20px" 
                            color="black"
                        />
                    </IconButton>
                </Box>
            </Box>

            <Box 
                marginTop="8px" 
                position="relative">
                <Link 
                    href="/olivia" 
                    sx={{
                        textDecoration:"none"
                    }}
                >
                    <Box 
                        display="flex" 
                        position="absolute" 
                        top="8px" 
                        left="8px" 
                        gap="5px"
                    >
                        <HiBadgeCheck 
                            size="28px" 
                            color="#0c67d3"
                        />
                        <Typography>
                            Verified Artist
                        </Typography>
                    </Box>
                    <img 
                        src={`../../assets/olivia-profile.jpeg`} 
                        alt="olivia" 
                        width="100%" 
                        height="100%" 
                        style={{ 
                            borderRadius: "10px" 
                        }} 
                    />
                    <Box 
                        display="flex" 
                        flexDirection="column" 
                        position="absolute" 
                        bottom="8px" 
                        left="8px" 
                        color="black"
                    >
                        <Typography>
                            100,000,000 monthly 
                        </Typography>
                        <p 
                            style={{
                                marginBottom:"0"
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita hic quod quos....
                        </p>
                    </Box>
                </Link>
            </Box>

            <Box 
                display="flex" 
                flexDirection="column" 
                border="1px solid gray" 
                borderRadius="10px" 
                margin="8px 0 0 0"
            >
                <Box 
                    display="flex" 
                    justifyContent="space-between"
                >
                    <Typography 
                        fontSize="16px" 
                        fontWeight="bolder" 
                        margin="8px"
                    >
                        On Tour
                    </Typography>
                    <Link 
                        href="/show" 
                        sx={{
                            textDecoration:"none"
                        }}
                    >
                        <Typography 
                            fontSize="16px" 
                            fontWeight="bold" 
                            margin="8px" 
                            color="black" 
                            sx={{
                                "&:hover":{
                                    textDecoration:"underline"
                                }
                            }}
                        >
                            Show all
                        </Typography>
                    </Link>
                </Box>
                <Box>
                    <Button 
                        disableRipple 
                        sx={{ 
                            height: "65px",
                            textTransform:"none",
                            fontWeight:"bold", 
                            borderRadius: "10px", 
                            width: "calc(100% - 16px)", 
                            margin:"0 8px 8px 8px", 
                            justifyContent: "left", 
                            background:"lightgray", 
                            "&:hover": { 
                                background: "gray", 
                                color: "white" 
                            }, 
                            "&:active": { 
                                background: "black", 
                                transition: "background .7s" 
                            }
                        }}
                    >
                        <Box 
                            display="flex" 
                            flexDirection="column" 
                            width="49px" 
                            height="49px" 
                            color="black" 
                            bgcolor="white" 
                            borderRadius="10px"
                            
                        >
                            <Typography>
                                Aug
                            </Typography>
                            <Typography>
                                17
                            </Typography>
                        </Box>
                        <Typography 
                            fontSize="15px" 
                            fontWeight="bold" 
                            color="black" 
                            sx={{
                                alignItems:"center", 
                                marginLeft:"15px"
                            }}
                        >
                            Las Vegas
                        </Typography>
                    </Button>
                    <Button 
                        disableRipple 
                        sx={{ 
                            height: "65px",
                            textTransform:"none",
                            fontWeight:"bold", 
                            borderRadius: "10px", 
                            width: "calc(100% - 16px)", 
                            margin:"0 8px 8px 8px", 
                            justifyContent: "left", 
                            background:"lightgray", 
                            "&:hover": { 
                                background: "gray", 
                                color: "white" 
                            }, 
                            "&:active": { 
                                background: "black", 
                                transition: "background .7s" 
                            }
                        }}
                    >
                        <Box 
                            display="flex" 
                            flexDirection="column" 
                            width="49px" 
                            height="49px" 
                            color="black" 
                            bgcolor="white" 
                            borderRadius="10px"
                        >
                            <Typography>
                                Aug
                            </Typography>
                            <Typography>
                                25
                            </Typography>
                        </Box>
                        <Typography 
                            fontSize="15px" 
                            fontWeight="bold" 
                            color="black" 
                            sx={{
                                alignItems:"center", 
                                marginLeft:"15px"
                            }}
                        >
                            Amsterdam
                        </Typography>
                    </Button>
                </Box>
            </Box>

            <Box 
                display="flex" 
                flexDirection="column" 
                borderRadius="10px" 
                border="1px solid gray"
                margin="8px 0 0 0"
            >
                <Box 
                    display="flex" 
                    justifyContent="space-between"
                >
                    <Typography 
                        fontSize="16px" 
                        fontWeight="bolder" 
                        margin="8px" 
                    >
                        Next in queue
                    </Typography>
                    <Link 
                        href="/queue" 
                        sx={{
                            textDecoration:"none"
                        }}
                    >
                        <Typography 
                            fontSize="16px" 
                            fontWeight="bold" 
                            margin="8px" 
                            color="black" 
                            sx={{
                                "&:hover":{
                                    textDecoration:"underline"
                                }
                            }}
                        >
                            Open queue
                        </Typography>
                    </Link>
                </Box>     
                <Box>
                    <Button 
                        disableRipple 
                        sx={{ 
                            height: '65px', 
                            textTransform: 'none', 
                            fontWeight: 'bold', 
                            width:"calc(100% - 16px)", 
                            borderRadius: '10px',  
                            margin: '8px', 
                            justifyContent: 'left', 
                            background:"lightgray",
                            '&:hover': { 
                                background: 'gray', 
                                color: 'white' 
                            }, 
                            '&:active': { 
                                background: 'black', 
                                transition: 'background .7s' 
                            }
                        }} 
                        onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={() => setIsHovered(false)} 
                    >
                        {!isHovered && (
                            <HiMusicNote 
                                size="20px" 
                                color="black" 
                                style={{ 
                                    marginRight: '8px' 
                                }} 
                            />
                        )}
                        {isHovered && (
                            <HiChevronRight 
                                size="20px" 
                                color="black" 
                                style={{ 
                                    marginRight: '8px' 
                                }} 
                            />
                        )}
                        <img 
                            src="../../assets/olivia.jpeg" 
                            width="49px" 
                            height="49px" 
                            style={{ 
                                objectFit: 'cover', 
                                borderRadius: '10px' 
                            }} 
                            alt="olivia" 
                        />
                        <Typography 
                            fontSize="15px" 
                            fontWeight="bold" 
                            color="black" 
                            sx={{ 
                                alignItems: 'center', 
                                marginLeft: '15px' 
                            }}
                        >
                            Happier
                        </Typography>
                    </Button>   
                </Box>       
            </Box>
        </Box>
    );
};

export default Right;
