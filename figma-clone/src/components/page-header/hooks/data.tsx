import { AppConfig } from "../../../app-config";

import Home from "../../pages/Home";

function useNavData() {
    return [
        {
            path: AppConfig.router.root.path,
            icon: "",
            innerText: 'Home'
        },
        {
            path: AppConfig.router.howItWork.path,
            innerText: 'HowItWorkView'
        },
        {
            path: AppConfig.router.rentalDetals.path,
            innerText: 'RentalDetals'
        },
        {
            path: AppConfig.router.whyChooseUs.path,
            innerText: 'WhyChooseUsView'
        },
        {
            path: AppConfig.router.testimonial.path,
            innerText: 'Tesitimonial'
        },
    ]

}

export default useNavData;