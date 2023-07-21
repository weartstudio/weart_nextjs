import { FaReact, FaWordpressSimple } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";

export default function IconsTwoColumns() {
	return (
		<section className='py-20 lg:py-28'>
      <div className="container mx-auto px-2 grid">

        <div className="text-center mb-16">
          <h3 className="uppercase font-bold font-display text-weart-500 mb-2">Szolgáltatások</h3>
          <h3 className="text-4xl font-display font-bold">Miben tudok segíteni?</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className='flex gap-5 py-8 px-6 hover:bg-weart-50 transition-all rounded'>
            <div>
              <FaWordpressSimple className="text-5xl text-weart-500" />
            </div>
            <div>
              <h2 className='text-2xl font-display font-bold mb-3 mt-2 text-weart-800'>Weboldal készítés</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis, numquam qui reprehenderit aliquid rerum dolorem, dicta nobis, odio voluptates necessitatibus reiciendis. Nostrum molestias obcaecati distinctio, hic ea consequatur dolores.</p>
              <a href="#" className="hover:border-weart-500 border-b-2 mt-4 font-display text-sm uppercase inline-flex items-center gap-3 font-bold hover:gap-4 transition-all">Tovább <BsArrowRight/></a>
            </div>
          </div>

          <div className='flex gap-5 py-8 px-6 hover:bg-weart-50 transition-all rounded'>
            <div>
              <FaReact className="text-5xl text-weart-500" />
            </div>
            <div>
              <h2 className='text-2xl font-display font-bold mb-3 mt-2 text-weart-800'>Frontend fejlesztés</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis, numquam qui reprehenderit aliquid rerum dolorem, dicta nobis, odio voluptates necessitatibus reiciendis. Nostrum molestias obcaecati distinctio, hic ea consequatur dolores.</p>
              <a href="#" className="hover:border-weart-500 border-b-2 mt-4 font-display text-sm uppercase inline-flex items-center gap-3 font-bold hover:gap-4 transition-all">Tovább <BsArrowRight/></a>
            </div>
          </div>


        </div>
      </div>
    </section>
	)
}
