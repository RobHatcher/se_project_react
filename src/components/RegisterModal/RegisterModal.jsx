import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState, useEffect } from "react";
import { useForm } from "../../hooks/hooks";

const RegisterModal = ({
  closeActiveModal,
  onRegister,
  handleSignupClick,
  handleSigninClick,
  isOpen,
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const { values, handleChange, setValues } = useForm({
    _id: null,
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  function resetForm() {
    setName("");
    setAvatar("");
    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Register"
      buttonText="Next"
      isOpen={isOpen}
      handleSignupClick={handleSignupClick}
      onClose={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          name="email"
          id="email"
          placeholder="Email"
          minLength="5"
          maxLength="40"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          name="password"
          id="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          autoComplete="on"
          required
        />
      </label>
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          name="name"
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="avatar" className="modal__link">
        Avatar{" "}
        <input
          type="url"
          className="modal__input"
          name="avatar"
          id="avatar"
          placeholder="Avatar URL"
          value={values.avatar}
          onChange={handleChange}
          required
        />
      </label>
      <div className="modal__button-wrapper">
        <button className="modal__submit">Sign Up</button>
        <button className="modal__or-register-btn" onClick={handleSigninClick}>
          {" "}
          or Log In
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
