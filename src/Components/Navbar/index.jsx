import React, { useState } from "react";
import { Container, NavItems, NavItem, Icons, Input } from "./style";
import logo from "../../assets/images/logo/rymo-logo-black.png";
import { NavLink, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdShoppingBasket } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Modal, Drawer, Space, Dropdown } from "antd";

  const Navbar = () => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [opening, setOpening] = useState(false);
    // ////
    const showDrawer = () => {
      setOpening(true);
    };

    const onClose = () => {
      setOpening(false);
    };
    // ////
    const items = [
      {
        label: <a href="https://www.antgroup.com">Profile</a>,
        key: "0",
      },
      {
        label: <a href="https://www.aliyun.com">Sign In</a>,
        key: "1",
      },
      {
        label: <a href="https://www.aliyun.com">Sign Up</a>,
        key: "2",
      },
      {
        type: "divider",
      },
      {
        label: (
          <a
            style={{ display: "flex", alignItems: "center" }}
            href="https://www.aliyun.com"
          >
            <pre>
              <FiLogOut /> Log Out
            </pre>
          </a>
        ),
        key: "3",
      },
    ];

    return (
      <Container>
        {/* Search */}
        <Modal
          title="Search Product"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
        >
          <Input />
        </Modal>
        {/* Search */}

        {/* Shop */}
        <Drawer
          title="Basic Drawer"
          placement="right"
          onClose={onClose}
          open={opening}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        {/* Shop */}

        <div>
          <img src={logo} alt="logo" onClick={() => navigate("/")} />
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
                    {title}
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
                Home
              </NavLink>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "var(--orange)" : "var(--grey)",
                  fontWeight: isActive ? `800` : "500",
                })}
                className="nav_link"
                to="/"
              >
                Shop
              </NavLink>
            </NavItem>
          </NavItems>
          <Icons>
            <BiSearch onClick={() => setOpen(true)} className="nav_icon" />
            <AiOutlineHeart className="nav_icon" />
            <MdShoppingBasket onClick={showDrawer} className="nav_icon" />
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
              placement="bottom"
            >
              <a onClick={(e) => e.preventDefault()} href>
                <Space>
                  <BsPersonCircle className="nav_icon" />
                </Space>
              </a>
            </Dropdown>
          </Icons>
        </div>
      </Container>
    );
  };

export default Navbar;
