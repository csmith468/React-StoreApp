import { Navigate, createBrowserRouter } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";
import ContactPage from "../../features/contact/ContactPage";
import ErrorPage from "../../features/errors/ErrorPage";
import ServerError from "../../features/errors/ServerError";
import NotFound from "../../features/errors/NotFound";

export const router = createBrowserRouter([
    {
        path: '/', element: <App />, children: [
            {path: '', element: <HomePage />},
            {path: 'catalog', element: <Catalog />},
            {path: 'catalog/:id', element: <ProductDetails />},
            {path: 'about', element: <AboutPage />},
            {path: 'contact', element: <ContactPage />},
            {path: 'error', element: <ErrorPage />},
            {path: 'server-error', element:<ServerError />},
            {path: 'not-found', element:<NotFound />},
            {path: '*', element: <Navigate replace to='/not-found' />}
        ]
    }
])