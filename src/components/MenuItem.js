import React, { useEffect, useState } from 'react'

import { useParams, Link } from 'react-router-dom'

const MenuItem = ({ menu }) => {
  const { itemID } = useParams()
  const [menuItem, setMenuItem] = useState({
    id: '',
    title: '',
    price: '',
    desc: '',
    img: '',
  })

  useEffect(() => {
    setMenuItem(menu.find((item) => item.id.toString() === itemID))
  }, [itemID])

  return (
    <section className='center item-detail'>
      <header className='title' style={{ marginBottom: '80px' }}>
        <Link to='/'>
          <p>{'<<'} Back to Menu</p>
        </Link>
        <h2>{menuItem.title}</h2>
        <h3 className='price'>${menuItem.price}</h3>
      </header>
      <section className='item-detail-info'>
        <img src={menuItem.img} alt='' />
        <section className='item-detail-content'>
          <p>{menuItem.desc}</p>
        </section>
      </section>
    </section>
  )
}

export default MenuItem
