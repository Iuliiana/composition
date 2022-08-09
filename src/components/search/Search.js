import './Search.css';
import propTypes from "prop-types";

/**
 *  поисковая строка и категории
 */

const Search = (props) => {
    const {
        searchCategories,
        searchBarLabel,
        searchBtnName,
        searchAdvice,
        searchExample,
    } = props;
    return (
        <div className="search">
            <nav className="search-nav">
                <ul className="search-nav-menu">
                    {searchCategories.map((category, index) => {
                        return (
                            <li className="search-nav-menu__item active" key={index}>
                                <a href="#0" className="search-nav-menu__item-link">
                                    {category}
                                </a>
                            </li>
                        );
                    })}
                    <li className="search-nav-menu__item">
                        <a href="#0" className="search-nav-menu__item-link">
                            ещё
                        </a>
                    </li>
                </ul>
            </nav>

            <form className="search-bar">
                <label className="search-bar-label" htmlFor="search-bar-input">
                    {searchBarLabel}
                </label>
                <input className="search-bar-input" id="search-bar-input" type="text" name="search-bar-input" required/>
                <button className="search-bar-button" type="submit">
                    {searchBtnName}
                </button>
            </form>

            <p className="search-advice">
                {searchAdvice}
                <span className="search-advice__example">
          &nbsp;{searchExample}
        </span>
            </p>
        </div>
    );
}
export {Search};
Search.propTypes = {
    searchCategories: propTypes.array,
    searchBarLabel: propTypes.string,
    searchBtnName: propTypes.string,
    searchAdvice: propTypes.string,
    searchExample: propTypes.any,
};


