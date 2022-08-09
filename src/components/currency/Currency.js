import './Currency.css';
import propTypes from "prop-types";

/**
 *  вывод блока курсов валюты
 */

const Currency = (props) => {
    const {
        currency
    } = props;
    return (
        <section className="currency">
            <ul>
                {
                    currency.map(item => {
                        return (
                            <li className="currency__item" key={item.id}>
                                <span className="currency__item-name">{item.name}</span>
                                <span className="currency__item-value">{item.value}</span>
                                <span className="currency__item-delta">{item.delta}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <a href="#0" className="currency__link-more">...</a>
        </section>

    );
}

export {Currency};

Currency.propTypes = {
    currency: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            name: propTypes.string.isRequired,
            value: propTypes.string.isRequired,
            delta: propTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};
