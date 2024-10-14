import React, { useState } from 'react';
import {
  MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBIcon,
  MDBNavbarNav, MDBNavbarItem, MDBDropdown, MDBDropdownToggle,
  MDBDropdownMenu, MDBDropdownItem, MDBCollapse
} from 'mdb-react-ui-kit';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import CategoryPage from './components/category';  // Make sure this import path is correct
import Carousel from './components/MainPage_Carousel';
import Search from './components/MainPage_Search';

function App() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <BrowserRouter>
      <div>
        {/* Enhanced Navbar */}
        <MDBNavbar sticky expand='lg' light bgColor='primary'>
          <MDBContainer fluid>
            {/* Brand Name with better typography */}
            <MDBNavbarBrand href='/' style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}>
              康保企業有限公司
            </MDBNavbarBrand>

            {/* Navbar Toggler for mobile view */}
            <MDBNavbarToggler
              aria-controls='navbarSupportedContent'
              aria-expanded={openBasic}
              aria-label='Toggle navigation'
              onClick={() => setOpenBasic(!openBasic)}
            >
              <MDBIcon icon='bars' fas style={{ color: 'white' }} />
            </MDBNavbarToggler>

            {/* Collapse for responsive design */}
            <MDBCollapse navbar open={openBasic}>
              <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                {/* Dropdown for 檯類 */}
                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link text-white'>
                      檯類
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/學生枱">學生檯</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/培訓枱_摺枱">培訓枱/摺枱</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/工作檯">工作檯</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/老師枱_美勞枱_實驗室枱">老師枱/美勞枱/實驗室枱</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/幼稚枱">幼兒枱</Link>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
                {/* Add more items to the navbar here if needed */}
                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link text-white'>
                      椅類
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/學生枱">學生椅</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/培訓枱_摺枱">辦公椅</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/工作檯">膠殼辦公椅</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/老師枱_美勞枱_實驗室枱">會客椅</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/幼稚枱">塑鋼椅</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/幼稚枱">手寫版椅</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/幼稚枱">排椅</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/幼稚枱">摺椅</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/幼稚枱">兒童椅</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/幼稚枱">實驗室椅</Link>
                      </MDBDropdownItem>

                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link text-white'>
                      柜類
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/學生枱">木柜</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/培訓枱_摺枱">鐵柜</Link>
                      </MDBDropdownItem>

                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link text-white'>
                      其他
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/學生枱">膠文件箱</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/培訓枱_摺枱">手推車</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/工作檯">台階</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/老師枱_美勞枱_實驗室枱">戶外檯椅</Link>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link text-white'>
                      木柜
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/學生枱">木柜</Link>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>


                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link text-white'>
                      展版
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/學生枱">白板</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/學生枱">展板（全包型）</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/學生枱">展板（w型）</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/學生枱">展板（百合型）</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/學生枱">壁告板</Link>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>



                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link text-white'>
                      屏風
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/category/學生枱">屏風</Link>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>

              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <Search />
            </>
          } />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;