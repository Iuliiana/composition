import {Card} from "../components/card/Card";
import {ImageTop} from "../components/card/tools/ImageTop";

const Cardspage = () => {
    return (
        <Card
            width="18rem"
            title="Card title"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            buttonName="Go somewhere">
            <ImageTop
                src="https://i.picsum.photos/id/147/200/300.jpg?hmac=HvL1R0waHTWxScs3tF6eMlLs2JShbg25KJn03eSoqqo"
                alt="sea"
            />
        </Card>
    );
}

export {Cardspage};
