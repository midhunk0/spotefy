import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { HiHeart, HiRewind, HiFastForward, HiPause, HiPlay, HiVolumeUp, HiVolumeOff, HiViewList } from "react-icons/hi";

const BottomBar=()=>{
    return(
        <Box
            margin="0 8px"
            height="65%"
            padding="10px"
            borderRadius="10px"
            sx={{background:"white",}}
            display="flex"
            gap="10px"
        >
            <Box display="flex" width="30%" border="1px solid black">
                <img src={`../../assets/olivia.jpeg`} width="55px" style={{alignItems:"center", borderRadius: "10px" }} alt="olivia"/>
                <Box display="flex" flexDirection="column" >
                    <a href="/happier" style={{color:"black",textDecoration:"none"}}>
                        <Typography fontSize="15px" fontWeight="bold" sx={{alignItems:"center", ml:1.5,"&:hover": {textDecoration:"underline"}}}>
                            Happier 
                        </Typography>
                    </a>
                    <a href="/olivia" style={{color:"black",textDecoration:"none"}}>
                        <Typography fontSize="15px" sx={{alignItems:"center", ml:1.5,"&:hover": {textDecoration:"underline"}}}>
                            Olivia Rodrigo
                        </Typography>
                    </a>
                </Box>
                <Box sx={{ ml: 0.5,display:"flex",alignItems:"center"}}>
                    <IconButton >
                        <HiHeart size="20px" color="black" />
                    </IconButton>
                </Box>
            </Box>

            <Box display="flex" flexDirection="column" width="40%" justifyContent="center" alignItems="center" border="1px solid black">
                <Box display="flex" border="1px solid black"  justifyContent="space-around" gap="10px">
                    <IconButton >
                        <HiRewind color="black"/>
                    </IconButton>
                    <IconButton >
                        <HiPause color="black"/>    
                    </IconButton>
                    <IconButton >
                        <HiFastForward color="black"/>
                    </IconButton>
                </Box>
                <Box>

                </Box>
            </Box>
            <Box border="1px solid black" width="30%">

            </Box>
        </Box>
    )
}

export default BottomBar