import s from '../styles/navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link'
import {useRouter} from 'next/router';
import {FC} from 'react';

const {nav, links, active} = s

const PATH = [
    {linkPath: '/', linkName: 'Home'},
    {linkPath: '/posts', linkName: 'Posts'},
    {linkPath: '/contacts', linkName: 'Contacts'},
]


const Navbar: FC = () => {

    const {pathname} = useRouter()
    return (
        <nav className={nav}>
            <div>
                <Image src={'/vpname_logo.png'} width={580} height={70} alt={'vpname_logo'}/>
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