import './Widgets.css';

/**
 *  блок с виджетами
 */

const Widgets = ({children}) => {
    return (
        <section className="widgets">

            {children.map((widget, index) => {
                return (
                    <div className="widgets-container" key={index}>
                        {widget}
                    </div>
                );
            })}

        </section>

    );
}
export {Widgets};