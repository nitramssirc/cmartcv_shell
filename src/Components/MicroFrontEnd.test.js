import React from 'react';
import {render, cleanup} from '@testing-library/react';
import MicroFrontEnd from './MicroFrontEnd';

describe('MicroFrontEnd',()=>{
    afterEach(cleanup)

    it('should render data',()=>{
        const data = "Some Data";
        const {getByText} = render(<MicroFrontEnd data={data}/>)

        expect(getByText(/Some/i).textContent).toBe(data);
    })
})