import './News.css';
import {NewsNavigation} from "./tools/NewsNavigation";
import {NewsList} from "./tools/NewsList";

/**
 *  вывод блока новостей
 */


const News = (props) => {
    const {
        newsNav,
        newsList
    } = props;
    return (
        <section className="news">
            <NewsNavigation newsNav={newsNav}/>
            <NewsList newsList={newsList}/>
        </section>

    );
}

export {News};