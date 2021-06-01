import React from 'react'
import TopNav from './TopNav'
import SideNav from './SideNav'

const Layout = ({ children }) => {
    return (
        <>
            <TopNav />
            <div className="sideNavContainer">
                <SideNav />
                {children}
            </div>
        </>
    )
}

export default Layout
