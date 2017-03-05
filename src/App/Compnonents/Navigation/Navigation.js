/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Navigation.scss';
import {Link} from 'react-router';

function Navigation({ className, user }) {
  if (user == null || user.user == null) {
    return (
      <div className={cx(s.root, className)} role="navigation">
        <Link to={"/upload/resume"} >Upload</Link>
        <Link to={"/login"} >Login</Link>
        <Link to={"/admin"} >Admin</Link>
        <span className={s.spacer}> | </span>
        <Link className={cx(s.link, s.highlight)} to="/login">Log in</Link>
      </div>
    );
  }
  return (
    <div className={cx(s.root, className)} role="navigation">
      <Link to={"/upload/resume"} >Upload</Link>
      <Link to={"/login"} >Login</Link>
      <Link to={"/admin"} >Admin</Link>
      <span className={s.spacer}> | </span>
      <div className={cx(s.link, s.highlight)} >
        <Link className={s.username} to={`/user/${user.user.id}`}>
          <span> {user.user.username}</span>
          <img
            role="presentation"
            className={s.avatar}
            height="32px"
            width="32px"
            src={`https://discordapp.com/api/users/${user.user.id}/avatars/${user.user.avatar}.jpg`}

          />
        </Link>
        <a className={cx(s.link, s.highlight)} href="/logout">Log out</a>
      </div>
    </div>
  );
  /*
  return (
    <div className={cx(s.root, className)} role="navigation">
      <Link className={s.link} to="/about">About</Link>
      <Link className={s.link} to="/contact">Contact</Link>
      <span className={s.spacer}> | </span>
      <Link className={cx(s.link, s.highlight)} to="/login">Log in</Link>
    </div>
  );
  */
}

Navigation.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
};

export default (Navigation);
