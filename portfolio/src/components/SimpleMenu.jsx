import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { AiOutlineMenu } from "react-icons/ai";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='simpleMenu'>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AiOutlineMenu style={{ color: "#1a3066", fontSize: "16px" }} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><a href='#about' style={{textDecoration:'none'}}>About</a></MenuItem>
        <MenuItem onClick={handleClose}><a href='#skills' style={{textDecoration:'none'}}>Skills</a></MenuItem>
       <MenuItem onClick={handleClose}><a href='#resume' style={{textDecoration:'none'}}>Resume</a></MenuItem>
       <MenuItem onClick={handleClose}><a href='#projects' style={{textDecoration:'none'}}>Projects</a></MenuItem>
       <MenuItem onClick={handleClose}><a href='#extras' style={{textDecoration:'none'}}>Extras</a></MenuItem>
       <MenuItem onClick={handleClose}><a href='#contact' style={{textDecoration:'none'}}>Contact</a></MenuItem>



      </Menu>
    </div>
  );
}
