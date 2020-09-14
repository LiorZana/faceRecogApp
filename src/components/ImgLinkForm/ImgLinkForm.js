import React from 'react';
import './ImgLinkForm.css'

const ImgLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div className='ImgLinkForm center'>
            <p>
                {'This artificial brain will detect faces in your pictures. Give it a try.'}
            </p>

            <div className='input shadow center bg-pattern'>
                <input className='url no-outline' type='text' onInput={ onInputChange }/>
                <button className='detect grow no-outline' onClick={ onSubmit }>Detect</button>
            </div>
        </div>
    )
};

export default ImgLinkForm;