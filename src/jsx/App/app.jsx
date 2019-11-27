import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './style.css';
import Layout from '../Layout';
import Header from '../Header';
import LoginForm from '../LoginForm';
import Footer from '../Footer';
import NavBar from '../NavBar';
import DetailContainer from '../DetailContainer';
import ReserveContainer from '../ReserveContainer';
import ReservationContainer from '../ReservationContainer';
import PromotionImage from '../PromotionImage';
import ReviewEdit from '../ReviewEdit';
import ReviewProvider from '../ReviewProvider';
import MainContainer from '../MainContainer';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/detail/:displayInfoId">
          <NavBar isTransparent />
          <DetailContainer />
          <Footer />
        </Route>
        <Route path="/bookinglogin">
          <Header />
          <LoginForm />
          <Footer />
        </Route>
        <Route path="/myreservation">
          <NavBar isLogoutable />
          <ReservationContainer />
          <Footer />
        </Route>
        <Route path="/reserve/:displayInfoId">
          <ReserveContainer />
          <Footer />
        </Route>
        <Route path="/review/:displayInfoId">
          <ReviewProvider />
          <Footer />
        </Route>
        <Route path="/reviewwrite/:productId">
          {/* reviewEdit가 미완 */}
          <ReviewEdit />
          <Footer />
        </Route>
        <Route exact path="/">
          <NavBar />
          <PromotionImage />
          <MainContainer />
          <Footer />
        </Route>
        <Route path="/">
          <NavBar />
          {/* 404 not found인걸 나타내게 */}
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>,
  document.getElementById('content'),
);
