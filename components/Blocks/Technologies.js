import SectionTitle from "../BasicParts/SectionTitle";


export default function Technologies({data}) {

	return (
		<section id="tech" className='py-20 lg:py-28'>
      <div className="container grid px-2 mx-auto">

        <SectionTitle data={data} className='mb-16' />

        <div className="grid gap-8 lg:grid-cols-2">

          {data.blocks.map(item =>
            <div className='flex gap-5 px-6 py-8 transition-all rounded hover:bg-weart-50'>
              <div>
                <i className={`text-5xl text-weart-500 ${item.icon}`}></i>
              </div>
              <div>
                <h2 className='mt-2 mb-3 text-2xl font-bold font-display text-weart-800'>{item.title}</h2>
                <p>{item.desc}</p>
                <a href={item.link.url} className="inline-flex items-center gap-3 mt-4 text-sm font-bold uppercase transition-all border-b-2 hover:border-weart-500 font-display hover:gap-4">
                  {item.link.title}
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
	)
}
