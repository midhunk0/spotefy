import React, { useState } from "react";
import {
  HiHome,
  HiOutlineHome,
  HiSearch,
  HiOutlineCollection,
  HiPlus,
  HiArrowRight,
  HiChevronDown
} from "react-icons/hi";
import { Box, Typography, Button, ButtonBase, List, IconButton } from "@mui/material";

const Left = () => {
  const data = [
    'Liked Songs', 'Olivia Rodrigo', 'Hindi', 'Malayalam',
    'English', 'Coldplay', 'Hans Zimmer', 'Olivia Rodrigo',
    'Hindi', 'Malayalam', 'English', 'Coldplay', 'Hans Zimmer',
  ];

  const [home, setHome] = useState(true);
  const [side, setSide] = useState(false);

  const goToHome = () => {
    setHome(true);
  };

  const toggleSidebar = () => {
    setSide(prevState => !prevState);
  };

  return (
    <Box display="flex" >
      {side ? (
        <Box display="flex" flexDirection="column" margin="8px" gap="8px">
        <Box display="flex" flexDirection="column" borderRadius="10px" bgcolor="white">
        <a href="/home" style={{ textDecoration: "none", color: "black" }} onClick={goToHome}>
          <Box display="flex" sx={{ m: 1, gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '25px', height: '25px', p: 1 }}>
              {home ? <HiHome size="25px" /> : <HiOutlineHome size="25px" />}
            </Box>
            <Typography variant="h6" fontWeight="bold" sx={{ m: 0.5 }}>
              Home
            </Typography>
          </Box>
        </a>
        <a href="/search" style={{ textDecoration: "none", color: "black" }}>
          <Box display="flex" sx={{ m: 1, gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '25px', height: '25px', p: 1 }}>
              <HiSearch size="25px" />
            </Box>
            <Typography variant="h6" fontWeight="bold" sx={{ m: 0.5 }}>
              Search
            </Typography>
          </Box>
        </a>
      </Box>
      <Box display="flex" flexDirection="column" borderRadius="10px" bgcolor="white" sx={{ overflow: "auto" }}>
      <Box display="flex" height="10.6%">
        <Box display="flex" sx={{ m: 1 }}>
          <ButtonBase disableRipple sx={{ width: "157px", gap: 0.5, borderRadius: "20px" }} onClick={toggleSidebar}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '25px', height: '25px', p: 1 }}>
              <HiOutlineCollection size="25px" color="black" />
            </Box>
            <Typography fontWeight="bold" sx={{ m: 1 }}>
              Your Library
            </Typography>
          </ButtonBase>
        </Box>
        <Box display="flex" sx={{ m: 1, ml: 2.7, gap: 1, alignItems: "center" }}>
          <IconButton>
            <HiPlus size="20px" color="black" />
          </IconButton>
          <IconButton>
            <HiArrowRight size="20px" color="black" />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex">
        <Box m="8px" >
          <Button disableRipple sx={{ background: "lightgray", "&:hover": { background: "gray", color: "white" }, "&:active": { background: "black", transition: "background .7s" }, borderRadius: "20px", color: "black" }}>
            <Typography fontWeight="bold" sx={{ textTransform: 'none' }} fontSize="14px">
              Playlists
            </Typography>
          </Button>
          <Button disableRipple sx={{ ml: "8px", background: "lightgray", "&:hover": { background: "gray", color: "white" }, "&:active": { background: "black", transition: "background .7s" }, borderRadius: "20px", color: "black" }}>
            <Typography fontWeight="bold" sx={{ textTransform: 'none' }} fontSize="14px">
              Artists
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box sx={{ height: '85%', overflow: 'auto' }}>
        <List sx={{ padding: 0 }}>
          <Box display="flex" sx={{ m: 1, gap: 16.8 }}>
            <IconButton>
              <HiSearch size="20px" color="black" />
            </IconButton>
            <Box display="flex">
              <ButtonBase disableRipple sx={{ borderRadius: "20px", "&:active": { background: "red" } }}>
                <Typography fontWeight="bold" sx={{ m: 1 }} fontSize="14px">
                  Recents
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '25px', height: '25px' }}>
                  <HiChevronDown size="20px" color="black" />
                </Box>
              </ButtonBase>
            </Box>
          </Box>
          {data.map((item, index) => (
            <Button
              key={index}
              disableRipple
              sx={{
                height: "60px",
                textTransform: "none",
                fontWeight: "bold",
                background: "lightgray",
                color: "black",
                borderRadius: "10px",
                width: "94%",
                m: "0 8px 8px 8px",
                justifyContent: "left",
                "&:hover": { background: "gray", color: "white" },
                "&:active": { background: "black", transition: "background .7s" }
              }}
            >
              {index === 1 ? (
                <img
                  src={`../../assets/olivia.jpeg`}
                  width="60px"
                  height="60px"
                  style={{ objectFit: 'cover',marginLeft:"-8px", borderRadius: "10px" }}
                  alt="olivia"
                />
              ) : (
                <img
                  src={`../../assets/liked.png`}
                  width="60px"
                  style={{marginLeft:"-8px", borderRadius: "10px" }}
                  alt="liked"
                />
              )}
              <Box alignItems="center" ml={1.5}>
                {item}
              </Box>
            </Button>
          ))}
        </List>
      </Box>
    </Box>
    </Box>

      ) : (
        <Box width="20%" display="flex" flexDirection="column" margin="8px" gap="8px">
        <Box display="flex" flexDirection="column" borderRadius="10px"  bgcolor="white">
        <a href="/home" style={{ textDecoration: "none", color: "black" }} onClick={goToHome}>
          <Box display="flex" sx={{ m: 1, gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  p: 1 }}>
              {home ? <HiHome size="25px" /> : <HiOutlineHome size="25px" />}
            </Box>
          </Box>
        </a>
        <a href="/search" style={{ textDecoration: "none", color: "black" }}>
          <Box display="flex" sx={{ m: 1, gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '25px', height: '25px', p: 1 }}>
              <HiSearch size="25px" />
            </Box>
          </Box>
        </a>
      </Box>
      <Box display="flex" flexDirection="column" borderRadius="10px" bgcolor="white" sx={{ overflow: "auto" }}>
      <Box display="flex" height="10.6%">
        <Box display="flex" sx={{ m: 1 }}>
          <ButtonBase disableRipple  onClick={toggleSidebar}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '25px', height: '25px', p: 1 }}>
              <HiOutlineCollection size="25px" color="black" />
            </Box>
          </ButtonBase>
        </Box>
      </Box>
      <Box sx={{ height: '100%',overflow: 'auto', }} >
        <List sx={{ padding: 0 }}>
          {data.map((item, index) => (
            <Button
              key={index}
              disableRipple
              sx={{
                height: "60px",
                borderRadius: "10px",
                m: "0 8px 8px 8px",
              }}
            >
              {index === 1 ? (
                <img
                  src={`../../assets/olivia.jpeg`}
                  width="60px"
                  height="60px"
                  style={{ objectFit: 'cover', marginLeft:"-8px", borderRadius: "10px" }}
                  alt="olivia"
                />
              ) : (
                <img
                  src={`../../assets/liked.png`}
                  width="60px"
                  style={{marginLeft:"-8px",  borderRadius: "10px" }}
                  alt="liked"
                />
              )}
            </Button>
          ))}
        </List>
      </Box>
    </Box>
    </Box>
      )}
      
    </Box>
  );
};

export default Left;
