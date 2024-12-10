import PropTypes from "prop-types";
import {NavigateNext} from "../../../components/Icons";

export const CardService = ({service}) => {

    const {title, projects, image} = service;

    return (
        <div className="flex items-center space-x-16">
            <img src={image}
                 className="size-20 rounded-lg object-cover object-center"
                 alt=""/>
            <div className="flex-1 flex items-center justify-between">
                <div>
                    <h6 className="font-medium text-lg">{title}</h6>
                    <small>{projects} Proyectos</small>
                </div>
                <div className="fill-white">
                    <NavigateNext/>
                </div>
            </div>
        </div>
    );
}

CardService.propTypes = {
    service: PropTypes.object.isRequired,
}
