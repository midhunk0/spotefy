import React from "react";
import { HiHome, HiSearch, HiOutlineCollection, HiPlus,HiBadgeCheck, HiArrowRight, HiChevronDown } from "react-icons/hi";
import { Box, Typography, Button, ButtonBase,List,ListItem, IconButton } from "@mui/material";

const Left=()=>{
    const iconStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '25px',
        height: '25px',
      };
      const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10','Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15'];

    return(
        <Box 
            padding="8px"
            display="flex"
            flexDirection="column"
            gap="8px"
            height="100%"
            bgcolor="black"
        >
            <Box height="100%">
                <Box display="flex" flexDirection="column" borderRadius="10px" bgcolor="white">
                    <a href="/home" style={{textDecoration:"none", color:"black"}}>
                        <Box display="flex" sx={{m:1,gap:1}}>   
                            <Box sx={{...iconStyle,p:1}}>
                                <HiHome size="25px"/>                 
                            </Box>
                            <Typography variant="h6" fontWeight="bold" sx={{m:.5}}>   
                                Home
                            </Typography>
                        </Box>
                    </a>
                    <a href="/search" style={{textDecoration:"none", color:"black"}}>
                        <Box display="flex"  sx={{m:1,gap:1}}>   
                            <Box sx={{...iconStyle,p:1}}>
                                <HiSearch size="25px"/>                 
                            </Box>
                            <Typography variant="h6" fontWeight="bold"  sx={{m:.5}}>   
                                Search
                            </Typography>
                        </Box>
                    </a>
                </Box>
                <Box display="flex" flexDirection="column" borderRadius="10px" mt="8px" height="79.5%" bgcolor="white">
                    <Box display="flex" height="10.6%">
                        <Box display="flex"  sx={{m:1}}>
                            <ButtonBase sx={{ width:"157px",gap:.5, borderRadius:"20px"}} >
                                <Box sx={{...iconStyle,p:1}}>
                                    <HiOutlineCollection size="25px" color="black"/>
                                </Box>
                                <Typography fontWeight="bold" sx={{m:1}}>
                                            Your Library
                                </Typography>                        
                            </ButtonBase>
                        </Box>
                        <Box display="flex" sx={{m:1,ml:2.7,gap:1,alignItems:"center"}}>
                            <IconButton >
                                <HiPlus size="20px" color="black"/>
                            </IconButton>
                            <IconButton>
                                <HiArrowRight size="20px" color="black"/>
                            </IconButton>
                        </Box>
                    </Box>
                    <Box display="flex" m={1} gap={1}>
                        <Button sx={{background:"whitesmoke",'&:hover': { backgroundColor: 'whitesmoke'}, borderRadius:"20px", color:"black"}}>
                            <Typography  fontWeight="bold" sx={{ textTransform: 'none' }} fontSize="14px">
                                    Playlists
                            </Typography>
                        </Button>
                        <Button sx={{background:"whitesmoke",'&:hover': { backgroundColor: 'whitesmoke' }, borderRadius:"20px", color:"black"}}>
                            <Typography   fontWeight="bold" sx={{ textTransform: 'none' }} fontSize="14px">
                                    Artists
                            </Typography>
                        </Button>
                    </Box>
                    
                    <Box sx={{ height: '81%', overflow: 'auto' }}>
                        <List sx={{ padding: 0 }}>
                            <Box display="flex" sx={{m:1,gap:16.8}}>
                                <IconButton >
                                    <HiSearch size="20px" color="black"/>
                                </IconButton>
                                <Box display="flex" >
                                    <ButtonBase sx={{ borderRadius:"20px"}}>
                                        <Typography fontWeight="bold" sx={{m:1}} fontSize="14px">
                                            Recents
                                        </Typography>
                                        <Box sx={{...iconStyle,}}>
                                            <HiChevronDown size="20px" color="black"/>
                                        </Box>
                                    </ButtonBase>
                                </Box>
                            </Box>
                            {data.map((item, index) => (
                                <ListItem key={index} sx={{ height: '65px',background:"whitesmoke",color:"black",border:"1px solid black", m:1, width:"auto",borderRadius:"10px" }}>
                                    <Box>
                                        <IconButton sx={{ background:"black", color:"white",borderRadius:"10px"}}>
                                            <HiBadgeCheck/>
                                        </IconButton>
                                    </Box>
                                    <Box alignItems="center" ml="13px" p={1.4}>{item}</Box>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Left