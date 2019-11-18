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
        <Route path="/detail">{/* redirect 시켜야 함 */}</Route>
        <Route path="/bookinglogin">
          {/* 완성됨 */}
          <Header />
          <LoginForm />
          <Footer top={false} />
        </Route>
        <Route path="/myreservation">
          {/* 완성 됨 */}
          <NavBar isLogoutable />
          <ReservationContainer />
          <Footer />
        </Route>
        <Route path="/reserve/:displayInfoId">
          {/* 완성됨 */}
          <NavBar isMain={false} />
          <ReserveContainer />
          <Footer />
        </Route>
        <Route path="/review/:displayInfoId">
          {/* 완성됨 */}
          <NavBar isMain={false} />
          <ReviewProvider />
          <Footer />
        </Route>
        <Route path="/reviewwrite/:productId">
          <NavBar isMain={false} />
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
