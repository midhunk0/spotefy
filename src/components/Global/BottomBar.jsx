import React, {useState} from "react";
import { Box, IconButton, Link, Typography, Slider } from "@mui/material";
import { 
    HiFastForward, 
    HiHeart, 
    HiOutlineHeart, 
    HiOutlineMicrophone, 
    HiOutlineViewGrid, 
    HiOutlineViewGridAdd, 
    HiPause, 
    HiPlay, 
    HiRewind, 
    HiViewList, 
    HiVolumeOff, 
    HiVolumeUp 
} from "react-icons/hi";

const Bottom=({toggleRight})=>{
    const [liked, notLiked]=useState(false);
    const [play, pause]=useState(true);
    const [right, showRight]=useState(true);
    const [lyrics, showLyrics]=useState(false);
    const [volumeOn, volumeOff]=useState(true);

    const setLiked=()=>{
        notLiked(!liked)
    }

    const togglePlay=()=>{
        pause(!play)
    }

    const rightToggle = () => {
        showRight(!right)
        toggleRight()
    };

    const toggleLyrics=()=>{
        showLyrics(!lyrics)
    }

    const toggleVolume=()=>{
        volumeOff(!volumeOn)
    }

    return(
        <Box 
            display="flex" 
            bgcolor="white" 
            borderRadius="10px" 
            width="100%" 
            margin="0 8px 8px 8px" 
            padding="8px"
        >
            <Box 
                display="flex" 
                width="30%" 
                alignItems="center"
            >
                <img 
                    src={`../../assets/olivia.jpeg`} 
                    alt="olivia" 
                    width="56px" 
                    height="56px" 
                    style={{
                        borderRadius:"10px", 
                        marginLeft:"8px"
                    }}
                />
                <Box 
                    display="flex" 
                    flexDirection="column" 
                    justifyContent="center"
                >
                    <Link 
                        href="/happier" 
                        sx={{
                            textDecoration:"none"
                        }}
                    >
                        <Typography 
                            fontSize="18px" 
                            fontWeight="bold" 
                            color="black" 
                            marginLeft="10px" 
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
                        href="./olivia" 
                        sx={{
                            textDecoration:"none"
                        }}
                    >
                        <Typography 
                            fontSize="15px" 
                            fontWeight="bold" 
                            color="black" 
                            marginLeft="10px" 
                            sx={{
                                "&:hover":{
                                    textDecoration:"underline"
                                }
                            }}
                        >
                            Olivia
                        </Typography>
                    </Link>
                </Box>
                <Box 
                    display="flex" 
                    marginLeft="10px" 
                    alignItems="center"
                >
                    <IconButton 
                        onClick={setLiked}
                    >
                        {liked 
                            ? <HiHeart  
                                color="green"
                            /> 
                            : <HiOutlineHeart 
                                color="black"
                            />
                        }
                    </IconButton>
                </Box>
            </Box>

            <Box 
                display="flex" 
                flexDirection="column" 
                width="40%" 
                alignItems="center"
            >
                <Box 
                    display="flex" 
                    gap="10px" 
                >
                    <IconButton>
                        <HiRewind 
                            color="black"
                        />
                    </IconButton>
                    <IconButton 
                        onClick={togglePlay}
                    >
                        {play 
                            ? <HiPause 
                                color="black"
                            /> 
                            : <HiPlay 
                                color="black"
                                />
                        }
                    </IconButton>
                    <IconButton>
                        <HiFastForward 
                            color="black"
                        />
                    </IconButton>
                </Box>
                <Box 
                    display="flex" 
                >
                    <Slider 
                        size="small" 
                        defaultValue={2} 
                        sx={{
                            width:400,
                            color:"black", 
                            "&:hover":{
                                color:"green"
                            },
                            "& .MuiSlider-thumb":{
                                visibility:"hidden", 
                                boxShadow:"none",
                                ":hover, :after":{
                                    visibility:"visible", 
                                    color:"black"
                                }
                            }
                        }} 
                    />
                </Box>
            </Box>

            <Box 
                display="flex" 
                width="30%" 
                justifyContent="end" 
                alignItems="center"
            >
                <Box 
                    display="flex" 
                    gap="10px"
                >
                    <IconButton 
                        onClick={rightToggle}
                    >
                        {right 
                            ? <HiOutlineViewGrid 
                                color="green"
                            /> 
                            : <HiOutlineViewGridAdd 
                                color="black"
                            />
                        }
                    </IconButton>
                    <IconButton 
                        onClick={toggleLyrics}
                    >
                        <HiOutlineMicrophone 
                            color={lyrics 
                                ? "green" 
                                : "black"}
                            />
                    </IconButton>
                    <IconButton>
                        <HiViewList 
                            color="black"
                        />
                    </IconButton>
                    <IconButton 
                        onClick={toggleVolume}
                    >
                        {volumeOn 
                            ? <HiVolumeUp 
                                color="green"
                            /> 
                            : <HiVolumeOff 
                                color="black"
                            />
                        }
                    </IconButton>
                    <Box 
                        display="flex" 
                        width="150px" 
                        margin="0 23px 0 14px" 
                        alignItems="center"
                    >
                        <Slider    
                            defaultValue={20} 
                            sx={{
                                color:"black", 
                                "&:hover":{
                                    color:"green"
                                }, 
                                "& .MuiSlider-thumb":{
                                    visibility:"hidden", 
                                    boxShadow:"none",
                                    ":hover, :after":{
                                        visibility:"visible", 
                                        color:"black"
                                    }
                                }
                            }} 
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Bottom;