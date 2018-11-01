import React from "react";
import Modal from "react-responsive-modal";
import { Form, Text } from 'informed';
import styles from './FormModal.module.css';

const modalStyles = {
  closeButton: {
    left: 14
  }
};

const reqValidate = value => {
  return !value ? 'این فیلد الزامی است.' : null;
}

const emailValidate = value => {
  const re = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
  console.log(re.test(value.toLowerCase()));
  return !value || !re.test(value.toLowerCase()) ? 'ایمیل معتبر نیست.' : null;
}

const passwordValidate = value => {
  return !value || value.length < 8 ? 'حداقل طول پسورد ۸ حرف است.' : null;
}


class FormModal extends React.Component {
  state = {
    regMessage: "",
    errors: {
      email: "",
      first_name: "",
      institute: "",
      last_name: "",
      password: "",
      phone: "",
      social_id: "",
    }
  };

  handleFormSubmit = () => {
    // Automatic form submition fails to validate!
    this.formApi.submitForm();
    
    const formState = this.formApi.getState();

    if (formState.invalid) {
      this.setState({
        errors: formState.errors
      })
      return;
    };

    fetch('http://127.0.0.1:8000/api/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.formApi.getState().values)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          regMessage: data.message
        });
        this.formApi.reset();
      })
      .catch(err => console.log('Err:', err));
  };

  setFormApi = formApi => {
    this.formApi = formApi;
  };

  render() {
    return (
      <div>
        <Modal
          open={this.props.open}
          onClose={this.props.onClose}
          styles={modalStyles}
          blockScroll={false}
          focusTrapped
          center>
          <div className={styles.modalWrapper}>
            <h3>فرم ثبت‌نام</h3>
            <p>{this.state.regMessage || 'این فرم جهت ثبت‌نام فرد شرکت‌کننده در مسابقه است.'}</p>
            <Form id="form-api-form" className={styles.form} getApi={this.setFormApi}>
              <div>
                <label htmlFor="email">ایمیل:</label>
                <div>
                  <Text
                    field="email"
                    id="email"
                    type="email"
                    initialValue=""
                    validate={emailValidate} />
                  <small>{this.state.errors.email}</small>
                </div>
              </div>

              <div>
                <label htmlFor="password">رمز عبور:</label>
                <div>
                  <Text
                    field="password"
                    id="password"
                    type="password"
                    initialValue=""
                    validate={passwordValidate} />
                    <small>{this.state.errors.password}</small>
                </div>
              </div>

              <div>
                <label htmlFor="first_name">نام:</label>
                <div>
                  <Text
                    field="first_name"
                    id="first_name"
                    initialValue=""
                    validate={reqValidate} />
                    <small>{this.state.errors.first_name}</small>
                </div>
              </div>

              <div>
                <label htmlFor="last_name">نام خانوادگی:</label>
                <div>
                  <Text
                    field="last_name"
                    id="last_name"
                    initialValue=""
                    validate={reqValidate} />
                    <small>{this.state.errors.last_name}</small>
                </div>
              </div>

              <div>
                <label htmlFor="phone">موبایل:</label>
                <div>
                  <Text
                    field="phone"
                    id="phone"
                    initialValue=""
                    validate={reqValidate} />
                    <small>{this.state.errors.phone}</small>
                </div>
              </div>

              <div>
                <label htmlFor="institute">موسسه:</label>
                <div>
                  <Text
                    field="institute"
                    id="institute"
                    initialValue=""
                    validate={reqValidate} />
                    <small>{this.state.errors.institute}</small>
                </div>
              </div>

              <div>
                <label htmlFor="social_id">کد ملی:</label>
                <div>
                  <Text
                    field="social_id"
                    id="social_id"
                    initialValue=""
                    validate={reqValidate} />
                    <small>{this.state.errors.social_id}</small>
                </div>
              </div>

              <button
                type="button"
                className={styles.submitButton}
                onClick={this.handleFormSubmit}>ثبت نام</button>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default FormModal;
