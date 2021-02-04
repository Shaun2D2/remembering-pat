import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Form, Button, Modal } from 'react-bootstrap';
// import ReCAPTCHA from 'react-google-recaptcha';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

import Section from './Section';

import './Memories.scss';

const { Group, Label, Control } = Form;
const { Header, Title, Body } = Modal;

const INITIAL_FORM_STATE = { name: '', comment: '' };

const MemoryFormModal = ({ show, onDismiss, onSuccess }) => {
  // const captcha = useRef();
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const body = {
      ...formState,
      // captcha: captcha.current.getValue(),
    };

    axios.post('/.netlify/functions/newcomment', body).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Your memory has been added.',
        showConfirmButton: false,
        timer: 1500,
      });

      setFormState(INITIAL_FORM_STATE);
      setLoading(false);
      onDismiss();
      onSuccess();
    })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong, please try again.',
        });
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Modal show={show} onHide={onDismiss} size="lg">
      <Header closeButton>
        <Title>Add Your Memory</Title>
      </Header>
      <Body>
        <Form onSubmit={handleSubmit}>
          <Group>
            <Label>Your Name</Label>
            <Control value={formState.name} onChange={handleChange} name="name" type="text" placeholder="James" />
          </Group>
          <Group>
            <Label>Your Memory</Label>
            <Control value={formState.comment} onChange={handleChange} name="comment" as="textarea" maxLength={500} rows={3} />
          </Group>
          {/* <ReCAPTCHA ref={captcha} sitekey="6LdzKe8ZAAAAACCavBmL9LWfAaAG7fvoHoIVYYB5" /> */}
          <br />
          <Button disabled={loading} variant="primary" type="submit">
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </Form>
      </Body>
    </Modal>
  );
};

MemoryFormModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

const Memories = () => {
  const [showForm, setShowForm] = useState(false);
  const [comments, setComments] = useState([]);

  const fetchComments = () => axios.get('/.netlify/functions/comment').then((res) => setComments(res.data.data));

  useEffect(() => {
    fetchComments();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    setShowForm(true);
  };

  const handleDismiss = () => {
    setShowForm(false);
  };

  return (
    <Section title="Memories & Goodbyes" id="memories">
      <button type="button" className="btn btn-primary" onClick={handleClick}>Add your memory</button>
      <hr />
      {comments.length < 1 && (<h3 className="text-center memories__zero-state-title">No memories yet</h3>)}
      <div className="card-columns">
        {comments.map((comment) => (
          <div className="card">
            <div className="card-body">
              <div className="card-text">{comment.comment}</div>
              <div className="card-title">
                {' '}
                -
                {comment.name}
              </div>
            </div>
          </div>
        ))}

      </div>

      <MemoryFormModal onSuccess={fetchComments} onDismiss={handleDismiss} show={showForm} />
    </Section>
  );
};

export default Memories;
