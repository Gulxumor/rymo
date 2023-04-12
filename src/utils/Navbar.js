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



export const routes = {
    home: "/",
    shop: "/shop",
    brands: "/brands",
    newArrivals: "newArrivals",
    sale: "/sale",
    watches: "/watches",
    shoes: "/shoes",
    footer: "/footer",
    wishlist: "/wishlist",
    profile: "/profile",
    signIn: "/sign-in",
    signUp: "/sign-up",
}

export const navLink = [
    { id: 1, title: "Home", path: routes.home, element: <Home />, hidden: false, isPrivate: false },
    { id: 2, title: "Shop", path: routes.shop, element: <Shop />, hidden: false, isPrivate: true },
    { id: 9, title: "Wishlist", path: routes.wishlist, element: <Wishlist />, hidden: true, isPrivate: false },
    { id: 10, title: "Profile", path: routes.profile, element: <Profile />, hidden: true, isPrivate: true },
    { id: 11, title: "SignIn", path: routes.signIn, element: <SignIn />, hidden: true, isPrivate: false },
    { id: 12, title: "SignUp", path: routes.signUp, element: <SignUp />, hidden: true, isPrivate: false },
]

export const home = [
    { id: 2, element: <Hero /> },
    { id: 3, element: <Brands /> },
    { id: 4, element: <NewArrivals /> },
    { id: 5, element: <Sale /> },
    { id: 6, element: <Watches /> },
    { id: 7, element: <Shoes /> },
    { id: 8, element: <Footer /> },
]