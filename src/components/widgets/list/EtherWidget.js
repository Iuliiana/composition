import propTypes from "prop-types";
import {TitleLink} from "../../elements/TitleLink";

/**
 *  виджет эфира
 */

const EtherWidget = (props) => {
    const {title, items} = props;

    return (
        <div className="ether-widget">
            <TitleLink title={title} link="/link-to-page"/>

            <ul className="ether-widget__list">
                {items.map(item => {
                    return (
                        <li key={item.id}>
                            <div className="icon-play"/>
                            <a className="ether-widget__name" href={item.slug}>{item.name}</a>
                            <a className="ether-widget__channel" href={item.channel_link}>{item.channel}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export {EtherWidget};

EtherWidget.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number,
            slug: propTypes.string,
            name: propTypes.string,
            channel_link: propTypes.string,
            channel: propTypes.string,
        })
    ),
    title: propTypes.string
};