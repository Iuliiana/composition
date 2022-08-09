import './Ads.css';
import propTypes from "prop-types";

/**
 *  вывод рекламных объявлений
 */


const Ads = (props) => {
    const {
        ads
    } = props;
    return (
        <section className="ads">
            <div className="ads__img">
                <img src={ads.img_src} alt={ads.title}/>
            </div>
            <a className="ads__title" href={ads.link}>
                {ads.title}
            </a>
            <div className="ads__text">{ads.text}</div>
        </section>

    );
}

export {Ads};

Ads.propTypes = {
    ads: propTypes.shape({
        id: propTypes.number,
        img_src: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        link: propTypes.string.isRequired,
        text: propTypes.string.isRequired,
    })
};