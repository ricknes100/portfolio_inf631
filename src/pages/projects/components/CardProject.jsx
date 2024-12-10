import {useState} from "react";
import PropTypes from 'prop-types';
import {ModalProjectDetail} from "./ModalProjectDetail.jsx";
import {NavigateNext} from "../../../components/Icons/index.js";

export const CardProject = ({project}) => {

    const {title, description, image} = project;
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    return (
        <>
            <div className="flex flex-col gap-4 bg-secondary-light rounded-xl p-6">
                <img src={image}
                     className="w-full h-48 rounded-md object-cover object-top shadow-sm cursor-pointer"
                     alt="image project"
                     onClick={openModal}/>
                <div className="flex flex-col gap-2.5 items-start">
                    <h6 className="font-semibold cursor-pointer max-md:text-sm" onClick={openModal}>
                        {title}
                    </h6>
                    <p className="text-xs sm:text-sm text-ellipsis line-clamp-3 font-light">{description}</p>
                    <button className="text-primary text-sm font-medium inline-flex items-center fill-primary hover:font-semibold" onClick={openModal}>
                        Ver proyecto
                        <NavigateNext />
                    </button>
                </div>
            </div>

            <ModalProjectDetail isOpen={isOpen}
                                setIsOpen={setIsOpen}/>
        </>
    )
}

CardProject.propTypes = {
    project: PropTypes.object.isRequired
}
