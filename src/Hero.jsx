import React from 'react'
import heroImg from "./assets/hero.svg"

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-center'>
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quos suscipit ducimus eos amet, corporis perspiciatis officia enim repellat accusantium esse similique quia quibusdam ab odio distinctio veritatis asperiores commodi dolor magnam sint excepturi unde labore assumenda. Eos unde voluptatibus odio quis dolorem, repudiandae iusto aut illum accusamus quos nihil!</p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="Women and the Browser" className='img' />
            </div>
        </div>
    </section>
  )
}

export default Hero