import { AppConfig } from "../../../app-config";
import { createBrowserRouter } from "react-router-dom";
import App from "../../../App";
import Home from "../../pages/Home";

import HowItWorkView from "../../../DefaultLayout/HowItWorkView";
import RentalDetals from "../../../DefaultLayout/RentalDetals";
import WhyChooseUsView from "../../../DefaultLayout/WhyChooseUs";
import Tesitimonial from "../../../DefaultLayout/Tesitimonial";


function useAppRouters() {
    const routerObject = createBrowserRouter([
        {
            path: AppConfig.router.root.path,
            element: <App />,
            children: [
                {
                    path: '',
                    element: <Home />
                },
                {
                    path: AppConfig.router.howItWork.path,
                    element: <HowItWorkView />
                },
                {
                    path: AppConfig.router.rentalDetals.path,
                    element: <RentalDetals />
                },
                {
                    path: AppConfig.router.whyChooseUs.path,
                    element: <WhyChooseUsView />
                },
                {
                    path: AppConfig.router.testimonial.path,
                    element: <Tesitimonial />
                },
            ]
        },

    ])
    return routerObject

}

export default useAppRouters;