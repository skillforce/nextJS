import s from '../styles/navbar.module.scss';
import Link from "next/link"
import {useRouter} from "next/router";

const {nav, links,active} = s

const PATH = [
    {linkPath: '/', linkName: 'Home'},
    {linkPath: '/posts', linkName: 'Posts'},
    {linkPath: '/contacts', linkName: 'Contacts'},
]


const Navbar = () => {

    const {pathname} = useRouter()
    console.log(pathname)
    return (
        <nav className={nav}>
            <div>
                VPNAME
            </div>
            <div className={links}>
                {PATH.map(({linkPath, linkName}, i) => <Link
                    key={i} href={linkPath}>
                    <a className={linkPath === pathname ? active : null}>{linkName}</a>
                </Link>)}

            </div>
        </nav>
    );
};

export default Navbar;