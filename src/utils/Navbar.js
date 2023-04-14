import Home from "../Components/Home/index.jsx"
import Shop from "../Components/Shop/index.jsx"
import Brands from "../Components/Brands/index.jsx"
import NewArrivals from "../Components/NewArrivals/index.jsx"
import Sale from "../Components/Sale/index.jsx"
import Watches from "../Components/Watches/index.jsx"
import Shoes from "../Components/Shoes/index.jsx"
import Footer from "../Components/Footer/index.jsx"
import Wishlist from "../Components/Wishlist/index.jsx"
import Profile from "../Components/Profile/index.jsx"
import SignIn from "../Components/SignIn/index.jsx"
import SignUp from "../Components/SignUp/index.jsx"
import Hero from "../Components/Hero/index.jsx"
import { useTranslation } from "react-i18next"


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
    ]
    return { navLink }
}
export default useNavigation