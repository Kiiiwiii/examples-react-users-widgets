import * as React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  public render() {
    return (
      <div>
        <Link to="/blog">Blog</Link>
      </div>
    );
  }
}

export default Home;
