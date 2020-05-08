import React from 'react';
import {render, cleanup} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('Nav Bar', ()=>{
    const appRender = (<MemoryRouter><App/></MemoryRouter>);

    afterEach(cleanup)

    it('shoud display my name', ()=>{
        const expectedText = "Criss Martin";
        const {getByText} = render(appRender)

        expect(getByText(/Criss/).textContent).toBe(expectedText);
    })

    it('should link to home when my name is clicked', ()=>{
        const expectedValue = "/asdf";
        const {getByText} = render(appRender)

        expect(getByText(/Criss/).getAttribute('href')).toBe(expectedValue);
    })


    it('should display skills link', ()=>{
        const expectedText = "Skills";
        const {getByText} = render(appRender)

        expect(getByText(/skills/i).textContent).toBe(expectedText);
    })

    it('should link to Skills when skills link is clicked', ()=>{
        const expectedValue = "/Skills";
        const {getByText} = render(appRender)

        expect(getByText(/skills/i).getAttribute('href')).toBe(expectedValue);
    })

    it('should display Experience link', ()=>{
        const expectedText = "Experience";
        const {getByText} = render(appRender)

        expect(getByText(/experience/i).textContent).toBe(expectedText);
    })

    it('should link to Experience when Experience link is clicked', ()=>{
        const expectedValue = "/Experience";
        const {getByText} = render(appRender)

        expect(getByText(/experience/i).getAttribute('href')).toBe(expectedValue);
    })

    it('should display Personal Projects link', ()=>{
        const expectedText = "Personal Projects";
        const {getByText} = render(appRender)

        expect(getByText(/personal/i).textContent).toBe(expectedText);
    })

    it('should link to PersonalProjects when Personal Projects link is clicked', ()=>{
        const expectedValue = "/PersonalProjects";
        const {getByText} = render(appRender)

        expect(getByText(/personal/i).getAttribute('href')).toBe(expectedValue);
    })

    it('should display Education link', ()=>{
        const expectedText = "Education";
        const {getByText} = render(appRender)

        expect(getByText(/education/i).textContent).toBe(expectedText);
    })

    it('should link to Education when Education link is clicked', ()=>{
        const expectedValue = "/Education";
        const {getByText} = render(appRender)

        expect(getByText(/education/i).getAttribute('href')).toBe(expectedValue);
    })

    it('should display Print link', ()=>{
        const expectedText = "Print";
        const {getByText} = render(appRender)

        expect(getByText(/print/i).textContent).toBe(expectedText);
    })

    it('should link to Print when Print link is clicked', ()=>{
        const expectedValue = "/Print";
        const {getByText} = render(appRender)

        expect(getByText(/print/i).getAttribute('href')).toBe(expectedValue);
    })

    it('should display my email', ()=>{
        const expectedText = "w.criss.martin@gmail.com";
        const {getByText} = render(appRender)

        expect(getByText(/gmail/i).textContent).toBe(expectedText);
    })

    it('should mail to when my email is clicked', ()=>{
        const expectedText = "mailto('w.criss.martin@gmail.com')";
        const {getByText} = render(appRender)

        expect(getByText(/gmail/i).getAttribute('href')).toBe(expectedText);
    })

    it('should display Blog link', ()=>{
        const expectedValue = "https://cmartcoding.com/";
        const {getByAltText} = render(appRender)

        expect(getByAltText(/blog/i).parentElement.getAttribute('href')).toBe(expectedValue);
    })

    it('should display Linked In link', ()=>{
        const expectedValue = "https://www.linkedin.com/in/crissmartin/";
        const {getByAltText} = render(appRender)

        expect(getByAltText(/LinkedIn/i).parentElement.getAttribute('href')).toBe(expectedValue);
    })

})