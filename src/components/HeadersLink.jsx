import React from 'react';

export default function HeadersLink() {
  return (
    <div className="headerLinks">
      <span className="user">Not logged in</span> <a href="#">Talk</a>{' '}
      <a href="#">Contributions</a> <a href="#">Create account</a>{' '}
      <a href="#">Log in</a>
    </div>
  );
}
