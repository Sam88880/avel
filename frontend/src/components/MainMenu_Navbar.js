import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CategoryPage from './category'; // Component to display products
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function App() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <BrowserRouter>
      <MDBNavbar sticky expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>康保企業有限公司</MDBNavbarBrand>
          <MDBNavbarToggler aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation' onClick={() => setOpenBasic(!openBasic)}>
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link'>
                    檯類
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <Link to="/category">學生檯</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link to="/category">培訓枱/摺枱</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link to="/category">塑膠面工作檯</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link to="/category">老師枱/美勞枱/實驗室枱</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link to="/category">幼稚枱</Link>
                    </MDBDropdownItem>
                    {/* More links can be added here */}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              {/* Additional navigation items can be added here */}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      {/* Define your routes outside of the navigation context */}
      <Routes>
        <Route path="/category" element={<CategoryPage />} />
        {/* Other routes here */}
      </Routes>
    </BrowserRouter>
  );
}