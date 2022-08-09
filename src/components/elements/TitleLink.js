import propTypes from "prop-types";

/**
 *  залоговок c сылкой
 */

const TitleLink = (props) => {
    const {title, link} = props;
    return (
        <h3 className="heading">
            <a href={link} className="heading__link">
                {title}
            </a>
        </h3>
    );
}
export {TitleLink};

TitleLink.propTypes = {
    title: propTypes.string,
    link: propTypes.string,
};