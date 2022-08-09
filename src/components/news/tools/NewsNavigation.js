import propTypes from "prop-types";
import {LiItemLink} from "../../elements/LiItemLink";

/**
 *  вывод навигации новостей
 */

const NewsNavigation = (props) => {
    const {newsNav} = props;

    return (
        <>
            <nav className="news-nav">
                {newsNav.map((news) => {
                    return (
                        <LiItemLink key={news.id}
                                    liItemClass="news-nav__item"
                                    linkClass="news-nav__link"
                                    linkHref={news.news_link}
                                    linkText={news.title}>
                        </LiItemLink>
                    )
                })}
            </nav>
            <span className="news-nav__time">31 июля, среда 02:32</span>
        </>

    )
}

export {NewsNavigation};

NewsNavigation.propTypes = {
    newsNav: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            title: propTypes.string.isRequired,
            link: propTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};