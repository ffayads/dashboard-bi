import Head from 'next/head';
import Router from 'next/router';
import Cookies from 'universal-cookie';
import { initialState, reducer, ContextOne } from '../context/global';
import axios from 'axios';
import NProgress from 'nprogress'
import "../public/assets/css/nucleo-icons.css";
import "../public/assets/scss/black-dashboard-pro-react.scss?v=1.0.0";
import "../public/assets/demo/demo.css";

axios.defaults.baseURL = process.env.apiUrl;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

Router.events.on('routeChangeStart', () => { NProgress.start(); })
Router.events.on('routeChangeComplete', () => { NProgress.done(); })
Router.events.on('routeChangeError', () => { NProgress.done(); })

axios.interceptors.response.use(response => {
    return response;
}, err => {
    if (Router.route !== "/login" && err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
        cookies.remove("Token")
        Router.replace("/login");
        return err;
    }
});

const cookies = new Cookies();
const MyApp = ({ Component, pageProps }) => {
    let [state, dispatch] = React.useReducer(reducer, initialState);
    let value = { state, dispatch };

    React.useEffect(() => validate());

    let validate = () => {
        document.body.classList.add("white-content");
        let auth = cookies.get("Token");
        axios.defaults.headers.get['Authorization'] = auth;
        axios.defaults.headers.post['Authorization'] = auth;
        if (Router.route !== "/login" && (auth === undefined || auth === "")) {
            Router.replace("/login");
        } else if (Router.route === "/login" && auth !== "" && auth !== undefined) {
            Router.replace("/dashboard");
        }
    }

    React.useEffect(() => {
        if (state.load) dispatch({ type: "stop-load" });
        return () => {
            Router.events.off('routeChangeStart', () => { NProgress.start(); })
            Router.events.off('routeChangeComplete', () => { NProgress.done(); })
            Router.events.off('routeChangeError', () => { NProgress.done(); })
        }
    }, [])

    return (
        <>
            <Head>
                <title>{"Dashboard"}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/img/Logo.png" />
                <link rel="stylesheet" type="text/css" href="/nprogress.css" />
            </Head>
            <ContextOne.Provider value={value}>
                <Component {...pageProps} {...value} />
            </ContextOne.Provider>
        </>
    );

}

export default MyApp;