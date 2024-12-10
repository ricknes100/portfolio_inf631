import PropTypes from "prop-types";

export const CardSkill = ({skill}) => {

    const {name, logo} = skill;

    return (
        <div className="w-36 lg:w-48 flex flex-col space-y-4 bg-secondary-light shadow-lg rounded-lg items-center p-8">
            <img src={logo}
                 className="size-16 object-contain object-center"
                 alt="logo"/>
            <h6 className="font-semibold max-md:text-sm text-[15px]">{name}</h6>
        </div>
    )
}

CardSkill.propTypes = {
    skill: PropTypes.object.isRequired
}