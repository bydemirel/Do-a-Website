import React from 'react'
import "./Categories.css"
import {FaTree} from 'react-icons/fa';

const Categories = () => {
  return (
      <section className='categories'>
          <div className='container categories_container'>
              <div className="categories_left">
                  <h1>Categories</h1>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Quas volupta, ab in corporis.Voluptatem cum harum ipsum, 
                      facilis ducimus varitatis optio.
                  </p>
                  <a href="/" className='btn'>Daha Fazla</a>
              </div>

              <div className="categories_right">

                  <article className='category'>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Orman Günleri</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>

                  <article className='category'>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Sınıflarımız</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>

                  <article className='category'>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Bahçemiz</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>

                  <article className='category'>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Atölyemiz</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>

                  <article className='category'>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Doğa'da Kütüphanemiz</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>

                  <article className='category'>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Doğa'da Özel Günler</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>
                  
                  <article className='category'>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Doğa'da Hareket Eğitimi</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>

                  <article className='category'>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Sağlık ve Beslenme</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>
              </div>
          </div>
      </section>
  )
}

export default Categories