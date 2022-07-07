import React from 'react'
import "./Categories.css"
import {FaTree} from 'react-icons/fa';
import {useNavigate } from 'react-router-dom';

const Categories = () => {

    const navigate = useNavigate();

    const handleCategoryClick1 = () => {
        navigate('/ormangunleri');
        window.scrollTo(0,0);
    }

    const handleCategoryClick2 = () => {
        navigate('/siniflarimiz');
        window.scrollTo(0,0);
    }

    const handleCategoryClick3 = () => {
        navigate('/bahcemiz');
        window.scrollTo(0,0);
    }

    const handleCategoryClick4 = () => {
        navigate('/atolyemiz');
        window.scrollTo(0,0);
    }

    const handleCategoryClick5 = () => {
        navigate('/kutuphanemiz');
        window.scrollTo(0,0);
    }

    const handleCategoryClick6 = () => {
        navigate('/ozelgunlerimiz');
        window.scrollTo(0,0);
    }

    const handleCategoryClick7 = () => {
        navigate('/hareketegitimi');
        window.scrollTo(0,0);
    }

    const handleCategoryClick8 = () => {
        navigate('/saglikvebeslenme');
        window.scrollTo(0,0);
    }


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

                  <article className='category' onClick={handleCategoryClick1}>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Orman Günleri</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>

                  <article className='category' onClick={handleCategoryClick2}>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Sınıflarımız</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>

                  <article className='category' onClick={handleCategoryClick3}>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Bahçemiz</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>

                  <article className='category' onClick={handleCategoryClick4}>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Atölyemiz</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>

                  <article className='category' onClick={handleCategoryClick5}>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Doğa'da Kütüphanemiz</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>

                  <article className='category' onClick={handleCategoryClick6}>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Doğa'da Özel Günler</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>
                  
                  <article className='category' onClick={handleCategoryClick7}>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Doğa'da Hareket Eğitimi</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>

                  <article className='category' onClick={handleCategoryClick8}>
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