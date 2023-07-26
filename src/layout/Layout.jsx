import React from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import PropTypes from 'prop-types';
function Layout({children}){
    return(
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}
Layout.defaultProps = {
    children: {},
  };
  
  Layout.propTypes = {
    children: PropTypes.objectOf(PropTypes.any),
  };
export default Layout;