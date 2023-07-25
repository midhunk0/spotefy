import React, { useState } from 'react';
import { Box,  Button,  ButtonBase, IconButton, InputBase, Link, List, Typography } from '@mui/material';
import { HiArrowLeft, HiArrowRight, HiChevronDown, HiChevronUp, HiCollection, HiHome, HiOutlineCollection, HiPlus, HiSearch } from "react-icons/hi";

const Left=({ toggleLeftWidth, toggleMaxWidth })=>{
    const [left, smallLeft]=useState(true)
    const [max, notMax]=useState(false);
    const [search, showSearch]=useState(true)
    const [drop, setDrop]=useState(false);

    const dropdown=()=>{
        setDrop(!drop);
    }

    const toggleSearch=()=>{
        showSearch(!search)
    }

    const leftToggle = () => {
        smallLeft(!left)
        toggleLeftWidth()
    };

    const maxToggle=()=>{
        notMax(!max)
        toggleMaxWidth()
    }

    const data=[
        'Liked Songs', 'Olivia Rodrigo', 'Hindi', 'Malayalam',
        'English', 'Coldplay', 'Hans Zimmer', 'Tamil',
        'Imagine Dragons', 'Arctic Monkeys', 'Taylor Swift', 'Harry Styles',
    ];

    const HeaderButtons=({link, icon, title})=>{
        return(
            <Link href={link} color="#000" sx={{textDecoration:"none"}}>
                <Box display="flex" margin="8px">
                    <Box width="25px" height="25px" padding="10px">
                        {icon}
                    </Box>
                    <Typography variant="h6" fontWeight="bold" margin="4px" padding="2px">
                        {title}
                    </Typography>
                </Box>
            </Link>
        )
    }

    const SmallHeaderButtons=({link, icon})=>{
        return(
            <Link href={link} color="#000" sx={{textDecoration:"none"}}>
                <Box display="flex" margin="8px" width="25px" padding="10px" height="25px">
                    {icon}
                </Box>
            </Link>
        )
    }
    
    const LibraryButtons=({title})=>{
        return(
            <Button disableRipple style={buttonStyle}>
                <Typography fontSize="14px" fontWeight="bold" sx={{textTransform:"none"}}>
                    {title}
                </Typography>                    
            </Button>
        )
    }

    const Image=({src, alt})=>{
        return(
            <img 
                src={src}
                width="56px" 
                height="56px" 
                style={{ 
                    borderRadius: "10px" 
                }} 
                alt={alt} 
            />
        )
    }
    
    const MaxTitle=({title, width, align})=>{
        return(
            <Typography fontSize="14px" fontWeight="bold" margin="8px" width={width} align={align}>
                {title}
            </Typography>
        )
    }

    const mainBox={
        display:"flex", 
        flexDirection:"column", 
        margin:"8px 0 8px 8px", 
        gap:"8px"
    }

    const homeBox={
        display:"flex", 
        flexDirection:"column", 
        bgcolor:"white", 
        borderRadius:"10px"
    }

    const libraryBox={
        display:"flex", 
        flexDirection:"column", 
        bgcolor:"white", 
        borderRadius:"10px", 
        overflow:"auto"
    }

    const buttonStyle={
        borderRadius:"20px",
        background:"lightgray", 
        color:"black",
        "&:hover":{
            background:"gray", 
            color:"white"
        }, 
        "&:active":{
            background:"black",
            transition:"background 0.7s"
        }
    }

    const list={
        display:"flex",
        flexDirection:"column", 
        position:"sticky", 
        top:"0", 
        zIndex:"1", 
        bgcolor:"white"
    }

    const listButton={
        ...buttonStyle,
        height: "72px", 
        textTransform: "none", 
        fontWeight: "bold",
        borderRadius: "10px", 
        width: "calc(100% - 16px)", 
        margin: "0 8px 8px", 
        justifyContent: "left", 
    }


    return (
        <>
        {left ? (
            <Box sx={mainBox}>
                <Box sx={homeBox}>
                    <HeaderButtons link="home" icon={<HiHome size="25px"/>} title="Home"/>
                    <HeaderButtons link="search" icon={<HiSearch size="25px"/>} title="Search"/>
                </Box>

                <Box sx={libraryBox}>
                    <Box display="flex" margin="8px" justifyContent="space-between">
                        <Box>
                            <ButtonBase disableRipple onClick={leftToggle}>
                                <Box width="25px" height="25px" padding="10px">
                                    <HiCollection size="25px" color="black"/>
                                </Box>
                                <Typography variant='h6' fontWeight="bold" margin="4px" padding="2px">
                                    Your Library
                                </Typography>
                            </ButtonBase>
                        </Box>
                        <Box display="flex" gap="8px" alignItems="center">
                            <IconButton>
                                <HiPlus size="20px" color="black"/>
                            </IconButton>
                            <IconButton onClick={maxToggle}>
                                {max ? <HiArrowLeft size="20px" color="black"/> : <HiArrowRight size="20px" color="black"/>}
                            </IconButton>
                        </Box>
                    </Box>

                    <Box display="flex" justifyContent="space-between" margin="8px">
                        {max ? (
                            <>
                                <Box display="flex" gap="8px">
                                    <LibraryButtons title="Playlists"/>
                                    <LibraryButtons title="Artists"/>
                                </Box>
                                <Box display="flex" gap="8px" ml="200px">
                                    <ButtonBase disableRipple sx={{background:"lightgray", borderRadius:"20px"}}>
                                        {search ? <></> : <InputBase sx={{padding:"0 0 0 15px"}} placeholder="Search"/>}
                                        <IconButton type="button" sx={{p:1, transition: "ease-in-out"}} onClick={toggleSearch}>
                                            <HiSearch size="20px" color="black" />
                                        </IconButton>
                                    </ButtonBase>
                                    <Box display="flex">
                                        <ButtonBase disableRipple onClick={dropdown}>
                                            <Typography fontSize="14px" fontWeight="bold" margin="8px">
                                                Recent
                                            </Typography>
                                            <Box display="flex">
                                                {drop ? <HiChevronUp size="20px" color="black"/> : <HiChevronDown size="20px" color="black"/>}
                                            </Box>
                                        </ButtonBase>
                                    </Box>
                                </Box>
                            </>
                        ) : (
                            <Box display="flex" height="37px" gap="8px"> 
                                <LibraryButtons title="Playlists"/>
                                <LibraryButtons title="Artists"/>
                            </Box>
                        )}
                    </Box>

                    <Box overflow="auto">
                        <List disablePadding>
                            {max ? (
                                <Box sx={list}>
                                    <Box display="flex">
                                        <MaxTitle title="Title" width="40%" align="left"/>
                                        <MaxTitle title="Date Added" width="40%" align="center"/>
                                        <MaxTitle title="Played" width="20%" align="right"/>
                                    </Box>
                                    <hr style={{ color: "gray", width: "calc(100% - 16px)" }}>
                                    </hr>
                                </Box>
                            ) : (
                                <Box sx={list}>
                                    <Box display="flex" margin="8px" justifyContent="space-between">
                                        <ButtonBase disableRipple sx={{background:"lightgray", borderRadius:"20px", margin:"8px"}}>
                                            <IconButton type="button" sx={{p:1, transition: "ease-in-out"}} onClick={toggleSearch}>
                                                <HiSearch size="20px" color="black" />
                                            </IconButton>
                                            {search ? <></> : <InputBase sx={{margin:"0 10px 0 8px"}} placeholder="Search"/>}
                                        </ButtonBase>
                                        <Box display="flex">
                                            <ButtonBase disableRipple onClick={dropdown}>
                                                <Typography fontSize="14px" fontWeight="bold" margin="8px">
                                                    Recent
                                                </Typography>
                                                <Box display="flex">
                                                    {drop ? <HiChevronUp size="20px" color="black"/> : <HiChevronDown size="20px" color="black"/>}
                                                </Box>
                                            </ButtonBase>
                                        </Box>
                                    </Box>
                                    <hr style={{ color: "gray", width: "calc(100% - 16px)", margin:"0 8px 8px 8px"}}>
                                    </hr>
                                </Box>
                            )}
                            {data.map((item, index) => (
                                <Button key={index} disableRipple sx={listButton} >
                                    {index === 1 ? (
                                        <Image src="../../assets/olivia.jpeg" alt="olivia" />
                                    ) : (
                                        <Image src="../../assets/liked.png" alt="liked" />
                                    )}
                                    <Box alignItems="center" marginLeft="8px">
                                        {item}
                                    </Box>
                                </Button>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Box>
        ):(
            <Box sx={mainBox}>
                <Box sx={{...homeBox, alignItems:"center"}}>
                    <SmallHeaderButtons link="home" icon={<HiHome size="25px"/>}/>
                    <SmallHeaderButtons link="search" icon={<HiSearch size="25px"/>}/>
                </Box>

                <Box sx={libraryBox}>
                    <Box display="flex" justifyContent="center">
                        <ButtonBase disableRipple sx={{gap:"1px", margin:"8px"}} onClick={leftToggle}>
                            <Box display="flex" width="25px" height="25px" padding="10px">
                                <HiOutlineCollection size="25px" color="black"/>
                            </Box>
                        </ButtonBase>
                    </Box>

                    <Box overflow="auto">
                        <List disablePadding>
                            {data.map((item, index) => (
                                <Button key={index} disableRipple sx={listButton}>
                                    {index === 1 ? (
                                        <Image src="../../assets/olivia.jpeg" alt="olivia" />
                                    ) : (
                                        <Image src="../../assets/liked.png" alt="liked" />
                                    )}
                                </Button>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Box>
        )}
        </>
    );
};

export default Left;
