import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { HiHeart, HiBadgeCheck, HiDotsHorizontal } from "react-icons/hi";

const Right = () => {
    return (
        <Box
            margin="8px"
            width="100%"
            padding="10px"
            borderRadius="10px"
            sx={{ background: "white", overflow: "auto" }}
        >
            <Box>
                <a href="/sour" style={{ color: "black", textDecoration: "none" }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ m: 1, mt: 2 }}>
                        SOUR
                    </Typography>
                    <img src={`../../assets/olivia.jpeg`} alt="olivia" width="100%" style={{ borderRadius: "10px" }} />
                </a>
            </Box>
            <Box display="flex">
                <Box display="flex" flexDirection="column">
                    <a href="/sour" style={{ color: "black", textDecoration: "none" }}>
                        <Typography fontSize="23px" fontWeight="bolder" sx={{ m: 1, mb: 0.5 }}>
                            Drivers licence
                        </Typography>
                    </a>
                    <a href="/olivia" style={{ textDecoration: "none", color: "black" }}>
                        <Typography fontSize="15px" fontWeight="bold" sx={{ ml: 1 }}>
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
            <Box mt="15px" position="relative">
                <a href="/olivia" style={{ textDecoration: "none", color: "black" }}>
                    <Box position="absolute" top="8px" left="8px" display="flex" gap="5px">
                        <HiBadgeCheck size="28px" />
                        <Typography>Verified Artist</Typography>
                    </Box>
                    <img src={`../../assets/olivia-profile.jpeg`} alt="olivia" width="100%" style={{ borderRadius: "10px" }} />
                    <Box position="absolute" bottom="8px" left="8px" display="flex" flexDirection="column">
                        <Typography>100,000,000 monthly listeners</Typography>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </Box>
                </a>
            </Box>
            <Box bgcolor="gray" height="20%" borderRadius="10px">
                <Typography fontSize="20px" style={{ margin: "8px" }}>
                    Next in queue
                </Typography>
            </Box>
        </Box>
    );
};

export default Right;
