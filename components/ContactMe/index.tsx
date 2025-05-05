import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { ContactMeSection } from './styles';

const FORMSPARK_ACTION_URL = 'https://submit-form.com/8EBtndDOH';

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

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

            const sendCall = fetch(FORMSPARK_ACTION_URL, {
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

            await toast.promise(sendCall, {
                pending: 'Sending Message!',
                success: 'Message Sent!',
                error: 'Something Went Wrong!',
            });

            clearInputs();
        } catch (error) {
            setLoading(false);

            toast.error('Something Went Wrong!');
        }
    };

    return (
        <ContactMeSection id='contact-me'>
            <h2>Contact Me</h2>
            <h3>
                Email: <a href='mailto:imanojsingh20@gmail.com'>imanojsingh20@gmail.com</a>
            </h3>

            <h2>Woah Woah Waoh.. Don&apos;t be rude, Drop me a Hey!</h2>
            <form onSubmit={onFormSubmit} action={FORMSPARK_ACTION_URL}>
                <label htmlFor='name'>Email</label>
                <input type='text' id='name' name='name' placeholder='Jack' value={name} onChange={(e) => setName(e.target.value)} required />
                <label htmlFor='email'>We still using emails? Dayam...</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='jack@dev.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor='message'>Message..</label>
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
            </form>
        </ContactMeSection>
    );
};

export default ContactMe;
