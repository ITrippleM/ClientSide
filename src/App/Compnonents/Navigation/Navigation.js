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
  console.log("Before Final", window.user);
  if (window.user == false) {
    return (
      <div className={cx(s.root, className)} role="navigation">
        <span className={s.spacer}> | </span>
        <Link className={cx(s.link, s.highlight)} to="/login">Log in</Link>
      </div>
    );
  }
  console.log("Final", window.user);

  if (window.user.admin) {
    return (
      <div className={cx(s.root, className)} role="navigation">
        <Link className={s.highlight} to={"/upload"} >Upload</Link>
        <Link className={s.highlight} to={"/admin"} >Admin</Link>
        <Link className={s.highlight} to={"/manage"} >Manage</Link>
        <Link className={s.highlight} to={"/genPass"} >GenUser</Link>
        <span className={s.spacer}> | </span>
        <div className={cx(s.link, s.highlight)} >
          <Link className={s.username} to={`/user/${window.user.id}`}>
            <span> {window.user.username}</span>
          </Link>
          <a className={cx(s.link, s.highlight)} href="/logout">Log out</a>
        </div>
      </div>
    );
  }

  return (
    <div className={cx(s.root, className)} role="navigation">
      <Link className={s.highlight} to={"/upload"} >Upload</Link>
      <Link className={s.highlight} to={"/manage"} >Change Password</Link>
      <span className={s.spacer}> | </span>
      <div className={cx(s.link, s.highlight)} >
        <Link className={s.username} to={`/user/${window.user.id}`}>
          <span> {window.user.username}</span>
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
