/*eslint-disable*/
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import ShoppingCart from '@material-ui/icons/ShoppingCart';

// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';

import productStyle from 'assets/jss/material-kit-pro-react/views/productStyle.js';
// Sub components
import ProductServices from './Components/ProductServices';

// images
import ProductDetail from './Components/ProductDetail';
import RelatedProducts from './Components/RelatedProducts';

const useStyles = makeStyles(productStyle);

export default function ProductDetailPage(props) {
  const { formData } = props.location;
  console.log(formData);

  const classes = useStyles();

  return (
    <div className={classes.productPage}>
      <Header
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: 'info'
        }}
      />
      <Parallax image={require('assets/img/bg6.jpg')} filter="info" className={classes.pageHeader}>
        <div className={classes.container}>
          <GridContainer className={classes.titleRow}>
            <GridItem md={4} className={classes.mlAuto}>
              <Button color="white" className={classes.floatRight}>
                <ShoppingCart /> 0 items
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.section, classes.sectionGray)}>
        <div className={classes.container}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <ProductDetail formData={formData} />
          </div>
          <ProductServices />
          <RelatedProducts />
        </div>
      </div>
    </div>
  );
}
