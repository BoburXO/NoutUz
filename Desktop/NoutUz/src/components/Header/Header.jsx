import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "../Header/Header.scss"

const Header = (props) => {
  return (
    <>

      {/* category menu */}
      <div className="category">
        <ul className="c-items">
          <li className="active c-item">Asus</li>
          <li className="c-item">MSI</li>
          <li className="c-item">Levono</li>
          <li className="c-item">HP</li>
          <li className="c-item">Dell</li>
          <li className="c-item">Razer</li>
          <li className="c-item">Samsung</li>
          <li className="c-item">Microsoft Surface</li>
          <li className="c-item">Apple</li>
          <li className="c-item">Acer</li>
          <li className="c-item">LG</li>
          <li className="c-item">HyperX</li>
        </ul>
      </div>


      {/* hero carusel */}
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://nout.uz/wp-content/uploads/2023/02/1-HP%20Victus%20R5%201970x650.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://nout.uz/wp-content/uploads/2022/12/1-Victus%203050%201970x650.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://nout.uz/wp-content/uploads/2023/02/1-HP%20Pavilion%201970x650.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Header