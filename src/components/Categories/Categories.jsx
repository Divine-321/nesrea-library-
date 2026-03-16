import React from 'react'
import "./Categories.css"
import { category1, category2, category3, category4, category5 } from '../../assets'

const Categories = () => {
  return (
    <div className='cat-wrapper'>
      <div className='dive'>
        <div className='cat'>
          <h4>Categories</h4>
          <p>Dive into a curated collection of resources designed to deepen your understanding of the natural world</p>
        </div> 
        <a href="#">View all categories</a>
      </div>
      <div className='cat-pic'>
        <div className='image'>
          <img src={category1} alt="" />
          <p>Waste management</p>
        </div>

        <div className='image'>
          <img src={category2} alt="" />
          <p>Chemical Safety</p>
        </div>

        <div className='image'>
          <img src={category3} alt="" />
          <p>Air quality</p>
        </div>

        <div className='image'>
          <img src={category4} alt="" />
          <p>Biodiversity</p>
        </div>

        <div className='image'>
          <img src={category5} alt="" />
          <p>Industrial compliance</p>
        </div>
      </div>
    </div>
  )
}

export default Categories
