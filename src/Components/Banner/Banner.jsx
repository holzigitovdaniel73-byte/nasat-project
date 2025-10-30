import React, {useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Banner.scss"
import server from "../../assets/image/image.png"
import { useSelector, useDispatch } from 'react-redux';
import { getCategory } from '../../redux/Thunk/thunk';

function Banner() {
    const {category, loading, error} = useSelector((state) => state.category)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategory())
    },[])
    console.log(category);
    
    return (
        <div className='banner'>
            <div className='sidebar'>
                <ul >    
                    <li>Woman’s Fashion</li>
                    <li>Men’s Fashion</li>
                    {category?.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))}
                    {/* <li>Electronics</li>
                    <li>Home & Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li>Baby’s & Toys</li>
                    <li>Groceries & Pets</li>
                    <li>Health & Beauty</li> */}
                </ul>
            </div>
            <div className='carousel'>
                <Carousel>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="First slide" /> */}
                        <img src={server} alt="" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Second slide" /> */}
                        <img className='image-01' src="https://www.unisender.com/wp-content/uploads/2022/10/6-1.jpg" alt="" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Third slide" /> */}
                        <img className='image-02' src="https://outdoor.ru/upload/iblock/78b/78b72e334e10cc9056baf4bed14caa69.jpg" alt="" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Banner
