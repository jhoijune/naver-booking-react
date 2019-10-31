import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './style.css';
import Layout from '../Layout';
import Header from '../Header';
import LoginForm from '../LoginForm';
import Footer from '../Footer';
import NavBar from '../NavBar';
import DetailContainer from '../DetailContainer';
import ReservationContainer from '../ReservationContainer';
import PromotionImage from '../PromotionImage';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/detail/:displayInfoId">
          <NavBar isTransparent />
          {/* <DetailContainer/> 미완성 */}
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
          <NavBar isMain={false} />
          {/* container */}
          <Footer />
        </Route>
        <Route path="/review/:displayInfoId">
          <NavBar isMain={false} />
          {/* reviewForm */}
          <Footer />
        </Route>
        <Route path="/reviewwrite/:productId">
          <NavBar isMain={false} />
          {/*reviewwirteform */}
          <Footer />
        </Route>
        <Route exact path="/">
          <NavBar />
          <PromotionImage />
          {/* 상품 목록 컨테이너 */}
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
