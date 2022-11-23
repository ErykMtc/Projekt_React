import "./News.css";
import Container from 'react-bootstrap/Container';
import temp from '../img/temp.jpeg';

export default function News() {
    return (
        <div className="news-main">
            
            <Container>
                <h2>Tytuł ogłoszenia</h2>
                <img className="article-img" src={temp} alt="First" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis est ornare odio pellentesque cursus. Sed maximus arcu ac tellus bibendum sodales. Praesent hendrerit pharetra posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras accumsan laoreet fermentum. Donec hendrerit faucibus nisl id gravida. Nullam nisi libero, efficitur sed dignissim nec, sollicitudin quis risus. Proin ullamcorper sagittis convallis. Nullam non semper massa. Sed ac semper arcu, in lobortis sapien. Maecenas ac nunc non leo malesuada efficitur non eget diam. Ut ac tellus mattis, luctus arcu in, tristique erat. Sed eget pulvinar massa.

                    Ut et convallis lectus, sed ornare justo. Nullam pretium purus vel malesuada pellentesque. Vestibulum pulvinar nunc magna, et varius ipsum faucibus sed. Praesent tincidunt ullamcorper velit sit amet pharetra. Nulla facilisi. Vestibulum vel nunc ultrices, volutpat libero vitae, commodo odio. Aenean in massa dolor. Nunc placerat arcu libero, et fermentum odio iaculis in. Quisque faucibus, felis eget convallis eleifend, sapien augue vestibulum orci, consequat venenatis urna dui ut elit. Nulla lobortis, enim ut aliquam porta, leo urna gravida nunc, vel dictum lectus ante non ex. Morbi molestie ullamcorper bibendum. Vivamus vel auctor nisi. Curabitur vestibulum mi in iaculis egestas. Quisque mollis ante ipsum, sed.</p>
            </Container>
        </div>
    )
}