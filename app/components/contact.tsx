"use client";

import { useState, CSSProperties } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleClear = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div style={styles.body}>
            <div style={styles.formWrapper}>
                <div style={styles.formContainer}>
                    {submitted ? (
                        <div>
                            <h2>Data Submitted</h2>
                            <p>Nama: {name}</p>
                            <p>Email: {email}</p>
                            <p>Pesan: {message}</p>
                            <p>Data di atas akan segera diinput ke database. Terima kasih!</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Nama:</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Pesan:</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" style={styles.button}>Submit</button>
                            <button type="button" onClick={handleClear} style={styles.button}>Clear</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

// Styling menggunakan JavaScript Object dengan tipe CSSProperties
const styles: { [key: string]: CSSProperties } = {
    body: {
        margin: 0,
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
    },
    formWrapper: {
        border: '2px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        width: '300px', // Lebar tetap untuk form
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column' as 'column', // Menyediakan tipe yang benar untuk TypeScript
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
        width: '100%', // Tombol mengambil lebar penuh
    }
};

export default ContactForm;
