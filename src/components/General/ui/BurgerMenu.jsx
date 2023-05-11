import { slide as Menu } from 'react-burger-menu'
import React, { useState } from 'react'
import './BurgerMenu.css'


function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuOpen = () => {
    setMenuOpen(true)
  }

  const handleMenuClose = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* бургер-іконка, яка відкриває меню */}
      <div className="burger-icon" onClick={handleMenuOpen}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* меню */}
      <Menu isOpen={menuOpen} onClose={handleMenuClose}>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/about">
          About
        </a>
      </Menu>
    </>
  )
}

export default BurgerMenu

