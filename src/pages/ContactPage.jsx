import {useState} from "react";

import imgContact from '../assets/images/contact.svg';

export const ContactPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = e => {

        e.preventDefault();

        // Validaciones
        if([name, email, message].includes('')) {
            setError(true);
            return;
        }

        setError(false);

    }
    return (
        <section className="flex flex-col lg:flex-row justify-evenly items-center py-4 lg:py-12 px-8 lg:px-0 lg:mb-16 animate__animated animate__fadeIn">
            <div className="w-full lg:w-[30%]">
                <h1 className="text-xl lg:text-2xl">Contacto</h1>
                <p className="max-md:text-sm font-medium">Completa el siguiente formulario</p>
                {error && <p className="text-rose-500 font-medium">*Todos los campos son obligatorios</p>}
                <form className="flex flex-col gap-4 mt-8"
                      onSubmit={handleSubmit}
                      noValidate>
                    <div>
                        <label htmlFor="name" className="text-gray-300 font-medium md:text-base">Nombre</label>
                        <input type="text"
                               name="name"
                               id="name"
                               autoComplete="off"
                               placeholder="Tu nombre"
                               className="input mt-2"
                               value={name}
                               onChange={(e) => setName(e.target.value)}
                               required/>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-gray-300 font-medium md:text-base">Correo electrónico</label>
                        <input type="email"
                               name="email"
                               id="email"
                               autoComplete="off"
                               placeholder="Tu correo"
                               className="input mt-2"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               required/>
                    </div>
                    <div>
                        <label htmlFor="message" className="text-gray-300 font-medium md:text-base">Mensaje</label>
                        <textarea id="message"
                                  name="message"
                                  rows={4}
                                  className="input mt-2"
                                  placeholder="Escribe tu mensaje.."
                                  defaultValue={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                  required/>
                    </div>
                    <button type="submit"
                            className="btn btn-primary max:md:btn-sm mt-2">Enviar mensaje
                    </button>
                </form>
            </div>

            <img src={imgContact}
                 className="size-96"
                 alt=""/>
            {/*<div className="max-md:h-48 lg:max-h-full w-full lg:w-1/3 bg-light rounded-lg shadow-sm max-md:my-12"></div>*/}
        </section>
    );
}