import React, { useState } from 'react';
import "./Banner.css"; 
import "slick-carousel/slick/slick.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import service_1 from "./service_1.png"
import service_2 from "./service_2.png"
import service_3 from "./service_3.png"
import service_4 from "./service_4.webp"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/css/grid";
import "swiper/css/pagination";
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
const Banner = (props) => {
    const imglist=props.imgs;
    return (
        <div >
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={false}
                loop={false}
                grabCursor={false}
                navigation={false}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {imglist.map((item,index)=><SwiperSlide><img
                    className="d-block w-100"
                    src={item}
                    alt="First slide"
                /></SwiperSlide>)}  
            </Swiper>
            <div className='service'>
                <Swiper
                    modules={[Scrollbar]}
                    scrollbar={{
                        hide: false,
                    }}
                    className='mySwiper'
                    breakpoints={
                        {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            }, 530: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            }, 799: {
                                slidesPerView: 3,
                                spaceBetween: 15
                            }, 1075: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            }
                        }
                    }
                >
                    <SwiperSlide style={{ paddingBottom: '12px' }}>
                        <Row >
                            <Col className='col-img' xs='3'>
                                <img className='iconn' src={service_3} />
                            </Col>
                            <Col className='col-text'>
                                <Row>
                                    <p className='top-text'>THIẾT KẾ ĐA DẠNG</p>
                                </Row>
                                <Row>
                                    <p className='bot-text'>Sáng tạo thiết kế của chính bạn</p>
                                </Row>
                            </Col>
                        </Row>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Row>
                            <Col className='col-img' xs='3'>
                                <img className='iconn' src={service_2} />
                            </Col>
                            <Col className='col-text' >
                                <Row>
                                    <h6 className='top-text'>THANH TOÁN TRỰC TUYẾN</h6>
                                </Row>
                                <Row>
                                    <p className='bot-text'>Hỗ trợ nhiều phương thức thanh toán</p>
                                </Row>
                            </Col>
                        </Row>
                    </SwiperSlide><SwiperSlide>
                        <Row>
                            <Col className='col-img' xs='3'>
                                <img className='iconn' src={service_1} />
                            </Col>
                            <Col className='col-text'>
                                <Row>
                                    <h6 className='top-text'>CHẤT LƯỢNG CAO CẤP</h6>
                                </Row>
                                <Row>
                                    <p className='bot-text'>Đa dạng chất liệu phù hợp với nhu cầu</p>
                                </Row>
                            </Col>
                        </Row>
                    </SwiperSlide><SwiperSlide>
                        <Row>
                            <Col className='col-img' xs='3'>
                                <img className='iconn' src={service_4} />
                            </Col>
                            <Col className='col-text'>
                                <Row>
                                    <h6 className='top-text'>ĐẢM BẢO CHẤT LƯỢNG</h6>
                                </Row>
                                <Row>
                                    <p className='bot-text'>Chính sách hỗ trợ đổi trả sản phẩm</p>
                                </Row>
                            </Col>
                        </Row>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default Banner;