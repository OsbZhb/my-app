import './style.scss';
import smallFriends from '../../img/smallFriends.jpg';

const SmallFriends = () => {
    return (
        <div className="container">
        <section className="section-smallFriends">
        <div className="smallFriends-blockOne">
            <h1 className="blockOne-title">Маленькое существо для самой большой дружбы</h1>
            <p className="blockOne-subtitle">У эублефаров нежная бархатистая кожа, особенно, на шее. Они совсем не склизкие, а наоборот, очень приятные на ощупь. Поэтому их очень приятно держать в руках. На теле у эублефаров присутствуют «пупырышки», что делает их кожу еще более интересной.
            </p>
            <div className="line-block">
                <p className="line01">01</p>
                <div className="line"></div>
                <p className="line03">03</p>
            </div>
        </div>
        <div className="images_smallFriends">
            <img 
                src={smallFriends}
                alt="#" 
            />
        </div>
    </section>
    </div>
    );
}
 
export default SmallFriends;