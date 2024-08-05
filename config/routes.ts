import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import CarParts from '../pages/CarParts'
import CarStock from '../pages/CarStock'
import Login from '../pages/Login'

interface RouteType {
    path: string
    component: () => JSX.Element
    name: string
}

const routes: RouteType[] = [
    {
        path: "",
        component: Home,
        name: "Home Screen",
    },
    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
    },
    {
        path: "/about",
        component: About,
        name: "About",
    },
    {
        path: "/car-parts",
        component: CarParts,
        name: "Car Parts",
    },
    {
        path: "/car-stock",
        component: CarStock,
        name: "Car Stock",
    },
    {
        path: "/login",
        component: Login,
        name: "Login",
    }
];

export default routes