import React from 'react'

const Navbar = () => {
    const links = [
        {title:'Guide',url:'#'},
        {title:'Pricing',url:'#'},
        {title:'Login',url:'#'},
    ]
  return (
    <div className='navbar-root'>
      <div className='logo'>Ragda</div>
      <div className='links'>
        {links.map((link,idx)=><a className='link-items' key={link.title} href={link.url}>{link.title}</a>)}
        <button className='btn'><p className='text-shadow'>Start Trial</p></button>
      </div>
    </div>
  )
}

export default Navbar
