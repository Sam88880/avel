import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';  // Optional for managing meta tags
import {
  MDBCard,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

function chunk(array, size) {
  const chunked_arr = [];
  for (let i = 0; i < array.length; i += size) {
    chunked_arr.push(array.slice(i, i + size));
  }
  return chunked_arr;
}

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { categoryName } = useParams();
  const groupedProducts = chunk(products, 6);

  useEffect(() => {
    setIsLoading(true);
    
    // Fetch all products
    axios.get(`http://54.208.97.247:3000/product?searchTerm=${categoryName}`)  
      .then(response => {
        console.log(response.data);
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError(error);
        setIsLoading(false);
      });
  }, [categoryName]);  // Include categoryName in dependency array to fetch on change

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data!</div>;

  return (
    <div>
      <Helmet>
        <title>{`Products in ${categoryName}`}</title>
      </Helmet>

      <h1>{`Products in ${categoryName}`}</h1>
  
      {groupedProducts.map((group, index) => (
        <MDBRow key={index}> {/* Each row contains up to 6 products */}
          {group.map(product => (
            <MDBCol key={product.ID} sm='2'> {/* Each product takes up one-sixth of the row */}
              <MDBCard>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                  {/* Fetch image dynamically for each product */}
                  <MDBCardImage 
                    src={`http://54.208.97.247:3000/image/${product.ID}.jpg`} // Use imageKey from the product to get the correct image from API
                    fluid 
                    position='top' 
                    style={{ width: '200px', height: '200px' }}
                  />
                  <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>{`產品 ${product.ID}`}</MDBCardTitle>
                  <MDBCardText>
                    {product.Description}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      ))}
    </div>
  );
}

export default ProductPage;