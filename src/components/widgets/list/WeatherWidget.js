import propTypes from "prop-types";
import {TitleLink} from "../../elements/TitleLink";

/**
 *  виджет погоды
 */

const WeatherWidget = (props) => {
    const {
        title,
        averageTemperature,
        morningTemperature,
        daytimeTemperature,
    } = props;

    return (
        <div className="weather-widget">
            <TitleLink title={title} link="/link-to-page"/>
            <div className="weather-widget-degrees">
        <span className="weather-widget-degrees__average">
          {averageTemperature}&deg;
        </span>
                <div className="weather-widget-degrees__in-detail">
          <span className="weather-widget-degrees__in-detail-morning">
            Утром {morningTemperature},
          </span>
                    <span className="weather-widget-degrees__in-detail-afternoon">
            днём {daytimeTemperature}
          </span>
                </div>
            </div>
        </div>
    );
}

export {WeatherWidget};


WeatherWidget.propTypes = {
    daytimeTemperature: propTypes.string,
    averageTemperature: propTypes.string,
    title: propTypes.string,
    morningTemperature: propTypes.string
};