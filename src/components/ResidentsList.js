import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({residents}) => {

    return (
        <div className='info'>
            {residents?.map( (resident) => (
                <ResidentInfo
                residentUrl={resident}
                key={resident}
                />
            ))}
        </div>
    );
};

export default ResidentList;