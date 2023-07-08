import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { HiHeart, HiOutlineMicrophone, HiOutlineHeart, HiRewind, HiFastForward, HiPause, HiPlay, HiOutlineVolumeUp, HiOutlineViewGridAdd, HiOutlineViewGrid, HiOutlineVolumeOff, HiViewList } from "react-icons/hi";

const BottomBar=({toggleRight})=>{
    const [volumeOn, volumeOff]=useState(true)
    const [play, pause]=useState(true)
    const [liked, setLiked]=useState(false)
    const [right, setRight]=useState(false)
    const [lyrics, setLyrics]=useState(false)

    const volumeToggle=()=>{
        volumeOff(!volumeOn)
    }

    const playToggle=()=>{
        pause(!play)
    }

    const likeToggle=()=>{
        setLiked(!liked)
    }

    const rightToggle=()=>{
        setRight(!right)
        toggleRight()
    }

    const lyricsToggle=()=>{
        setLyrics(!lyrics)
    }

    return(
        <Box margin="0 8px" height="65%" padding="10px" borderRadius="10px" sx={{background:"white",}} display="flex" gap="10px">
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
                    <IconButton onClick={likeToggle}>
                        {liked ? <HiHeart size="20px" color="green"/> : <HiOutlineHeart size="20px" color="black"/>}
                    </IconButton>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" width="40%" justifyContent="center" alignItems="center" border="1px solid black">
                <Box display="flex" border="1px solid black"  justifyContent="space-around" gap="10px">
                    {/* shuffle */}
                    <IconButton >
                        <HiRewind color="black"/>
                    </IconButton>
                    <IconButton onClick={playToggle}>
                        {play ? <HiPlay color="black"/> : <HiPause color="black"/>}
                    </IconButton>
                    <IconButton >
                        <HiFastForward color="black"/>
                    </IconButton>
                    {/* repeat */}
                </Box>
                <Box>
                    {/* music player */}
                </Box>
            </Box>
            <Box border="1px solid black" display="flex" width="30%" justifyContent="center" alignItems="center">
                <Box display="flex" border="1px solid black" justifyContent="space-around" gap="10px">
                    <IconButton onClick={rightToggle}>
                        {right ? <HiOutlineViewGrid color="green" /> : <HiOutlineViewGridAdd color="black" />}
                    </IconButton>
                    <IconButton onClick={lyricsToggle}>
                        {lyrics ? <HiOutlineMicrophone color="green"/> : <HiOutlineMicrophone color="black"/>}
                    </IconButton>
                    <IconButton>
                        <HiViewList color="black"/>
                    </IconButton>
                    {/* connect to device */}
                    <IconButton onClick={volumeToggle}>
                        {volumeOn ? <HiOutlineVolumeUp color="black"/> : <HiOutlineVolumeOff color="black"/>}
                    </IconButton>
                    {/* volume controller */}
                </Box>
            </Box>
        </Box>
    )
}

export default BottomBar