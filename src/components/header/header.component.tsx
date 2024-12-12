import { FunctionComponent, useEffect, useState } from 'react'
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import MoonIcon from '@heroicons/react/24/outline/MoonIcon'
import SunIcon from '@heroicons/react/24/outline/SunIcon'
import { themeChange } from 'theme-change'
import { NavLink } from 'react-router-dom'

const HeaderComponent: FunctionComponent = () => {

    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme"))

    useEffect(() => {
        themeChange(false)
        if (currentTheme === null) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setCurrentTheme("dark")
            } else {
                setCurrentTheme("light")
            }
        }
    }, [currentTheme])

    return (
        <div className="navbar sticky top-0 bg-base-100  z-10 shadow-md ">
            {/* Menu toogle for mobile view or small screen */}
            <div className="flex-1">
                <label htmlFor="left-sidebar-drawer" className="btn btn-primary drawer-button lg:hidden">
                    <Bars3Icon className="h-5 inline-block w-5" />
                </label>
                <NavLink to="/">
                    <h1 className="text-2xl font-semibold ml-2">Fortmindz Assignment</h1>
                </NavLink>
            </div>

            <div className="flex-none">
                <label className="swap ">
                    <input type="checkbox" />
                    <SunIcon data-set-theme="light" data-act-class="ACTIVECLASS" className={"fill-current w-6 h-6 " + (currentTheme === "dark" ? "swap-on" : "swap-off")} />
                    <MoonIcon data-set-theme="dark" data-act-class="ACTIVECLASS" className={"fill-current w-6 h-6 " + (currentTheme === "light" ? "swap-on" : "swap-off")} />
                </label>
            </div>
        </div>
    )
}

export default HeaderComponent
