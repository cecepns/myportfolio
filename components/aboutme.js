import Typewriter from 'typewriter-effect';

function AboutMe() {
    return (
        <div className="bg-white pt-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mt-12">

                        <h2
                            className="font-extrabold text-3xl md:text-5xl tracking-widest leading-tight text-opacity-90 mb-6 mt-0 md:mt-16">
                            Hi! I Am
                            <br></br>
                            <span className="text-primary">
                                Cecep Nandang
                            </span>
                        </h2>
                        <p className="tracking-wide leading-7 font-medium opacity-60">
                            <Typewriter
                                options={{
                                strings: ['i am a Front End web developer & Graphic designer, i was born in indramayu 29 april 2001 and now 19 years old. I am very interested in the world of technology which is trending and has its own uniqueness. On the other hand, I am also interested in digital business and looking for crazy ideas for businesses that can compete internationally.'],
                                autoStart: true,
                                loop: false
                            }}/>

                        </p>

                        <button className="bg-primary py-2 px-8 my-8 text-white rounded-full  ...">Hire Me</button>
                    </div>
                    <div className="flex justify-center">
                        <img className="" src="/aku.png" alt="no pictures"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe