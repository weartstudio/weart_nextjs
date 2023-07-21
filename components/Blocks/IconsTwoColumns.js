import SectionTitle from "../BasicParts/SectionTitle";


export default function IconsTwoColumns({data}) {
	return (
		<section className='py-20 lg:py-28'>
      <div className="container mx-auto px-2 grid">

        <SectionTitle data={{
          subtitle: 'szolgáltatások',
          title: 'Miben tudok segíteni?'
        }} className='mb-16' />

        <div className="grid lg:grid-cols-2 gap-8">

          {data.columns.map(item =>
            <div className='flex gap-5 py-8 px-6 hover:bg-weart-50 transition-all rounded'>
              <div>
                <i className={`text-5xl text-weart-500 ${item.icon}`}></i>
              </div>
              <div>
                <h2 className='text-2xl font-display font-bold mb-3 mt-2 text-weart-800'>{item.title}</h2>
                <p>{item.desc}</p>
                <a href={item.linkUrl} className="hover:border-weart-500 border-b-2 mt-4 font-display text-sm uppercase inline-flex items-center gap-3 font-bold hover:gap-4 transition-all">
                  {item.link}
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
	)
}
