import propTypes from "prop-types";
import {TitleLink} from "../../elements/TitleLink";

/**
 *  виджет посещенных страниц
 */

const VisitedWidget = (props) => {
    const {title, items} = props;
    return (
        <div className="visited-widget">
            <TitleLink title={title} link="/link-to-page"/>

            <ul className="visited-widget__list">
                {items.map(item => {
                    return (
                        <li key={item.id}>
                            <a className="visited-widget__name" href={item.slug}>
                                <b>{item.name}</b> — {item.description}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export {VisitedWidget};

VisitedWidget.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number,
            slug: propTypes.string,
            name: propTypes.string,
            description: propTypes.string,
        })
    ),
    title: propTypes.string
};
