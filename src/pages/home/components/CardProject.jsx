import PropTypes from "prop-types";

export const CardProject = ({project}) => {

    const {name, category, image} = project;

    return (
        <div className="bg-secondary-light p-8 rounded-lg overflow-hidden relative h-96">
            <h6 className="font-medium text-lg">{name}</h6>
            <small>{category}</small>
            <img src={image}
                 className="rounded-xl object-cover object-center absolute -bottom-24 right-4 -rotate-12 w-80 h-96 hover:w-96 hover:-right-4 hover:-bottom-20"
                 alt=""/>
        </div>
    );
}

CardProject.propTypes = {
    project: PropTypes.object.isRequired
}