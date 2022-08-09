import propTypes from "prop-types";
import {TitleLink} from "../../elements/TitleLink";

/**
 *  виджет карты
 */

const MapWidget = (props) => {
    const {title, items} = props;
    return (
        <div className="map-widget">
            <TitleLink title={title} link="/link-to-page"/>

            <ul className="map-widget__list">
                {items.map(item => {
                    return (
                        <li key={item.id}>
                            <a className="map-widget__name" href={item.slug}>{item.name}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export {MapWidget};

MapWidget.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number,
            slug: propTypes.string,
            name: propTypes.string,
        })
    ),
    title: propTypes.string
};