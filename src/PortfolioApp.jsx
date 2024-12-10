import {AppRouter} from "./router/AppRouter.jsx";
import {Footer, Navbar} from "./components";

const PortfolioApp = () => {
    return (
        <>
            <Navbar/>
            <main>
                <AppRouter/>
            </main>
            <Footer />
        </>
    )
}

export default PortfolioApp
