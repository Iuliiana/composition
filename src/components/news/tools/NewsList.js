import propTypes from "prop-types";
import {LiItemLink} from "../../elements/LiItemLink";
import {Image} from "../../elements/Image";

/**
 *  вывод списка новостей
 */


const NewsList = (props) => {
    const {newsList} = props;
    return (
        <div className="news-list">

            {newsList.map((news) => {
                return (<LiItemLink
                    key={news.id}
                    liItemClass="news-list__item"
                    linkClass="news-list__link"
                    linkHref={news.news_link}
                    linkText={news.title}>
                    <Image
                        src={news.icon_link}
                        alt={news.title}/>
                </LiItemLink>)
            })}
        </div>
    )
        ;
}

export {NewsList};

NewsList.propTypes = {
    newsList: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            title: propTypes.string.isRequired,
            news_link: propTypes.string.isRequired,
            icon_link: propTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};