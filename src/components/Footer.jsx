import {Github, Linkedin, Mail, Phone} from "./Icons/index.js";
export const Footer = () => {
    return (
        <footer
            className="w-full bg-secondary max-lg:text-sm text-white">
            <div className="flex py-16 justify-around border-b-2 border-secondary-light items-center">
                <div className="flex flex-col gap-4">
                    <h4 className="text-3xl">Trabajemos juntos</h4>
                    <p className="leading-loose text-gray-300">
                        ¿Quieres empezar con tu proyecto y necesitas <br/>mi ayuda?
                        No dudes en contactarse conmigo.
                    </p>
                    <button className="btn border-primary border-2 text-primary hover:bg-primary/10">
                        Contáctame
                    </button>
                </div>
                <div>
                    <h4 className="text-lg font-medium">Conectate en:</h4>
                    <div className="mt-4 flex gap-4">
                        <a href="https://www.github.com"
                           target="_blank"
                           className="fill-white bg-secondary-light px-4 py-2.5 rounded-lg flex items-center gap-2.5 text-sm hover:bg-gray-700">
                            <Github/>
                            Github
                        </a>
                        <a href="https://www.linkedin.com"
                           target="_blank"
                           className="fill-white bg-secondary-light px-4 py-2.5 rounded-lg flex items-center gap-2.5 text-sm hover:bg-gray-700">
                            <Linkedin/>
                            Linkedin
                        </a>
                    </div>
                    <h4 className="mt-8 text-lg font-medium">Contacto</h4>
                    <div className="bg-primary/25 px-8 py-6 rounded-xl mt-2 flex">
                        <div className="text-[15px] text-center border-r-2 pr-8 flex flex-col items-center">
                            <Mail/>
                            <h6 className="font-medium text-gray-300 mt-2">Correo electrónico</h6>
                            <p className="font-medium">rickyucra100@gmail.com</p>
                        </div>
                        <div className="text-[15px] text-center pl-8 flex flex-col items-center">
                            <Phone/>
                            <h6 className="font-medium text-gray-300 mt-2">Celular</h6>
                            <p className="font-medium">+591 12345678</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center py-4">
                <p className="text-sm">Copyright 2024. Todos los derechos reservados</p>
            </div>
        </footer>
    )
}