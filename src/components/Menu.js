import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ menu }) => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState([
    'all',
    ...new Set(menu.map((item) => item.category)),
  ])
  const [activeCategory, setActiveCategory] = useState('all')

  const filterItems = (filterText) => {
    if (filterText.toLocaleLowerCase() === 'all') {
      setMenuItems(menu)
    } else {
      setMenuItems(
        menu.filter((item) => item.category === filterText.toLocaleLowerCase())
      )
    }
    setActiveCategory(filterText)
  }

  return (
    <>
      <header>
        <section className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </section>
        <section className='btn-container'>
          {categories.map((category) => {
            return (
              <button
                className={`btn filter-btn ${
                  category === activeCategory && 'filter-btn-active'
                }`}
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            )
          })}
        </section>
      </header>

      <section className='menu section-center'>
        {menuItems.map(({ id, img, title, price, desc }) => {
          return (
            <article key={id} className='menu-item'>
              <Link to={`/${id}`}>
                <img className='photo' src={img} alt='' />
              </Link>
              <div className='item-info'>
                <header>
                  <h4>{title}</h4>
                  <h4 className='price'>${price}</h4>
                </header>
                <p className='item-text'>{desc}</p>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Menu
