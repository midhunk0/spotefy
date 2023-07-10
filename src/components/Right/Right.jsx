import React, { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { HiHeart, HiBadgeCheck, HiDotsHorizontal } from "react-icons/hi";

const Right = () => {
    const [showRightbar, notShowRightbar] =useState(false)
    const rightbarToggle=()=>{
        notShowRightbar(!showRightbar)
    }
    return (
        <Box margin="8px 8px 8px 0" width="100%" padding="8px" borderRadius="10px" display="flex" flexDirection="column" sx={{ background: "white", overflow: "auto" }}>
            <Box>
                <a href="/sour" style={{ color: "black", textDecoration: "none" }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 , mb:1, "&:hover": {textDecoration:"underline"}}}>
                        SOUR
                    </Typography>
                    <img src={`../../assets/olivia.jpeg`} alt="olivia" width="100%" style={{ borderRadius: "10px" }} />
                </a>
            </Box>

            <Box display="flex">
                <Box display="flex" flexDirection="column">
                    <a href="/sour" style={{ color: "black", textDecoration: "none" }}>
                        <Typography fontSize="23px" fontWeight="bolder" sx={{ mt:1, mb: 0.5, "&:hover": {textDecoration:"underline"} }}>
                            Drivers licence
                        </Typography>
                    </a>
                    <a href="/olivia" style={{ textDecoration: "none", color: "black" }}>
                        <Typography fontSize="15px" fontWeight="bold" sx={{"&:hover": {textDecoration:"underline"}}}>
                            Olivia Rodrigo
                        </Typography>
                    </a>
                </Box>
                <Box display="flex" sx={{ ml: 0.5, gap: 1, alignItems: "center" }}>
                    <IconButton>
                        <HiHeart size="20px" color="black" />
                    </IconButton>
                    <IconButton>
                        <HiDotsHorizontal size="20px" color="black" />
                    </IconButton>
                </Box>
            </Box>

            <Box mt="7px" position="relative">
                <a href="/olivia" style={{ textDecoration: "none", color: "black" }}>
                    <Box position="absolute" top="8px" left="8px" display="flex" gap="5px">
                        <HiBadgeCheck size="28px" color="#0c67d3"/>
                        <Typography>Verified Artist</Typography>
                    </Box>
                    <img src={`../../assets/olivia-profile.jpeg`} alt="olivia" width="100%" style={{ borderRadius: "10px" }} />
                    <Box position="absolute" bottom="8px" left="8px" display="flex" flexDirection="column">
                        <Typography>100,000,000 monthly listeners</Typography>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit....
                        </p>
                    </Box>
                </a>
            </Box>

            <Box bgcolor="black"  display="flex" flexDirection="column" borderRadius="10px" margin="8px 0 1px 0">
                <Box display="flex" marginTop="8px" justifyContent="space-between">
                    <Typography color="white" margin="8px" fontSize="16px" >
                        On Tour
                    </Typography>
                    <a href="/show" style={{textDecoration:"none",color:"white"}}>
                        <Typography margin="8px" fontSize="16px" sx={{"&:hover": {textDecoration:"underline"}}}>
                            Show all
                        </Typography>
                    </a>
                </Box>
                <Box mt="15px">
                    <Button disableRipple sx={{ height: "65px",textTransform:"none",fontWeight:"bold", background: "lightgray", color: "black", border: "1px solid black", borderRadius: "10px", width: "94%", m:"0 8px 8px 8px", justifyContent: "left", "&:hover": { background: "gray", color: "white" }, "&:active": { background: "black", transition: "background .7s" }}}>
                        <img src={`../../assets/liked.png`} width="40px" height="40px" style={{ marginLeft: "5px", borderRadius: "10px" }} alt="liked"/>
                        <Typography fontSize="15px" fontWeight="bold" sx={{alignItems:"center", ml:1.5}}>
                            Las Vegas
                        </Typography>
                    </Button>
                    <Button disableRipple sx={{ height: "65px",textTransform:"none",fontWeight:"bold", background: "lightgray", color: "black", border: "1px solid black", borderRadius: "10px", width: "94%", m:"0 8px 8px 8px", justifyContent: "left", "&:hover": { background: "gray", color: "white" }, "&:active": { background: "black", transition: "background .7s" }}}>
                        <img src={`../../assets/liked.png`} width="40px" height="40px" style={{ marginLeft: "5px", borderRadius: "10px" }} alt="liked"/>
                        <Typography fontSize="15px" fontWeight="bold" sx={{alignItems:"center", ml:1.5}}>
                            Amsterdam
                        </Typography>
                    </Button>
                </Box>
            </Box>
            
            <Box bgcolor="black"  display="flex" flexDirection="column" borderRadius="10px" margin="8px 0 1px 0">
                <Box display="flex" marginTop="8px" justifyContent="space-between">
                    <Typography color="white" margin="8px" fontSize="16px" >
                        Next in queue
                    </Typography>
                    <a href="/queue" style={{textDecoration:"none",color:"white"}}>
                        <Typography margin="8px" fontSize="16px" sx={{"&:hover": {textDecoration:"underline"}}}>
                            Open Queue
                        </Typography>
                    </a>
                </Box>
                <Box mt="15px">
                    <Button disableRipple sx={{ height: "65px",textTransform:"none",fontWeight:"bold", background: "lightgray", color: "black", border: "1px solid black", borderRadius: "10px", width: "94%", m:"0 8px 8px 8px", justifyContent: "left", "&:hover": { background: "gray", color: "white" }, "&:active": { background: "black", transition: "background .7s" }}}>
                        <img src={`../../assets/olivia.jpeg`} width="40px" height="40px" style={{ objectFit: 'cover',marginLeft: "5px", borderRadius: "20px" }} alt="olivia"/>
                        <Typography fontSize="15px" fontWeight="bold" sx={{alignItems:"center", ml:1.5}}>
                            Happier
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Right;