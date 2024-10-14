import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import './CSS/MainPage_Carousel.css';

export default function MainPage_Carousel() {
    return (
      <div className="carousel-container">
        <MDBCarousel  fade>
          <MDBCarouselItem itemId={1}>
            <img src='./assets/banner1.png' className='d-block carousel-image' alt='...' />
            <MDBCarouselCaption>
              {/* <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              <h5 className='carousel-title'>最新推廣活動</h5>
              <div className="button-group" > {/* Added button group */}
                <button className="btn btn-secondary">客製化學生枱</button>
                <button className="btn btn-secondary">木器</button>
                <button className="btn btn-secondary">Button 3</button>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
    );
}