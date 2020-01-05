import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTeachModal = () => {
  const [fristName, setFristName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (fristName === '' || lastName === '') {
      M.toast({ html: 'Please enter the first and last name' });
    } else {
      console.log(fristName, lastName);

      //Clear Fields
      setFristName('');
      setLastName('');
    }
  };
  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="fristname"
              value={fristName}
              onChange={e => setFristName(e.target.value)}
            />
            <label htmlFor="fristname" className="active">
              Frist Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastname"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastname" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTeachModal;
