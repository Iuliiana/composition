import {
    currencyData,
    data,
    ether,
    mapData,
    newsData,
    newsNav,
    searchCategories,
    TVPrograms,
    visitedPages
} from "../data/data";
import {News} from "../components/news/News";
import {Ads} from "../components/ads/Ads";
import {Currency} from "../components/currency/Currency";
import {Search} from "../components/search/Search";
import {Image} from "../components/elements/Image";
import {Widgets} from "../components/widgets/Widgets";
import {WeatherWidget} from "../components/widgets/list/WeatherWidget";
import {MapWidget} from "../components/widgets/list/MapWidget";
import {EtherWidget} from "../components/widgets/list/EtherWidget";
import {VisitedWidget} from "../components/widgets/list/VisitedWidget";
import {TVProgramWidget} from "../components/widgets/list/TVProgramWidget";


const Decompositionpage = () => {
    return (
        <>
            <header>
                <div className="left-wrapper">
                    <News newsNav={newsNav} newsList={newsData}/>
                    <Currency currency={currencyData}/>
                </div>

                <div className="right-wrapper">
                    <Ads ads={data}/>
                </div>
            </header>
            <section className="content">
                <Search
                    searchCategories={searchCategories}
                    searchBarLabel="Яндекс"
                    searchBtnName="Найти"
                    searchAdvice="Найдётся всё. Например,"
                    searchExample="фаза луны сегодня"
                />
                <Image
                    classBlock="banner"
                    classImg="banner-image"
                    src="https://i.picsum.photos/id/147/200/300.jpg?hmac=HvL1R0waHTWxScs3tF6eMlLs2JShbg25KJn03eSoqqo"
                    alt="Plug"
                />
            </section>
            <footer>
                <Widgets>
                    <WeatherWidget
                        title="Погода"
                        averageTemperature="+17"
                        morningTemperature="+17"
                        daytimeTemperature="+20"
                    />
                    <MapWidget
                        title="Карта Германии"
                        items={mapData}
                    />
                    <EtherWidget
                        title="Эфир"
                        items={ether}
                    />
                    <VisitedWidget
                        title="Посещаемое"
                        items={visitedPages}
                    />
                    <TVProgramWidget
                        title="Телепрограмма"
                        items={TVPrograms}
                    />
                </Widgets>
            </footer>
        </>

    );
}

export {Decompositionpage};