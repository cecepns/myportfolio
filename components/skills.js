import Style from './skills.module.scss'

function Skills() {
    return (
        <div className="bg-white">
            <h2
                className="text-center font-extrabold text-3xl md:text-5xl tracking-widest leading-tight text-opacity-90 my-6 ">
                <span className="text-3xl">
                    Qualification
                </span>
                <br></br>
                <span className="text-primary">
                    My Skills
                </span>
            </h2>

            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className={Style.filter + " flex justify-center my-2"}>
                        <img src="./skills/html.svg" alt="no pictures"></img>
                    </div>
                    <div className={Style.filter + " flex justify-center my-2"}>
                        <img src="./skills/css.svg" alt="no pictures"></img>
                    </div>
                    <div className={Style.filter + " flex justify-center my-2"}>
                        <img src="./skills/js.svg" alt="no pictures"></img>
                    </div>
                    <div className={Style.filter + " flex justify-center my-2"}>
                        <img src="./skills/sass.svg" alt="no pictures"></img>
                    </div>
                    <div className={Style.filter + " flex justify-center my-2"}>
                        <img src="./skills/node.svg" alt="no pictures"></img>
                    </div>
                    <div className={Style.filter + " flex justify-center my-2"}>
                        <img src="./skills/react.svg" alt="no pictures"></img>
                    </div>
                    <div className={Style.filter + " flex justify-center my-2"}>
                        <img src="./skills/next.svg" alt="no pictures"></img>
                    </div>
                    <div className={Style.filter + " flex justify-center my-2"}>
                        <img src="./skills/tailwind.svg" alt="no pictures"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills