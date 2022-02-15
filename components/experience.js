import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'

function Experience() {
    return (
        <div id="experience" className="bg-graysmooth" style={{ backgroundImage: "url(/waves.svg)", backgroundBlendMode : "color-burn" }}>
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-left my-8 hidden md:block">
                        <img className="" src="aku2.png" alt="no pictures"></img>
                    </div>
                    <div>
                        <h2
                            className="text-left font-extrabold text-3xl md:text-5xl tracking-widest leading-tight text-opacity-90 my-6 ">
                            <span className="text-primary">
                                My Experience
                            </span>
                        </h2>

                        <div className="bg-white relative shadow-sm p-6 my-6">

                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className="absolute pt-1"
                                size="lg"
                                color="#4ade80"/>
                            <p className="tracking-wide leading-7 font-medium opacity-60 ml-8">
                                PT GOTHRU MEDIA INDONESIA.
                                <br></br>
                                <span className="text-primary">2022 - Present</span>
                                <br></br>
                                <span>
                                    Frontend Developer.
                                </span>
                            </p>
                        </div>

                        <div className="bg-white relative shadow-sm p-6 my-6">

                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className="absolute pt-1"
                                size="lg"
                                color="#4ade80"/>
                            <p className="tracking-wide leading-7 font-medium opacity-60 ml-8">
                                Ma'rifatussalaam Quranic Boarding School.
                                <br></br>
                                <span className="text-primary">2019 - 2022</span>
                                <br></br>
                                <span>
                                    Web Developer.
                                </span>
                            </p>
                        </div>

                        <div className="bg-white relative shadow-sm p-6 my-6">
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className="absolute pt-1"
                                size="lg"
                                color="#4ade80"/>
                            <p className="tracking-wide leading-7 font-medium opacity-60 ml-8">
                                Labs WeCan.
                                <br></br>
                                <span className="text-primary">2019</span>
                                <br></br>
                                <span>
                                    Front End Developer & Graphic Designer.
                                </span>
                            </p>
                        </div>

                        <div className="bg-white relative shadow-sm p-6 my-6">
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className="absolute pt-1"
                                size="lg"
                                color="#4ade80"/>
                            <p className="tracking-wide leading-7 font-medium opacity-60 ml-8">
                                PD BPR Subang.
                                <br></br>
                                <span className="text-primary">2017</span>
                                <br></br>
                                <span>
                                    Internship IT Support
                                </span>
                            </p>
                        </div>

                        {/* <button className="bg-primary py-2 px-8 my-8 text-white rounded-full  ...">Hire Me</button> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Experience