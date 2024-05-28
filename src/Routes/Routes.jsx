import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Review from '../Pages/Review';
import Gallery from '../Pages/Gallery';
const router = createBrowserRouter([
    {
        path:"/",
        element: <Main />,
        children:[
            {
                path:"/",
                element: <Home />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/review",
                element: <Review />
            },
            {
                path:"/gallery",
                element: <Gallery />
            }
        ]
    }
])
const Routes = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;