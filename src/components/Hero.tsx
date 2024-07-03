const Hero = () => {
  return (
    <section className="bg-primary-700 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-8xl text-left font-semibold text-white md:text-9xl mb-32">
            Find Your Perfect Nest.
          </h1>
          <p className="my-4 text-4xl   font-thin text-white">
            Explore the estates to suit your needs.
          </p>
        </div>
        <form className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
            <label htmlFor="location" className="sr-only">
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Enter Location (City, State, Zip, etc"
              className="w-full px-4 py-3 rounded-sm bg-white text-white focus:outline-none focus:ring focus:ring-primary-500"
            />
          </div>
          <div className="w-full md:w-2/5 md:pl-2">
            <label htmlFor="property-type" className="sr-only">
              Property Type
            </label>
            <select
              id="property-type"
              className="w-full px-4 py-3 rounded-sm bg-white text-primary-800 focus:outline-none focus:ring focus:ring-primary-500"
            >
              <option value="All">All</option>
              <option value="Apartment">Apartment</option>
              <option value="Studio">Studio</option>
              <option value="Condo">Condo</option>
              <option value="House">House</option>
              <option value="Cabin Or Cottage">Cabin or Cottage</option>
              <option value="Loft">Loft</option>
              <option value="Room">Room</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-sm bg-secondary-600 text-white hover:bg-secondary-400 focus:outline-none focus:ring focus:ring-primary-500"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};
export default Hero;
