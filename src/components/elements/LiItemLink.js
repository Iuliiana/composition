import propTypes from "prop-types";

/**
 * отображение элемента списка с сылкой
 */

const LiItemLink = (props) => {
    const {liItemClass, linkClass, linkHref, linkText, children} = props;
    return (
        <li className={liItemClass}>
            {children}
            <a href={linkHref} className={linkClass}>
                {linkText}
            </a>
        </li>
    );
}
export {LiItemLink};

LiItemLink.propTypes = {
    liItemClass: propTypes.string,
    linkClass: propTypes.string,
    linkHref: propTypes.string,
    linkText: propTypes.string,
    children: propTypes.any
};