import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { NotFoundPage } from "./pages/not-found/NotFoundPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: <NotFoundPage />,
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};
