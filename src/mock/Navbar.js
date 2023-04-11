import Home from "../Components/Home"
import Shop from "../Components/Shop"
import Brands from "../Components/Brands"
import NewArrivals from "../Components/NewArrivals"
import Sale from "../Components/Sale"
import Watches from "../Components/Watches"
import Shoes from "../Components/Shoes"
import Footer from "../Components/Footer"
import Wishlist from "../Components/Wishlist"
import Profile from "../Components/Profile"
import SignIn from "../Components/SignIn"
import SignUp from "../Components/SignUp"


export const navLink = [
    { id: 1, title: "Home", path: "/", element: <Home />, hidden: false, isPrivate: false },
    { id: 2, title: "Shop", path: "/shop", element: <Shop />, hidden: false, isPrivate: true },
    { id: 3, title: "Brands", path: "/brands", element: <Brands />, hidden: true, isPrivate: false },
    { id: 4, title: "NewArrivals", path: "/brands", element: <NewArrivals />, hidden: true, isPrivate: false },
    { id: 5, title: "Sale", path: "/sale", element: <Sale />, hidden: true, isPrivate: false },
    { id: 6, title: "Watches", path: "/watches", element: <Watches />, hidden: true, isPrivate: false },
    { id: 7, title: "Shoes", path: "/shoes", element: <Shoes />, hidden: true, isPrivate: false },
    { id: 8, title: "Footer", path: "/footer", element: <Footer />, hidden: true, isPrivate: false },
    { id: 9, title: "Wishlist", path: "/wishlist", element: <Wishlist />, hidden: true, isPrivate: false },
    { id: 10, title: "Profile", path: "/profile", element: <Profile />, hidden: true, isPrivate: true },
    { id: 11, title: "SignIn", path: "/sign-in", element: <SignIn />, hidden: true, isPrivate: false },
    { id: 12, title: "SignUp", path: "/sign-up", element: <SignUp />, hidden: true, isPrivate: false },
]