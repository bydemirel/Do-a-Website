import React from 'react'
import "./Categories.css"
import {FaTree} from 'react-icons/fa';
import {useNavigate } from 'react-router-dom';

const Categories = () => {

    const navigate = useNavigate();

    const handleCategoryClick1 = () => {
        navigate('/koku-ve-hafiza-oyunu');
        window.scrollTo(0,0);
    }

    const handleCategoryClick2 = () => {
        navigate('/duyu-oyunu');
        window.scrollTo(0,0);
    }

    const handleCategoryClick3 = () => {
        navigate('/dogadaki-nesneleri-dokunarak-tanima-oyunu');
        window.scrollTo(0,0);
    }

    const handleCategoryClick4 = () => {
        navigate('/dusen-yumurtayi-kurtarma-etkinligi');
        window.scrollTo(0,0);
    }

    const handleCategoryClick5 = () => {
        navigate('/tanisma-oyunu');
        window.scrollTo(0,0);
    }

    const handleCategoryClick6 = () => {
        navigate('/taksici-yolcu-oyunu');
        window.scrollTo(0,0);
    }

    const handleCategoryClick7 = () => {
        navigate('/sismograf-yapimi');
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
                  <h1>Aktivitelerimiz</h1>
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
                      <h5>Koku ve Hafıza Oyunu</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>

                  <article className='category' onClick={handleCategoryClick2}>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Duyu Oyunu</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>

                  <article className='category' onClick={handleCategoryClick3}>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Doğadaki Nesneleri Tanıma Oyunu</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>

                  <article className='category' onClick={handleCategoryClick4}>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Düşen Yumurtayı Kurtarma Etkinliği</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>

                  <article className='category' onClick={handleCategoryClick5}>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Tanışma Oyunu</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>

                  <article className='category' onClick={handleCategoryClick6}>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Taksici Yolcu Oyunu</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi.</p>
                  </article>
                  
                  <article className='category' onClick={handleCategoryClick7}>
                      <span className='category_icon'><i><FaTree></FaTree></i></span>
                      <h5>Sismograf Yapımı</h5>
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