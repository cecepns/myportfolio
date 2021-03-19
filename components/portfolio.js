export default function Portfolio() {
    return (
        <div id="portfolio" className="my-8 bg-white min-h-screen flex flex-col justify-center column-column">
            <h2
                className="text-center font-extrabold text-3xl md:text-5xl tracking-widest leading-tight text-opacity-90  mb-6 md:mb-12">
                <span className="text-primary">
                    Portfolio
                </span>
            </h2>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="/portfolio/acp.png" alt="Mountain"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Crowdfunding - Aksi Cipta Peduli</div>
                            <p className="tracking-wide leading-6 font-medium opacity-60">
                                Crowdfunding is a form of funding for those who need funds in developing their
                                business, where the funding is collected from several people.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2 md:pb-0">
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ReactJs</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NextJs</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tailwindcss</span>
                        </div>
                    </div>

                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img
                            className="w-full"
                            src="/portfolio/psb.png"
                            alt="Mountain"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Student Registration App</div>
                            <p className="tracking-wide leading-6 font-medium opacity-60">
                                Ma'rifatussalaam qur'anic boarding school student registration application is
                                made to make it easier for students to register online.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2 md:pb-0">
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Codeigniter</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Bootstrap</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Jquery</span>
                        </div>
                    </div>

                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="/portfolio/inventory.png" alt="Mountain"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Desktop - Inventory App</div>
                            <p className="tracking-wide leading-6 font-medium opacity-60">
                                I created this Desktop-based inventory application to make it easier to manage
                                goods, stock & warehouse.

                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2 md:pb-4">
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Java</span>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}