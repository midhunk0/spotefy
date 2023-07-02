import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { HiHeart, HiDotsHorizontal } from "react-icons/hi";

const Right=()=>{
    return(
        <Box 
            margin="8px"
            width="100%"
            height="94.7%"
            padding="10px"
            borderRadius="10px"
            sx={{background:"white",overflow:"auto"}}    
        >
            <a href="/sour" style={{color:"black", textDecoration:"none"}}>
                <Typography variant="h6" fontWeight="bold" sx={{m:1,mt:2}}>
                    SOUR
                </Typography>
                <img src={`../../assets/olivia.jpeg`} alt="olivia" width="100%" style={{borderRadius:"10px"}}/>
            </a>
            <Box display="flex" >
                <a  href="/sour" style={{color:"black", textDecoration:"none"}}>
                    <Typography variant="h5" fontWeight="bold"sx={{m:1}}>
                        drivers licence
                    </Typography>
                </a>
                <Box display="flex" sx={{  ml:.5, gap: 1, alignItems: "center" }}>
                            <IconButton>
                                <HiHeart size="20px" color="black" />
                            </IconButton>
                            <IconButton>
                                <HiDotsHorizontal size="20px" color="black" />
                            </IconButton>
                        </Box>
            </Box>
            <a href="/olivia">
                <img src={`../../assets/olivia-profile.jpeg`} alt="olivia" width="100%" style={{borderRadius:"10px"}}/>
            </a>
            <Box display="flex" >
                <a  href="/sour" style={{color:"black", textDecoration:"none"}}>
                    <Typography variant="h5" fontWeight="bold"sx={{m:1}}>
                        drivers licence
                    </Typography>
                </a>
                <Box display="flex" sx={{  ml:.5, gap: 1, alignItems: "center" }}>
                    <IconButton>
                        <HiHeart size="20px" color="black" />
                    </IconButton>
                    <IconButton>
                        <HiDotsHorizontal size="20px" color="black" />
                    </IconButton>
                </Box>
            </Box>
            <a href="/olivia">
                <img src={`../../assets/olivia-profile.jpeg`} alt="olivia" width="100%" style={{borderRadius:"10px"}}/>
            </a>
            <Box display="flex" >
                <a  href="/sour" style={{color:"black", textDecoration:"none"}}>
                    <Typography variant="h5" fontWeight="bold"sx={{m:1}}>
                        drivers licence
                    </Typography>
                </a>
                <Box display="flex" sx={{  ml:.5, gap: 1, alignItems: "center" }}>
                    <IconButton>
                        <HiHeart size="20px" color="black" />
                    </IconButton>
                    <IconButton>
                        <HiDotsHorizontal size="20px" color="black" />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}

export default Right