import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
    return (
        <div className='center'>
            <div className='rank'>
                <div>
                    {`${name}, your current entry count is...`}
                </div>
                <div>
                    {entries}
                </div>
            </div>
        </div>
    )
};

export default Rank;