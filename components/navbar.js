import style from './navbar.module.scss'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {Link} from 'react-scroll'

function Navbar() {

    const menu = [
        {
            path: 'home',
            menuName: 'Home'
        }, {
            path: 'education',
            menuName: 'Education'
        }, {
            path: 'skills',
            menuName: 'Skills'
        }
        , {
            path: 'experience',
            menuName: 'Experience'
        }
    ];

    const router = useRouter();
    const [pathName,setPathname] = useState(false)

    const [toggle,
        setToggle] = useState(true);


    const handleToggle = () => {
        setToggle(!toggle);
        if (search === false) {
            setSearch(true)
        }
    }


    const handleSetActive = ()=> {
        console.log('ok')
    }

    const handleSetInactive = ()=> {
        console.log('not active')
    }


    return (

        <div className={style.wrapper}>
            <div className={style.logoWrapper}>
                بسرعة
            </div>

            <div
                className={toggle
                ? style.menuWrapper
                : style.menuWrapper + " " + style.menuWrapperActive}>
                {menu.map((item, index) => (

                    <Link
                        className={style.menuItem}
                        activeClass={style.menuItem + " " + style.menuItemActive}
                        key={index}
                        to={item.path}
                        spy={true}
                        offset={-90}
                        smooth={'easeOutCubic'}
                        onSetActive={handleSetActive}
                        onSetInactive={handleSetInactive}>
                        
                            {item.menuName}

                    </Link>

                ))}

            </div>

            {toggle
                ? <div className={style.toggle} onClick={handleToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                : <div className={style.toggle + " " + style.toggleActive} onClick={handleToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>}

        </div>
    )
}

export default Navbar