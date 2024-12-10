
import Profile from '../../assets/images/profile.jpg';
import {CardSkill} from "./components/CardSkill.jsx";

import htmlLogo from "../../assets/logos/html-logo.svg";
import cssLogo from "../../assets/logos/css-logo.svg";
import reactLogo from "../../assets/logos/react-logo.svg";
import angularLogo from "../../assets/logos/angular-logo.svg";
import jsLogo from "../../assets/logos/javascript-logo.svg";
import laravelLogo from "../../assets/logos/laravel-logo.svg";
import flutterLogo from "../../assets/logos/flutter-logo.svg";
import nestLogo from "../../assets/logos/nest-logo.svg";
import kotlinLogo from "../../assets/logos/kotlin-logo.svg";
import pythonLogo from "../../assets/logos/python-logo.svg";

const skills = [
    {id: 'html', name: 'HTML', logo: htmlLogo},
    {id: 'css', name: 'CSS', logo: cssLogo},
    {id: 'js', name: 'Javascript', logo: jsLogo},
    {id: 'react', name: 'React', logo: reactLogo},
    {id: 'angular', name: 'Angular', logo: angularLogo},
    {id: 'laravel', name: 'Laravel', logo: laravelLogo},
    {id: 'nest', name: 'NestJS', logo: nestLogo},
    {id: 'flutter', name: 'Flutter', logo: flutterLogo},
    {id: 'kotlin', name: 'Kotlin', logo: kotlinLogo},
    {id: 'python', name: 'Kotlin', logo: pythonLogo},
]

export const AboutPage = () => {
  return (
      <>
          <section className="flex gap-6 lg:gap-12 px-8 lg:px-16 lg:my-8 justify-evenly items-center animate__animated animate__fadeIn">
              <div className="w-2/5">
                  <small className="text-lg">Sobre mí</small>
                  <h1 className="text-xl lg:text-2xl mb-4">Desarrollador Web</h1>
                  <p className="max-md:text-sm max-md:leading-6">
                      Soy un apasionado desarrollador web que actualmente cursa una Licenciatura en
                      Ingeniería Informática en la UATF.
                      Me gusta crear aplicaciones impactantes y fáciles de usar que den vida a las ideas.
                      Mi experiencia abarca desde el desarrollo de aplicaciones, donde me centro en un diseño intuitivo
                      y responsivo, hasta el desarrollo de back-end y móvil, donde se garantice la estabilidad y la eficiencia
                      de los sistemas informáticos.
                      Siempre me entusiasma trabajar en proyectos innovadores que desafíen mis habilidades de
                      resolución de problemas y me ayuden a crecer como desarrollador.
                  </p>
              </div>
              <img src={Profile}
                  className="w-1/3 h-56 lg:h-[400px] rounded-xl object-center object-cover"
                  alt="Yo"/>
          </section>

          <section className="w-4/5 lg:w-2/3 my-12 lg:my-32 mx-auto">
              <h2 className="text-lg lg:text-2xl text-center">Mis habilidades</h2>
              <div className="grid grid-cols-5 justify-center gap-x-24 gap-y-6 mt-16">
                  {
                      skills.map((item, index) => (
                          <CardSkill key={index}
                                     skill={item}/>
                      ))
                  }
              </div>
          </section>
      </>
  )
}