import React from 'react';
import './ImgLinkForm.css'

const ImgLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div className='ImgLinkForm center'>
            <p>
                {'This artificial brain will detect faces in your pictures. Give it a try.'}
            </p>

            <div className='input shadow center bg-pattern'>
                <input className='url no-outline' type='text' onInput={ onInputChange }/>
                <button className='detect grow no-outline' onClick={ onPictureSubmit }>Detect</button>
            </div>
        </div>
    )
};

export default ImgLinkForm;