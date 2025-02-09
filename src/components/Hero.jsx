import './Hero.scss'

function Hero({ heroImage, heroText, isDark }) {
    return(
        <div className='hero'>
            <img src={heroImage} alt="" />
            <div className={ isDark ? 'hero--gradient-dark' : 'hero--gradient-light'}></div>
            <h1>
                {heroText}
            </h1>
        </div>
    )
}

export default Hero
