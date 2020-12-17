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
    <div className="simpleMenu">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AiOutlineMenu style={{ color: "white", fontSize: "16px" }} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <a
            href="https://drive.google.com/file/d/15Gi42JfvbuRGpAb1eZfsdnVFvr2GeDcX/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            Resume
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#about" style={{ textDecoration: "none", color: "black" }}>
            About
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#skills" style={{ textDecoration: "none", color: "black" }}>
            Skills
          </a>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <a
            href="#projects"
            style={{ textDecoration: "none", color: "black" }}
          >
            Projects
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#extras" style={{ textDecoration: "none", color: "black" }}>
            Extras
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#contact" style={{ textDecoration: "none", color: "black" }}>
            Contact
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}
