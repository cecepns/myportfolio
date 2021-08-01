import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'

function Education() {
    return (
        <div id="education" className="bg-graysmooth" style={{ backgroundImage: "url(/waves.svg)", backgroundBlendMode : "color-burn" }}>
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-left my-8 hidden md:block">
                        <img className="object-contain w-full h-auto" src="aku2.png" alt="no pictures"></img>
                    </div>
                    <div>
                        <h2
                            className="text-left font-extrabold text-3xl md:text-5xl tracking-widest leading-tight text-opacity-90 my-6 ">
                            <span className="text-3xl">
                                Qualification
                            </span>
                            <br></br>
                            <span className="text-primary">
                                My Education
                            </span>
                        </h2>

                        <div className="bg-white relative shadow-sm p-6 my-6">

                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className="absolute pt-1"
                                size="lg"
                                color="#4ade80"/>
                            <p className="tracking-wide leading-7 font-medium opacity-60 ml-8">
                                SMKN 1 Subang.
                                <br></br>
                                <span className="text-primary">2016 - 2019</span>
                                <br></br>
                                <span>
                                    Software Engineering.
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
                                SMPN 4 Subang.
                                <br></br>
                                <span className="text-primary">2013 - 2016</span>
                                <br></br>
                                <span>
                                    Junior High School.
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
                                SDN Bantarwaru 1.
                                <br></br>
                                <span className="text-primary">2007 - 2013</span>
                                <br></br>
                                <span>
                                    Elementary School.
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

export default Education