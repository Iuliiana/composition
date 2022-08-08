import propTypes from "prop-types";


const ImageTop = (props) => {
    const {src, alt} = props;
    return (
        <img src={src} className="card-img-top" alt={alt}/>
    );
}
export {ImageTop};

ImageTop.propTypes = {
    src: propTypes.string,
    alt: propTypes.string
};