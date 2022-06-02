import React from 'react'
import './Navigation.css'
import Paragraph from '../../atoms/paragraph/Paragraph'

const Navigation = () => {
  return (
    <nav>
      <ul className='navigation_list'>
        <li>
          <Paragraph
            text="Home"
            color="gray"
            family="Oswald"
            size="sm"
          />
        </li>
        <li>
          <Paragraph
            text="About"
            color="gray"
            family="Oswald"
            size="sm"
          />
        </li>
        <li>
          <Paragraph
            text="Pricing"
            color="gray"
            family="Oswald"
            size="sm"
          />
        </li>
        <li>
          <Paragraph
            text="Blog"
            color="gray"
            family="Oswald"
            size="sm"
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

