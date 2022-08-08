import './Banner.css';
import propTypes from "prop-types";

/**
 *  вывод баннера
 */


const Banner = (props) => {
    const {
        banner
    } = props;
    return (
        <section className="banner">
            {/*<img src="https://i.picsum.photos/id/147/200/300.jpg?hmac=HvL1R0waHTWxScs3tF6eMlLs2JShbg25KJn03eSoqqo"*/}
            {/*          alt="sea"/>*/}
            <div className="banner-img">
                <img src={banner.img_src} alt={banner.title}/>
            </div>
            <a className="banner-title" href={banner.link}>
                {banner.title}
            </a>
            <div className="banner-text">{banner.text}</div>
        </section>

    );
}

export {Banner};

Banner.propTypes = {
    banner: propTypes.shape({
        id: propTypes.number,
        img_src: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        link: propTypes.string.isRequired,
        text: propTypes.string.isRequired,
    })
};