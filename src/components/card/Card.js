import propTypes from "prop-types";
import './Card.css';

const Card = (props) => {
    const {width, children, title, text, buttonName} = props;
    return (
        <div className="card" style={{width: width}}>
            {children}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#0" className="btn btn-primary">{buttonName}</a>
            </div>
        </div>
    )
        ;
}

export {Card};

Card.defaultProps = {
    width: '18rem'
}


Card.propTypes = {
    width: propTypes.string,
    title: propTypes.string,
    text: propTypes.string,
    buttonName: propTypes.string,
    children: propTypes.any,
};