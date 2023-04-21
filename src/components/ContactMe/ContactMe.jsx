import './ContactMe.sass';
import { useForm } from 'react-hook-form';
import { emailRegExp, messageRegExp } from '../../utils/regExp';
import { deleteSpaces, deleteSpacesAndFigures } from '../../utils/inputControl';
import { WEB3FORM_KEY } from '../../utils/constants';

export const ContactMe = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
  });

  const watchMessage = watch('message', 0);

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
            <label className="contact-me__lable contact-me__lable_type_name">
              <input
                className="contact-me__name"
                type="text"
                placeholder="NAME*"
                maxLength="50"
                {...register('name', {
                  required: 'Field is required',
                  minLength: {
                    value: 2,
                    message: 'At least 10 characters',
                  },
                  onChange: (event) => {
                    const { value } = event.target;
                    event.target.value = deleteSpacesAndFigures(value);
                  },
                })}
              />
              {errors.name && (
                <p role="alert" className="contact-me__error-message">
                  {errors.name?.message}
                </p>
              )}
            </label>

            <label className="contact-me__lable contact-me__lable_type_email">
              <input
                className="contact-me__email"
                type="email"
                placeholder="EMAIL*"
                maxLength="200"
                {...register('email', {
                  required: 'Field is required',
                  pattern: {
                    value: emailRegExp,
                    message: 'Enter a valid email',
                  },
                  onChange: (event) => {
                    const { value } = event.target;
                    event.target.value = deleteSpaces(value);
                  },
                })}
              />
              {errors.email && (
                <p role="alert" className="contact-me__error-message">
                  {errors.email?.message}
                </p>
              )}
            </label>

            <label className="contact-me__lable contact-me__lable_type_subject">
              <input
                className="contact-me__subject"
                type="text"
                placeholder="SUBJECT"
                maxLength="200"
                {...register('subject', {
                  required: false,
                  minLength: {
                    value: 2,
                    message: 'At least 2 characters',
                    pattern: {
                      value: messageRegExp,
                      message: 'Only letters are allowed',
                    },
                  },
                })}
              />
              {errors.subject && (
                <p role="alert" className="contact-me__error-message">
                  {errors.subject?.message}
                </p>
              )}
            </label>

            <label className="contact-me__lable contact-me__lable_type_message">
              <textarea
                className="contact-me__message"
                placeholder="MESSAGE*"
                maxLength="300"
                {...register('message', {
                  required: 'Field is required',
                  maxLength: {
                    value: 300,
                    message: 'No more than 300 characters',
                  },
                  minLength: {
                    value: 10,
                    message: 'At least 10 characters',
                  },
                  pattern: {
                    value: messageRegExp,
                    message: 'Only letters are allowed',
                  },
                })}
              ></textarea>
              {errors.message && (
                <p role="alert" className="contact-me__error-message">
                  {errors.message?.message}
                </p>
              )}
              <p className="contact-me__symbols-counter">
                <span
                  className={
                    watchMessage.length >= 10 && watchMessage.length <= 300
                      ? 'contact-me__count'
                      : 'contact-me__count_type_wrong'
                  }
                >
                  {!watchMessage.length ? 0 : watchMessage.length}
                </span>
                /300
              </p>
            </label>
          </div>
          <button
            className="contact-me__btn"
            type="submit"
            disabled={!isValid ? true : false}
          >
            Send it
          </button>
        </form>
      </div>
    </section>
  );
};
