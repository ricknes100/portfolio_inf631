import {Route, Routes} from "react-router-dom";
import {HomePage, ProjectsPage, AboutPage, ContactPage} from "../pages";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="proyectos" element={<ProjectsPage/>}/>
                <Route path="sobre-mi" element={<AboutPage/>}/>
                <Route path="contacto" element={<ContactPage/>}/>
            </Routes>
        </>
    )
}