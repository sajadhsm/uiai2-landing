import React from "react";
import Modal from "react-responsive-modal";

class FormModal extends React.Component {
  render() {
    return (
      <div>
        <Modal
          open={this.props.open}
          onClose={this.props.onClose}
          blockScroll={false}
          center>
          <h3>فرم ثبت نام</h3>
        </Modal>
      </div>
    );
  }
}

export default FormModal;
