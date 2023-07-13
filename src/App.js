// import React, { useState } from "react"
// import { Box } from "@mui/material"
// import Left from "./components/Left/Left"
// import Middle from "./components/Middle/Middle"
// import Right from "./components/Right/Right"
// import BottomBar from "./components/Global/BottomBar"


// function App() {
//     const [right, setRight]=useState(false)
//     const [left, setLeft]=useState(false);        
//     const toggleRight=()=>{
//         setRight(!right)
//     }
//     const toggleLeft=()=>{
//         setLeft(!left)
//     }
//     return(
//         <Box className="app" display="flex" flexDirection="column" sx={{ background: "black" }}>
//             <Box height="90%" display="flex">
//                 <Box display="flex" width="19.5%">
//                     <Left toggleLeft={toggleLeft}/>
//                 </Box>
//                 <Box display="flex" width={left ? right ? "60.5%" : "40.5%" : right ? "60.5%" : "80.5%" } >
//                     <Middle/>
//                 </Box>
//                 {right && (
//                     <Box display="flex" width="20%">
//                         <Right/>
//                     </Box>
//                 )}
//             </Box>
//             <Box height="10%">
//                 <BottomBar toggleRight={toggleRight}/>
//             </Box>
//         </Box>
//     );
// }

// export default App;




import React, { useState } from 'react';
import { Box, Divider } from '@mui/material';
import Left from './components/Left/Left';
import Middle from './components/Middle/Middle';
import Right from './components/Right/Right';
import Bottom from './components/Global/BottomBar';
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
  content: {
    display: 'flex',
    flex: 1,
    marginTop:-20
  },
  left: {
    // flex: '0 0 auto',
    minWidth: "5%",
    maxWidth: "40%"
  },
  middle: {
    flex: 1,
  },
  right: {
    // flex: '0 0 auto',
    minWidth: "20%",
    maxWidth: "30%"
  },
  adjuster: {
    cursor: 'col-resize',
    width: '5px',
    backgroundColor: 'lightgray',
  },
  bottom: {
    flexShrink: 0,
    marginTop:-20
  },
}));

const App = () => {
  const classes = useStyles();
  const [showRight, setShowRight] = useState(false);
  const [leftWidth, setLeftWidth] = useState('20%');
  const [rightWidth, setRightWidth] = useState('20%');

  const toggleRight = () => {
    setShowRight(!showRight);
  };

  const toggleLeft = () => {
    setLeftWidth((prevWidth) =>
      prevWidth === "5%" ? "20%" : "5%"
    );
  };

  const handleLeftResize = (event) => {
    const newLeftWidth = `${event.clientX}px`;
    setLeftWidth(newLeftWidth);
  };
  

  const handleRightResize = (event) => {
    const newRightWidth = `${window.innerWidth - event.clientX}px`;
    setRightWidth(newRightWidth);
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.content}>
        <Box className={classes.left} style={{ width: leftWidth }}>
          <Left toggleLeftWidth={toggleLeft} />
        </Box>
        <Divider
          className={classes.adjuster}
          onMouseDown={() => {
            document.addEventListener('mousemove', handleLeftResize);
            document.addEventListener('mouseup', () => {
              document.removeEventListener('mousemove', handleLeftResize);
            });
          }}
        />
        <Box className={classes.middle}>
          <Middle />
        </Box>
        {showRight && (
          <>
            <Divider
              className={classes.adjuster}
              onMouseDown={() => {
                document.addEventListener('mousemove', handleRightResize);
                document.addEventListener('mouseup', () => {
                  document.removeEventListener(
                    'mousemove',
                    handleRightResize
                  );
                });
              }}
            />
            <Box className={classes.right} style={{ width: rightWidth }}>
              <Right />
            </Box>
          </>
        )}
      </Box>
      <Box className={classes.bottom}>
        <Bottom toggleRight={toggleRight} />
      </Box>
    </Box>
  );
};

export default App;
