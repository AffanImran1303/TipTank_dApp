import React from 'react'

const FeaturedCreators = () => {
  return (
    <section className="flex justify-center sm:h-max" id="FeaturedCreatorsSection">
    <div className="grid grid-rows-1 gap-8 h-vh border-4 border-none rounded-xl text-center">
      <h1 className="text-5xl league-spartan font-bold mt-16 sm:text-8xl">Featured Creators</h1>
      <div className="text-lg league-spartan">
    <p className="px-40">Explore our top creators and discover amazing work! From artists and writers to musicians and innovators, these featured creators have received standout support from the community. Your tips go a long way in encouraging and empowering their passion—check out their profiles and show your appreciation!</p>
    </div>
    <div className="carousel carousel-center bg-neutral rounded-box w-full space-x-4 p-4 mt-8">
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      className="rounded-box" />
  </div>
</div>
    </div>

  </section>
  )
}

export default FeaturedCreators