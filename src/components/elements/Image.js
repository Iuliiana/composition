import propTypes from "prop-types";

/**
 * отображение картинки
 */

const Image = (props) => {
    const {classBlock, classImg, src, alt} = props;
    return (
        <div className={classBlock}>
            <img src={src} className={classImg} alt={alt}/>
        </div>
    );
}
export {Image};

Image.propTypes = {
    classBlock: propTypes.string,
    classImg: propTypes.string,
    src: propTypes.string,
    alt: propTypes.string
};