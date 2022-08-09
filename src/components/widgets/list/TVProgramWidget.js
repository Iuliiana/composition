import propTypes from "prop-types";
import {TitleLink} from "../../elements/TitleLink";

/**
 *  виджет телепрограмм
 */

const TVProgramWidget = (props) => {
    const {title, items} = props;
    return (
        <div className="tv-widget">
            <TitleLink title={title} link="/link-to-page"/>

            <ul className="tv-widget__list">
                {items.map(item => {
                    return (
                        <li key={item.id}>
                            <p className="tv-widget__time">{item.time}</p>
                            <a className="tv-widget__name" href={item.slug}>{item.name}</a>
                            <a className="tv-widget__channel" href={item.channel_link}>{item.channel}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export {TVProgramWidget};

TVProgramWidget.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number,
            slug: propTypes.string,
            name: propTypes.string,
            channel: propTypes.string,
            channel_link: propTypes.string,
            time: propTypes.string,
        })
    ),
    title: propTypes.string
};