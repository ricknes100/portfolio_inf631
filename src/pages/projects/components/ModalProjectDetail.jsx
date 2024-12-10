import {Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import PropTypes from 'prop-types';

import image from '../../../assets/images/project1.jpg';
import {Close} from "../../../components/Icons/index.js";


const ToolChip = ({name}) => {
    return (
        <div className="fill-white bg-secondary-light px-4 py-2.5 rounded-md flex items-center gap-2.5 text-sm">
            {name}
        </div>
    );
}

ToolChip.propTypes = {
    name: PropTypes.string,
}

const tools = [
    { name: 'HTML'},
    { name: 'CSS'},
    { name: 'Javacript'},
    { name: 'React'},
]

export const ModalProjectDetail = ({isOpen, setIsOpen}) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black bg-opacity-70"/>
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95">
                            <Dialog.Panel
                                className="w-full lg:w-[90%] max-h-min flex max-lg:flex-col gap-16 transform overflow-hidden rounded-lg bg-gray-900 p-8 lg:p-16 text-left align-middle shadow-xl transition-all">
                                <div className="sm:block absolute top-0 right-0 pt-4 md:pt-6 pr-4 lg:pr-6">
                                    <button
                                        type="button"
                                        className="bg-secondary-light rounded-md"
                                        onClick={() => setIsOpen(false)}>
                                        <span className="sr-only">Cerrar</span>
                                       <Close size={28}/>
                                    </button>
                                </div>

                                <img src={image}
                                     className="w-3/5 h-[520px] object-cover rounded-md"
                                     alt="project"/>

                                <div className="flex flex-1 flex-col gap-4">
                                    <Dialog.Title as="h3"
                                                  className="text-lg text-primary">Consultorio Médico - Aplicación
                                        Web</Dialog.Title>
                                    <h3>Descripción del proyecto</h3>
                                    <p className="max-md:text-sm max-md:leading-7 text-[14px] font-light">
                                        Es una aplicación desarrollado para la reserva de citas de un consultorio
                                        médico, busqueda de médicos por especialidad, horarios disponibles para cada médico.
                                    </p>
                                    <h3>Herramientas</h3>
                                    <div className="flex flex-wrap gap-2.5">
                                        { tools.map((item, index) => <ToolChip key={index} name={item.name} />) }
                                    </div>
                                    <button className="btn btn-primary mt-4">
                                        Enlace del proyecto
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

ModalProjectDetail.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func
}