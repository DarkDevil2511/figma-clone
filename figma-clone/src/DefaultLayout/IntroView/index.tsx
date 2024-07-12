import { Outlet } from 'react-router-dom';
import './css/style.css'
import PageNavigationHeader from '../../components/page-header';


function IntroView() {
    return (
        <div>
            <PageNavigationHeader />
           Introduction
           <Outlet />
        </div>
    );
}

export default IntroView;