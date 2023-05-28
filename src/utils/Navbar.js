import Hero from "../components/Pages/Home/Hero"
import Brands from "../components/Pages/Home/Brands"
import NewArrivals from "../components/Pages/Home/NewArrivals"
import Watches from "../components/Pages/Home/Watches"
import Shoes from "../components/Pages/Home/Shoes"
import Sale from "../components/Pages/Home/Sale"
import Home from "../components/Pages/Home"
import Shop from "../components/Pages/Shop"
import Footer from "../components/Footer"
import Wishlist from "../components/Wishlist"
import Profile from "../components/Pages/Profile"
import SignIn from "../components/Pages/Login/SignIn"
import SignUp from "../components/Pages/Login/SignUp"
import { useTranslation } from "react-i18next"
import SingleProduct from "../components/SingleProduct"


export const home = [
    { id: 2, element: <Hero /> },
    { id: 3, element: <Brands /> },
    { id: 4, element: <NewArrivals /> },
    { id: 5, element: <Sale /> },
    { id: 6, element: <Watches /> },
    { id: 7, element: <Shoes /> },
    { id: 8, element: <Footer /> },
]



function useNavigation() {   // hook create qilish, it must start with "use"
    const { t } = useTranslation()

    const navLink = () => [
        { id: 1, title: t("nav_links.nav_links_home"), path: "/", element: <Home />, hidden: false, isPrivate: false },
        { id: 2, title: t("nav_links.nav_links_shop"), path: "/shop", element: <Shop />, hidden: false, isPrivate: true },
        { id: 3, title: t("nav_links.nav_links_wishlist"), path: "/wishlist", element: <Wishlist />, hidden: true, isPrivate: false },
        { id: 4, title: t("nav_links.nav_links_profile"), path: "/profile", element: <Profile />, hidden: true, isPrivate: true },
        { id: 5, title: t("nav_links.nav_links_signIn"), path: "/sign-in", element: <SignIn />, hidden: true, isPrivate: false },
        { id: 6, title: t("nav_links.nav_links_signUp"), path: "/sign-up", element: <SignUp />, hidden: true, isPrivate: false },
        { id: 8, title: t("nav_links.nav_links_shop"), path: "/shop/:id", element: <SingleProduct />, hidden: true, isPrivate: true },


    ]
    return { navLink }
}
export default useNavigation
