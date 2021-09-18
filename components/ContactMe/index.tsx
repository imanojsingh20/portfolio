import { FormEvent, useState } from 'react';
import SnackBar from '../SnackBar';
import { ContactMeSection } from './styles';

const FORMSPARK_ACTION_URL = 'https://submit-form.com/qvFIxCta';

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const [notification, setNotification] = useState({
        message: '',
        type: '',
    });

    const clearInputs = () => {
        setEmail('');
        setName('');
        setMessage('');
        setLoading(false);
    };

    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setLoading(true);

            await fetch(FORMSPARK_ACTION_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            });

            clearInputs();

            setNotification({
                message: 'Message Sent!',
                type: 'success',
            });
        } catch (error) {
            setLoading(false);

            setNotification({
                message: 'Something Went Wrong!',
                type: 'error',
            });
        }
    };

    return (
        <ContactMeSection id='contact-me'>
            <h2>Contact Me</h2>
            <h3>
                Email: <a href='mailto:mannuall4u@gmail.com'>mannuall4u@gmail.com</a>
            </h3>

            <h2>Woah Woah Waoh.. Don&apos;t be rude, Drop me a Hey!</h2>
            <form onSubmit={onFormSubmit} action='https://submit-form.com/qvFIxCta'>
                <label htmlFor='name'>`Are you Jack ? But I don&apos;t know any jack : then who`</label>
                <input type='text' id='name' name='name' placeholder='Jack' value={name} onChange={(e) => setName(e.target.value)} required />
                <label htmlFor='email'>We still using email for work things ? Dayam...</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='jack@dev.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor='message'>What ya wanna say my friend..</label>
                <textarea
                    rows={5}
                    id='message'
                    name='message'
                    placeholder='Say Hey!'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                {loading ? (
                    <button type='submit' disabled>
                        <i className='fas fa-circle-notch fa-spin'></i>
                    </button>
                ) : (
                    <button type='submit'>Send</button>
                )}

                {notification && <SnackBar message={notification.message} type={notification.type} />}
            </form>
        </ContactMeSection>
    );
};

export default ContactMe;
