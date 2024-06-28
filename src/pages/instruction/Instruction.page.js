import React, {useState} from 'react'
import { NextButton } from '../../components/NextButton';

export const Instruction = () => {


    return(

        <div 
            className="instruction-div bg-info">
            <NextButton/>
            <label for="intruction-box" className="instruction-label">Instructions</label>
            <textarea 
                className="instruction-box"
                rows="25"
                cols="100"
                readOnly
            >Instructions that will be shown to the user will be presented in this textarea box.</textarea>
        </div>
    );

};