import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './cookiebanner.scss';


function CookieBanner() {
  const [cookieState, setCookieState] = useState();
  const [visible, setVisible] = useState(true);
  const handleCookiePrivacy = (response) => {
    setVisible(false);
    setCookieState(response);
  }
  return (
    <div>
      {(visible) &&
        <div className='CookieBanner'>
          <Row role="region" aria-label="Cookie Banner">
            <Col md={2} lg={2} />
            <Col md={8} lg={8} >
              <h3>Privacy preferences</h3>
              <div className="CookieBannerContent">
                <p className="cookieContent1"> We use some essential cookies to make this service work. </p>
                <p className="cookieContent2"> We&apos;d also like to set analytics cookies so we can understand how people use the service and make improvements. </p>
              </div>
              <div >
                <button className="cookie_consent accept" value="allowed" onClick={() => { handleCookiePrivacy('accepted'); }} aria-label="Accept analytics cookies">Accept analytics cookies</button>
                <button className="cookie_consent reject" type="submit" value="disallowed" onClick={() => { handleCookiePrivacy('rejected') }} aria-label="Reject analytics cookies">Reject analytics cookies</button>
              </div>
            </Col>
            <Col md={2} lg={2} />
          </Row>
        </div>}
    </div>
  );
}

export default CookieBanner;
