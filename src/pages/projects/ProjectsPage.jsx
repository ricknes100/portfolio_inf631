import {CardProject} from "./components/index.js";
import imgProject1 from "../../assets/images/project1.jpg";
import imgProject2 from "../../assets/images/project2.png";
import imgProject3 from "../../assets/images/project3.png";
import imgProject4 from "../../assets/images/project4.png";
import imgProject5 from "../../assets/images/project5.png";
import imgProject6 from "../../assets/images/project6.png";
import imgProject7 from "../../assets/images/project7.png";
import imgProject8 from "../../assets/images/project8.png";

const projects = [
    {
        id: 'proyect-1',
        title: 'Consultorio - Aplicación Web',
        description: 'Es una aplicación desarrollado para la reserva de citas de un consultorio médico, busqueda de médicos por especialidad',
        image: imgProject1
    },
    {
        id: 'proyect-2',
        title: 'Taxi - Aplicación Móvil',
        description: 'Es una aplicación desarrollado para solicitar viajes de taxi, busqueda de lugares',
        image: imgProject2
    },
    {
        id: 'proyect-3',
        title: 'Finanzas - Aplicación Web',
        description: 'Es una aplicación desarrollado para el control de finanzas de una empresa, control de gastos e ingresos',
        image: imgProject3
    },
    {
        id: 'proyect-4',
        title: 'Muebleria - Aplicación Móvil',
        description: 'Es una aplicación para la compra de muebles de diferentes materiales de alta calidad',
        image: imgProject4
    },
    {
        id: 'proyect-5',
        title: 'Ecommerce - Aplicación Móvil',
        description: 'Es una aplicación para la compra de productos tecnológicos, organizados por categorias',
        image: imgProject5
    },
    {
        id: 'proyect-6',
        title: 'Cafeteria - Aplicación Móvil',
        description: 'Es una aplicación para una cafeteria, muestra los diferentes tipos de café y su descripción',
        image: imgProject6
    },
    {
        id: 'proyect-7',
        title: 'Restaurante - Aplicación Web',
        description: 'Es una aplicación para un restaurante de comida rápida, detalle y reserva de atención',
        image: imgProject7
    },
    {
        id: 'proyect-8',
        title: 'Eventos - Aplicación Móvil',
        description: 'Es una aplicación para la compra de muebles de diferentes materiales de alta calidad',
        image: imgProject8
    }
]


export const ProjectsPage = () => {
    return (
        <section className="container my-8 animate__animated animate__fadeIn">
            <div className="mx-0 lg:mx-16 flex-1">
                <div className="flex items-center justify-between lg:mb-6">
                    <h1 className="text-xl lg:text-2xl">Proyectos</h1>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        projects.map((item, index) => (
                            <CardProject key={index}
                                         project={item}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}