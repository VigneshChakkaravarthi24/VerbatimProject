import React, {useState} from 'react'
import { AgreeButton } from '../../components/AgreeButton';

// QUESTION: Instruction and consent page use almost identical layouts, how could I reduce the amount of reused code for these?

export const Consent = () => {


    return(

        <div 
            className="consent-div bg-info">
            <AgreeButton/>
            <label for="consent-box" className="consent-label">Consent Form</label>
            <textarea 
                className="consent-box"
                rows="25"
                cols="100"
                readOnly
                
            >Consent form that will be shown to the user will be presented in this textarea box.</textarea>
        </div>
    );

};