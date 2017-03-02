/*
 *
 * LoginPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectLoginPage from './selectors';
import messages from './messages';
import { submitLoginForm } from './actions';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleSubmit() {
    const { submitForm } = this.props;

    submitForm({
      username: this.ref.emailNode,
      password: this.ref.passwordNode,
    });
  }

  render() {
    return (
      <div>
        <Helmet
          title="LoginPage"
          meta={[
            { name: 'description', content: 'Baiji Login' },
          ]}
        />
        <FormattedMessage {...messages.header} />
        <div>
          <form>
            <div>
              <label htmlFor="inputEmail">Email</label>
              <div>
                <input
                  type="email"
                  id="inputEmail"
                  placeholder="Email"
                  ref={(node) => { this.emailNode = node; }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="inputPassword">Password</label>
              <div>
                <input
                  type="password"
                  id="inputPassword"
                  placeholder="Password"
                  ref={(node) => { this.passwordNode = node; }}
                />
              </div>
            </div>
            <div>
              <div>
                <button
                  onSubmit={() => this.handleSubmit}
                  type="submit"
                >Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LoginPage: makeSelectLoginPage(),
});

export function mapDispatchToProps(dispatch) {
  return {
    submitForm: ({ username, password }) => { dispatch(submitLoginForm({ username, password })); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
