import './css/style.css'
import clsx from 'clsx';
import { randomId } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import useNavData from './hooks/data';
import AuthNavbarButtons from '../app-auth/auth-navbar-buttons';



function PageNavigationHeader() {
    const navData = useNavData()
    const { pathname } = useLocation()
    return (
        <header className="app-header">
            <div className='box-border h-44 w-174 '>
                Logo
            </div>
            <nav className='inner'>
                {navData.map((nav) => {
                    console.log(nav.path)
                    return (
                        <Link
                            to={'/' + nav.path}
                            key={randomId()}
                            className={clsx(
                                { 'flex gap-1': true },
                                {
                                    'text-[var(--mantine-color-color-filled)]': pathname
                                        .split('/')
                                        .splice(1)
                                        .includes(nav.path),
                                }
                            )}
                        >
                            <span>{nav.icon}</span>
                            <span>{nav.innerText}</span>
                        </Link>
                    )
                })}
            </nav>

            <section className='actions'>
                <AuthNavbarButtons />
                {/* <AuthNavbarButtons /> */}
                {/* Home
                    How it Work
                    Rental Detals
                    Why Choose Us
                    Testmonial
                    Register
                    Login */}
            </section>

        </header>
    )
}

export default PageNavigationHeader;