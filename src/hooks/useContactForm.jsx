import { useReducer } from 'react';
import emailjs from '@emailjs/browser';

const initialState = {
    name: '',
    email: '',
    message: '',
    isSubmitting: false,
    success: false,
    error: null,
};

function contactReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return { ...state, [action.field]: action.value };

        case 'SUBMIT_START':
            return { ...state, isSubmitting: true, error: null, success: false };

        case 'SUBMIT_SUCCESS':
            return { ...initialState, success: true };

        case 'SUBMIT_ERROR':
            return { ...state, isSubmitting: false, error: action.error };

        default:
            return state;
    }
}

export function useContactForm() {
    const [state, dispatch] = useReducer(contactReducer, initialState);

    const updateField = (field, value) => {
        dispatch({ type: 'UPDATE_FIELD', field, value });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        dispatch({ type: 'SUBMIT_START' });

        const templateParams = {
            from_name: state.name,
            from_email: state.email,
            message: state.message,
        };

        console.log("Sending Data:", templateParams);   // ← Add this for debugging

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            dispatch({ type: 'SUBMIT_SUCCESS' });
        } catch (err) {
            console.error(err);
            dispatch({ type: 'SUBMIT_ERROR', error: 'Failed to send message.' });
        }
    };

    return { state, updateField, submitForm };
}