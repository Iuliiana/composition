import newsNav from "../data/newsNav";
import newsData from "../data/newsData";
import {News} from "../components/news/News";
import {Banner} from "../components/banner/Banner";


const Decompositionpage = () => {
    return (
        <header>
            <News newsNav={newsNav} newsList={newsData}/>
            <Banner/>
        </header>
    );
}

export {Decompositionpage};