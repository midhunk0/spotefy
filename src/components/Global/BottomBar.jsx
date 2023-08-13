import React, {useState} from "react";
import { Box, IconButton, Link, Typography, Slider, useTheme } from "@mui/material";
import { HiFastForward, HiHeart, HiOutlineHeart, HiOutlineMicrophone, HiOutlineViewGrid, HiOutlineViewGridAdd, HiPause, HiPlay, HiRewind, HiViewList, HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import { tokens } from "../../theme";

const Bottom=({right, toggleRight, liked, toggleLiked, play, togglePlay})=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const [lyrics, showLyrics]=useState(false);
    const [volumeOn, volumeOff]=useState(true);

    const setLiked=()=>{
        toggleLiked()
    }

    const togglePlayPause=()=>{
        togglePlay()
    }

    const rightToggle = () => {
        toggleRight()
    };

    const toggleLyrics=()=>{
        showLyrics(!lyrics)
    }

    const toggleVolume=()=>{
        volumeOff(!volumeOn)
    }

    const Image=({src, alt})=>{
        return(
            <img 
                src={src} 
                alt={alt} 
                width="56px" 
                height="56px" 
                style={{
                    borderRadius:"10px", 
                    marginLeft:"8px"
                }}
            />
        )
    }

    const ImageLink=({title, link, fontsize})=>{
        return(
            <Link href={link} sx={{textDecoration:"none"}}>
                <Typography fontSize={fontsize} fontWeight="bold" color={colors.primary[100]} marginLeft="10px" sx={{"&:hover":{textDecoration:"underline"}}}>
                    {title}
                </Typography>
            </Link>
        )
    }

    const SongSlider=()=>{
        return(
            <Box display="flex" >
                <Slider
                    size="small" 
                    defaultValue={2} 
                    sx={{
                        width:400,
                        color:colors.primary[100],
                        "&:hover":{
                            color:colors.greenAccent[300]
                        },
                        "& .MuiSlider-thumb":{
                            visibility:"hidden", 
                            boxShadow:"none",
                            ":hover, :after":{
                                visibility:"visible", 
                                color:colors.primary[100]
                            }
                        }
                    }} 
                />
            </Box>
        )
    }

    const VolumeSlider=()=>{
        return(
            <Box display="flex" width="150px" margin="0 23px 0 14px" alignItems="center">
                <Slider    
                    defaultValue={20} 
                    sx={{
                        color:colors.primary[100], 
                        "&:hover":{
                            color:colors.greenAccent[300]
                        }, 
                        "& .MuiSlider-thumb":{
                            visibility:"hidden", 
                            boxShadow:"none",
                            ":hover, :after":{
                                visibility:"visible", 
                                color:colors.primary[100]
                            }
                        }
                    }} 
                />
            </Box>
        )
    }

    const mainBox={
        display:"flex", 
        bgcolor:colors.primary[900], 
        borderRadius:"10px", 
        width:"100%", 
        margin:"0 8px 8px 8px", 
        padding:"8px",
    }

    return(
        <Box sx={mainBox}>
            <Box display="flex" width="30%" alignItems="center">
                <Image src="../../assets/olivia.jpeg" alt="olivia"/>
                <Box display="flex" flexDirection="column" justifyContent="center">
                    <ImageLink title="Drivers licence" link="/happier" fontsize="18px"/>
                    <ImageLink title="Olivia" link="./olivia" fontsize="15px"/>
                </Box>
                <Box display="flex" marginLeft="10px" alignItems="center">
                    <IconButton onClick={setLiked}>
                        {liked ? <HiHeart  color={colors.greenAccent[300]}/> : <HiOutlineHeart color={colors.primary[100]}/>}
                    </IconButton>
                </Box>
            </Box>

            <Box display="flex" flexDirection="column" width="40%" alignItems="center">
                <Box display="flex" gap="10px" >
                    <IconButton>
                        <HiRewind color={colors.primary[100]}/>
                    </IconButton>
                    <IconButton onClick={togglePlayPause}>
                        {play ? <HiPause color={colors.primary[100]}/> : <HiPlay color={colors.primary[100]}/>}
                    </IconButton>
                    <IconButton>
                        <HiFastForward color={colors.primary[100]}/>
                    </IconButton>
                </Box>
                <SongSlider/>
            </Box>

            <Box display="flex" width="30%" justifyContent="end" alignItems="center">
                <Box display="flex" gap="10px">
                    <IconButton onClick={rightToggle}>
                        {right ? <HiOutlineViewGrid color={colors.greenAccent[300]}/> : <HiOutlineViewGridAdd color={colors.primary[100]}/>}
                    </IconButton>
                    <IconButton onClick={toggleLyrics}>
                        <HiOutlineMicrophone color={lyrics ? colors.greenAccent[700] : colors.primary[100]}/>
                    </IconButton>
                    <IconButton>
                        <HiViewList color={colors.primary[100]}/>
                    </IconButton>
                    <IconButton onClick={toggleVolume}>
                        {volumeOn ? <HiVolumeUp color={colors.greenAccent[300]}/> : <HiVolumeOff color={colors.primary[100]}/>}
                    </IconButton>
                    <VolumeSlider/>
                    </Box>
                </Box>
            </Box>
    )
}

export default Bottom;