import React from "react";
import { HiHome, HiSearch, HiOutlineCollection, HiPlus, HiArrowRight } from "react-icons/hi";
import { Box, Typography, Button } from "@mui/material";

const Left=()=>{
    const iconStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '25px',
        height: '25px',
      };
    return(
        <Box 
            // margin="8px"
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
                <Box display="flex" flexDirection="column" borderRadius="10px" mt="8px" height="81.5%" bgcolor="white">
                    <Box display="flex" height="10.6%">
                        <a href="/library" style={{textDecoration:"none", color:"black"}}>
                            <Box display="flex"  sx={{m:1, gap:1}}>
                                <Box sx={{...iconStyle,p:1}}>
                                    <HiOutlineCollection size="25px"/>
                                </Box>
                                <Typography variant="h6" fontWeight="bold" sx={{m:.5}}>
                                    Your Library
                                </Typography>
                            </Box>
                        </a>
                        <Box display="flex" sx={{m:1,ml:8.45,gap:1}}>
                            <Box sx={{...iconStyle,p:1,borderRadius:"50%",background:"whitesmoke"}}>
                                <HiPlus size="25px"/>
                            </Box>
                            <Box sx={{...iconStyle,p:1,borderRadius:"50%",background:"whitesmoke"}}>
                                <HiArrowRight size="25px"/>
                            </Box>
                        </Box>
                    </Box>
                    <Box display="flex" m={1} gap={1}>
                        <Button sx={{border:"1px solid gray", borderRadius:"20px", color:"black"}}>
                            <Typography variant="h6" fontWeight="bold" fontSize="12px" sx={{m:.5}}>
                                    Playlists
                            </Typography>
                        </Button>
                        <Button sx={{border:"1px solid gray", borderRadius:"20px", color:"black"}}>
                            <Typography variant="h6" fontWeight="bold" fontSize="12px" sx={{m:.5}}>
                                    Artists
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Left