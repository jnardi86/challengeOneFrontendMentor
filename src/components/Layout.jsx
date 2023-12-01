import React from 'react'

const Layout = ({children}) => {
  return (
    <main className='max-w-[1440px] mx-auto relative'>
        {children}
    </main>
  )
}

export default Layout