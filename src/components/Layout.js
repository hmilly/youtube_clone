import React, { useState } from 'react'
import TopNav from './TopNav'
import SideNav from './SideNav'
import SmallSideNav from './SmallSideNav'

const Layout = ({ children }) => {

    const [largeNav, setNav] = useState(true)

    const changeNav = () => {
        setNav(!largeNav)
    }


    return (
        <>
            <TopNav changeNav={changeNav} />
            <div className="sideNavContainer">
                {largeNav ? <SideNav /> : <SmallSideNav />}
                {children}
            </div>
        </>
    )
}

export default Layout
