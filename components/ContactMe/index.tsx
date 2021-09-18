import { FormEvent } from 'react';
import { ContactMeSection } from './styles';

const ContactMe = () => {
    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('form submit');
    };

    return (
        <ContactMeSection id='contact-me'>
            <h2>Contact Me</h2>
            <h2>Woah Woah Waoh.. Don&apos;t be rude, Drop me a Hey!</h2>
            <form onSubmit={onFormSubmit}>
                <label htmlFor='name'>`Are you Jack ? But I don&apos;t know any jack : then who`</label>
                <input type='text' id='name' placeholder='Jack' required />
                <label htmlFor='email'>We still using email for work things ? Dayam...</label>
                <input type='email' id='email' placeholder='jack@dev.com' required />
                <label htmlFor='message'>What ya wanna say my friend..</label>
                <textarea rows={5} id='message' placeholder='Say Hey!' required />

                <button>Send</button>
            </form>
        </ContactMeSection>
    );
};

export default ContactMe;
