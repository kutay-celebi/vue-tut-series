import Home        from "./components/Home";
import User        from "./components/user/User";
import UserProfile from "./components/user/UserProfile";
import NamedRoute  from "./components/NamedRoute";
import Counter     from "./components/Counter";

export const routes = [
    {
        path      : '',
        name      : "home",
        components: {
            default     : Home,
            "namedRoute": NamedRoute
        }
    },
    {
        path     : "/home",
        component: Home
    },
    {
        path     : "/counter",
        component: Counter
    },
    {
        path     : "/user",
        component: User,
        children : [
            {
                path     : ":id",
                component: UserProfile,
                name     : "userProfile",
            },
        ]
    },
    {
        // anything redirected
        path    : "*",
        redirect: "/"
    }
]