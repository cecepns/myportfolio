import Typewriter from 'typewriter-effect';

function AboutMe() {
    const handleHire = ()=> {
        window.open('https://api.whatsapp.com/send/?phone=6282214094779&text=bismillah');
    }

    return (
        <div id="home" className="bg-white pt-12 bg-right bg-no-repeat" style={{backgroundImage: "url(/waves.svg)", backgroundBlendMode: "hard-light"}}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mt-12 w-full md:w1/2">

                        <h2
                            className="font-extrabold text-3xl md:text-5xl tracking-widest leading-tight text-opacity-90 mb-6 mt-0 md:mt-16">
                            Hi! I Am
                            <br></br>
                            <span className="text-primary">
                                Cecep Nandang
                            </span>
                        </h2>
                        <div className="tracking-wide leading-7 font-medium opacity-60">
                            <Typewriter
                                options={{
                                strings: [
                                    'i am a Front End web developer',
                                    'Graphic designer',
                                    'UI/UX Designer',
                                    'Motion Grapher',
                                    'i was born in indramayu 29 april 2001 and now 19 years old',
                                    'I am very interested in the world of technology which is trending and has its own uniqueness. On the other hand, I am also interested in digital business and looking for crazy ideas for businesses that can compete internationally.'
                                ],
                                autoStart: true,
                                delay: 100,
                                changeDelay: 200,
                                loop: false
                            }}/>

                        </div>

                        <button className="bg-primary py-2 px-8 my-8 text-white rounded-full  ..." onClick={handleHire}>Hire Me</button>
                    </div>
                    <div className="flex justify-center h-full object-cover w-full md:w1/2">
                        <img className="object-cover w-full h-auto" src="/aku.png" alt="no pictures"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe