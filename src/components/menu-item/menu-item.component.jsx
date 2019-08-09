import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
 
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

// Link is not for programmatic navigation. It is for just like the hyperlinks that you used to have for traditional web applications but in case of SPAs we need this for client side routing since routing is handled by React Router Dom. withRouter.

// withRouter has a special purpose. You can get access to the history object's properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders. So whenever you need routing to occur after certain logic in a nested component (not a top level routable component) but it is not under the control of the Router you can make use of withRouter to get the router props in your wrapped component and then do redirection if required based on some logic.