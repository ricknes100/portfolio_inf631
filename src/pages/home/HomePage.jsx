import {CardService} from "./components/CardService.jsx";
import {CardProject} from "./components/CardProject.jsx";
import {NavigateNext} from "../../components/Icons/index.js";
import imgProject1 from "../../assets/images/project1.jpg";
import imgProject2 from "../../assets/images/project2.png";
import imgProject3 from "../../assets/images/project3.png";

import imgService1 from "../../assets/images/service1.jpg";
import imgService2 from "../../assets/images/service2.jpg";
import imgService3 from "../../assets/images/service3.jpg";

import imgProfile from '../../assets/images/photo-profile.jpg';

const projects = [
    {
        id: 'proyect-1',
        name: 'Consultorio Médico',
        image: imgProject1,
        category: 'Aplicación Web'
    },
    {
        id: 'proyect-2',
        name: 'Taxi App',
        image: imgProject2,
        category: 'Aplicación Móvil'
    },
    {
        id: 'proyect-3',
        name: 'Finanzas',
        image: imgProject3,
        category: 'Diseño Web'
    },
];

const services = [
    {
        id: 'service-1',
        title: 'Desarrollo Web',
        image: imgService1,
        projects: 10
    },
    {
        id: 'service-2',
        title: 'Desarrollo Móvil',
        image: imgService2,
        projects: 8
    },
    {
        id: 'service-3',
        title: 'Diseño UI/UX',
        image: imgService3,
        projects: 8
    },
];


export const HomePage = () => {
    return (
        <>
            <section className="mx-16 py-20 flex justify-evenly relative">

                <div className="bg-secondary-light size-1/2 absolute top-0 right-0 -z-10"></div>
                <div className="flex flex-col gap-4">
                    <small className="text-lg animate__animated animate__fadeInDown">Hola, soy</small>
                    <h2 className="text-5xl underline underline-offset-8 animate__animated animate__fadeInUp">Ricardo Yucra</h2>
                    <h6 className="text-3xl font-semibold">Desarrollador Web</h6>
                    <p className="text-gray-300">
                        Mi experiencia abarca desde el desarrollo de aplicaciones, <br/>donde me centro en un diseño intuitivo
                        y responsivo,<br/> hasta el desarrollo de back-end y móvil, donde se garantice <br/>la estabilidad y la eficiencia
                        de los sistemas informáticos.
                    </p>
                </div>
                <img src={imgProfile}
                     className="w-1/4 h-96 object-center object-cover rounded-lg"
                     alt="yo"/>
            </section>
            <section className="flex py-16 pl-16 items-center justify-between space-x-24">
            <div className="w-1/3">
                    <h2 className="text-3xl">Servicios</h2>
                    <p className="mt-4">
                        Te ayudaré a encontrar y resolver tus problemas,
                        utilizando el diseño de procesos para crear productos digitales.
                    </p>
                </div>
                <div className="bg-secondary-light w-1/2 px-16 py-8 rounded-lg flex-col space-y-8">
                    {
                        services.map((item) => (
                            <CardService key={item.id} service={item} />
                        ))
                    }
                </div>
            </section>
            <section className="p-16">
                <h3 className="text-3xl">Proyectos recientes</h3>
                <div className="mt-8 grid grid-cols-3 gap-16">
                    {projects.map((item, index) => (
                        <CardProject key={index}
                                     project={item}/>
                        ))
                    }
                </div>
                <div className="w-full text-center mt-16">
                    <button className="btn btn-primary inline-flex items-center">
                        Ver más proyectos
                        <NavigateNext />
                    </button>
                </div>
            </section>
        </>
    );
}