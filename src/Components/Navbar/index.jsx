import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdShoppingBasket } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Modal, Drawer, Dropdown } from "antd";
import { Button } from "../Generics/Button";
import logo from "../../assets/images/logo/rymo-logo-black.png";
import {
  Container,
  NavItems,
  NavItem,
  Icons,
  Input,
  Wrapper,
  Img,
  Text,
} from "./style";

const Navbar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [opening, setOpening] = useState(false);
  // =====================
  const showDrawer = () => {
    setOpening(true);
  };
  const onClose = () => {
    setOpening(false);
  };
  // =====================
  const items = [
    {
      label: <div onClick={() => navigate("/profile")}>Profile</div>,
      key: "0",
    },
    {
      label: <div onClick={() => navigate("/sign-in")}>Sign In</div>,
      key: "1",
    },
    {
      label: <div onClick={() => navigate("/sign-up")}>Sign Up</div>,
      key: "2",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => localStorage.removeItem("token")}
        >
          <p>
            <FiLogOut /> Log Out
          </p>
        </div>
      ),
      key: "3",
    },
  ];

  return (
    <Container>
      {/* Search */}
      <Modal
        title="Search Product"
        top
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <Input type="text" placeholder="Search..." />
      </Modal>
      {/* Search */}
      <Drawer
        title="Products"
        placement="right"
        onClose={onClose}
        open={opening}
      >
        <hr />
        <p>No Products Yet</p>
        <p> Cart Totals</p>
        <hr />
        <div className="footer">
          <hr />
          <div>
            <p>Total</p>
            <p>$0.00</p>
          </div>
          <Button>Proceed to checkout</Button>
          <Button>Continue shopping</Button>
        </div>
      </Drawer>

      <Wrapper>
        <Img src={logo} onClick={() => navigate("/")} />
        <NavItems>
          <NavItem>
            {/* map qilish joyi */}
            {/* {NavLink.map(
              ({ id, title, hidden, path }) =>
                !hidden && (
                  <NavLink
                    key={id}
                    style={({ isActive }) => ({
                      color: isActive ? "var(--orange)" : "var(--grey)",
                      fontWeight: isActive ? `800` : "500",
                    })}
                    className="nav_link"
                    to={path}
                  >
                    <Text>{title}</Text>
                  </NavLink>
                )
            )} */}
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "var(--orange)" : "var(--grey)",
                fontWeight: isActive ? `800` : "500",
              })}
              className="nav_link"
              to="/"
            >
              <Text> Home</Text>
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "var(--orange)" : "var(--grey)",
                fontWeight: isActive ? `800` : "500",
              })}
              className="nav_link"
              to="/shop"
            >
              <Text> Shop</Text>
            </NavLink>
          </NavItem>
        </NavItems>
        <Icons>
          <BiSearch onClick={() => setOpen(true)} className="nav_icon" />
          <AiOutlineHeart
            className="nav_icon"
            onClick={() => navigate("/wishlist")}
          />
          <MdShoppingBasket onClick={showDrawer} className="nav_icon" />
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            placement="bottom"
          >
            <NavLink onClick={(e) => e.preventDefault()}>
              <BsPersonCircle className="nav_icon" />
            </NavLink>
          </Dropdown>
        </Icons>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
