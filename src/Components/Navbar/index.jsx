import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdShoppingBasket } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Drawer, Dropdown } from "antd";
import { Button } from "../../Generics/Button";
import logo from "../../assets/images/logo/rymo-logo-black.png";
import useNavigation from "../../utils/Navbar";
import {
  Container,
  NavItems,
  NavItem,
  Icons,
  Input,
  Wrapper,
  Img,
  Text,
  Madal,
} from "./style";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { navLink } = useNavigation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [opening, setOpening] = useState(false);
  // =====================
  const showDrawer = () => {
    navigate("/");
    setOpening(true);
  };
  // =====================
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  // =====================

  const items = [
    {
      key: "1",
      label: <div onClick={() => navigate("/profile")}>Profile</div>,
    },
    {
      key: "2",
      label: <div onClick={() => navigate("/sign-in")}>Sign In</div>,
    },
    {
      key: "3",
      label: <div onClick={() => navigate("/sign-up")}>Sign Up</div>,
    },
    {
      type: "divider",
    },
    {
      key: "4",
      label: (
        <div style={{ display: "flex", alignItems: "center" }} onClick={logout}>
          <p>
            <FiLogOut /> Log Out
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Container>
        {/* Search */}
        <Madal
          title="Search Product"
          top
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
        >
          <Input type="text" placeholder={t("search")} />
        </Madal>
        {/* Search */}
        <Drawer
          title="Products"
          placement="right"
          onClose={() => setOpening(false)}
          open={opening}
        >
          <hr />
          <p>No Products Yet</p>
          <p> Cart Totals</p>
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
          {/* map qilish joyi */}
          <NavItems>
            {navLink().map(
              ({ id, title, hidden, path }) =>
                !hidden && (
                  <NavItem key={id}>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "var(--orange)" : "var(--grey)",
                        fontWeight: isActive ? `800` : "500",
                      })}
                      className="nav_link"
                      to={path}
                    >
                      <Text>{title}</Text>
                    </NavLink>
                  </NavItem>
                )
            )}
          </NavItems>
          {/* map qilish joyi */}
          {/* icons */}
          <Icons>
            <select
              defaultValue={localStorage.getItem("locale")}
              onChange={(e) => {
                localStorage.setItem("locale", e.target.value);
                i18n.changeLanguage(e.target.value);
              }}
            >
              <option value="en">EN</option>
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
            </select>

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
      <Outlet />
    </>
  );
};

export default Navbar;
