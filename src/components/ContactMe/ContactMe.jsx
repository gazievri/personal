import './ContactMe.sass';
import { useForm } from 'react-hook-form';
import { emailRegExp } from '../../utils/regExp';
import {
  deleteSpaces,
  deleteSpacesAndFigures
} from '../../utils/inputControl';
import { WEB3FORM_KEY } from '../../utils/constants';
import { useState } from 'react';

export const ContactMe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
  });

  const onSubmit = async (data, e) => {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          //   setIsSuccess(true);
          e.target.reset();
          reset();
          //   setFormIsOn(false);
        } else {
          //   setIsSuccess(false);
          //   setFormIsOn(false);
        }
      })
      .catch((error) => {
        // setIsSuccess(false);
        console.log(error);
      });
  };

  return (
    <section className="contact-me">
      <div className="contact-me__content">
        <h1 className="contact-me__title">LETS BUILD A THING</h1>
        <form className="contact-me__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="contact-me__grid">
            {/* Скрытый input для отправки почты на форму через сервис web3forms.com */}
            <input
              type="hidden"
              value={WEB3FORM_KEY}
              {...register('access_key')}
            />
            <input
              className="contact-me__name"
              type="text"
              placeholder="NAME*"
              maxLength="30"
              {...register('name', {
                required: true,
                minLength: {
                  value: 2,
                  message: 'Не менее 2 символов',
                },
                onChange: (event) => {
                  const { value } = event.target;
                  event.target.value = deleteSpacesAndFigures(value);
                },
              })}
            />
            <input
              className="contact-me__email"
              type="email"
              placeholder="EMAIL*"
              maxLength="200"
              {...register('email', {
                required: true,
                pattern: {
                  value: emailRegExp,
                  message: 'Введите корректный email',
                },
                onChange: (event) => {
                  const { value } = event.target;
                  event.target.value = deleteSpaces(value);
                },
              })}
            />
            <input
              className="contact-me__subject"
              type="text"
              placeholder="SUBJECT"
            />
            <textarea
              className="contact-me__message"
              placeholder="MESSAGE*"
            ></textarea>
          </div>
          <button className="contact-me__btn" type="submit">
            Send it
          </button>
        </form>
      </div>
    </section>
  );
};
