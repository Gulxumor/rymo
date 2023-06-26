import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { BiSearch, BiHeart, BiShoppingBag, BiLogOut } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { Drawer, Dropdown } from "antd";
import { Button } from "../../generics/Button";
import logo from "../../assets/images/logo/rymo-logo-black.png";
import useNavigation from "../../utils/navbar";
import { useTranslation } from "react-i18next";
import {
  Container,
  NavItems,
  Icons,
  Input,
  Wrapper,
  Img,
  Text,
  Madal,
  Select,
} from "./style";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { navLink } = useNavigation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [opening, setOpening] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  // =====================
  const showDrawer = () => {
    navigate("/");
    setOpening(true);
  };
  // =====================
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };
  // =====================

  const items = [
    {
      key: "1",
      label: (
        <div onClick={() => navigate("/profile")}>{t("account.profile")}</div>
      ),
    },
    {
      key: "2",
      label: (
        <div onClick={() => navigate("/sign-in")}>{t("account.signin")}</div>
      ),
    },
    {
      key: "3",
      label: (
        <div onClick={() => navigate("/sign-up")}>{t("account.signup")}</div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "4",
      label: (
        <div style={{ display: "flex", alignItems: "center" }} onClick={logout}>
          <p>
            <BiLogOut /> {t("account.log_out")}
          </p>
        </div>
      ),
    },
  ];

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <>
      <Container>
        {/* Search */}

        <Madal
          title={t("modal.title")}
          top
          open={open}
          onOk={handleOk}
          onCancel={() => setOpen(false)}
          confirmLoading={confirmLoading}
          width={1000}
        >
          <Input type="text" placeholder={t("search")} />
        </Madal>
        {/* Search */}

        <Drawer
          title={t("drawer.title")}
          placement="right"
          onClose={() => setOpening(false)}
          open={opening}
        >
          <hr />
          <p>{t("drawer.empty")}</p>
          <p>{t("drawer.card_total")}</p>
          <div className="footer">
            <hr />
            <div>
              <p>{t("drawer.total")}</p>
              <p>$0.00</p>
            </div>
            <Button>{t("drawer.proceed")}</Button>
            <Button>{t("drawer.continue")}</Button>
          </div>
        </Drawer>

        <Wrapper>
          <a
            href="https://github.com/Gulxumor/rymo"
            target={"_blank"}
            rel="noreferrer"
          >
            <Img src={logo} />
          </a>
          {/* map qilish joyi */}
          <NavItems>
            {navLink().map(
              ({ id, title, hidden, path }) =>
                !hidden && (
                  <NavItems.NavItem key={id}>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "var(--orange)" : "var(--grey)",
                        // fontWeight: isActive ? `800` : "500",
                      })}
                      className="nav_link"
                      to={path}
                    >
                      <Text>{title}</Text>
                    </NavLink>
                  </NavItems.NavItem>
                )
            )}
          </NavItems>
          {/* map qilish joyi */}
          {/* icons */}
          <Icons>
            <Select
              defaultValue={localStorage.getItem("lang")}
              onChange={(e) => {
                localStorage.setItem("lang", e.target.value);
                i18n.changeLanguage(e.target.value);
              }}
            >
              <option value="en">EN</option>
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
            </Select>

            <BiSearch onClick={() => setOpen(true)} className="nav_icon" />
            <BiHeart
              className="nav_icon"
              onClick={() => navigate("/wishlist")}
            />
            <BiShoppingBag onClick={showDrawer} className="nav_icon" />
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
