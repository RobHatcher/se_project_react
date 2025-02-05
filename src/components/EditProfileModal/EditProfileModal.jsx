import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ isOpen, closeActiveModal, handleEditProfile }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(currentUser);
    e.preventDefault();
    handleEditProfile({ name, avatar });
    console.log(name, avatar);
  };

  const currentUserValue = () => {
    setName(currentUser.name);
    setAvatar(currentUser.avatar);
  };

  useEffect(() => {
    currentUserValue();
  }, [currentUser]);

  return (
    <ModalWithForm
      title="Edit Profile Modal"
      buttonText="Save Changes"
      onClose={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name *{""}
        <input
          name="name"
          id="profileName"
          placeholder={currentUser.name}
          className="modal__input"
          minLength="2"
          maxLength="40"
          value={name}
          onChange={handleNameChange}
          required
        ></input>
      </label>
      <label htmlFor="avatar" className="modal__label">
        Avatar *{""}
        <input
          type="url"
          name="avatar"
          id="profileAvatar"
          placeholder={currentUser.avatar}
          className="modal__input"
          value={avatar}
          onChange={handleAvatarChange}
          required
        ></input>
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
