import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            sed facilis nulla. Beatae ullam vitae dicta rem alias ipsam totam
            perspiciatis in amet eos, numquam reiciendis, distinctio laborum hic
            enim!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  )
}
export default Hero
