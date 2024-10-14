import React, { useState, useEffect } from 'react';
import { Container, Row, Col,FormGroup,Input,InputGroup,InputGroupText } from 'reactstrap';
import { FaSearch } from 'react-icons/fa'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
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
import { Descriptions } from 'antd';


function chunk(array, size) {
  const chunked_arr = [];
  for (let i = 0; i < array.length; i += size) {
    chunked_arr.push(array.slice(i, i + size));
  }
  return chunked_arr;
}


export default function MainPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(isOpen => !isOpen);
  };

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const groupedProducts = chunk(products, 4);


  const handleSearch = (event) => {
    if (event) {
      event.preventDefault();
    }
    const input = document.getElementById('searchInput').value.trim();
    console.log("Form submitted with searchTerm:", input);
    setSearchTerm(input); // Update searchTerm to trigger useEffect
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  };



  useEffect(() => {
    fetch(`http://54.208.97.247:3000/search?searchTerm=${encodeURIComponent(searchTerm)}`)
        .then(response => response.json())
        .then(data => {
            console.log("Data fetched from backend:", data); // Log data to the console
            if (Array.isArray(data)) { // Ensure the data is an array
                setProducts(data);

            } else {
                setProducts([]); // Set to empty array if data is not an array
            }
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            setProducts([]); // Ensure products is set to an empty array on error
        });
}, [searchTerm]);

  return (
    <div style={{ display: 'flex', padding: '20px', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div
        style={{
          flex: isSidebarOpen ? '0 0 240px' : '0 0 100px', // 240px when open, 50px when closed
          transition: 'flex-basis 0.3s ease',
        //   backgroundColor: '#f4f4f4',
          overflow: 'hidden',
           padding: '10px',
           
        }}
      >
        <Button variant="outline-secondary" onClick={toggleSidebar} style={{ margin: '10px', borderRadius: '20px'}}>
          {isSidebarOpen ? 'Close' : 'Open'}
        </Button>

        {isSidebarOpen && (
          <div style={{ padding: '10px' }}>
            <h5>搜尋</h5>
            <div>最新產品</div>
            <div>近期大熱</div>
            <div>search by room</div>
     
          </div>
        )}
      </div>

      {/* Main content area */}
      <div style={{ flex: '1', padding: '20px' }}>
      <FormGroup style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <InputGroup>
      <Button onClick={handleSearch} style={{ border: 0 }}>
            <FaSearch /> {/* Search icon */}
          </Button>
        <Input 
          type="text" 
          name="search" 
          id="searchInput" 
          placeholder="Type here to search" 
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />

      </InputGroup>
      <div className="custom-select-wrapper" style={{ width: '200px' }}>
        <div className="custom-select">
          <select>
            <option>Recommended</option>
            <option>Most Recent</option>
            <option>Highest Rated</option>
          </select>
        </div>
      </div>

    </FormGroup>
        {groupedProducts.map((group, index) => (
        <MDBRow key={index}> {/* Each row contains up to 3 products */}
          {group.map(product => (
            <MDBCol key={product.ID} sm='3'> {/* Each product takes up one-third of the row */}
              <MDBCard>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                  <MDBCardImage src={`http://54.208.97.247:3000/image/${encodeURIComponent(product.ID)}.jpg`} fluid  position='top' style={{ width: '200px', height: '200px' }}/>
                  <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>產品  {product.ID}</MDBCardTitle>
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
    </div>
  );
}