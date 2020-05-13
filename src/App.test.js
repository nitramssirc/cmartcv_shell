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
        const expectedValue = "/";
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

describe('Home', ()=>{
    const appRender = (<MemoryRouter initialEntries={["/"]}><App/></MemoryRouter>);
    afterEach(cleanup)
    
    it('should display Home', ()=>{
        const expectedText = "Home";
        const {getByText} = render(appRender)

        expect(getByText(/Home/i).textContent).toBe(expectedText);

    })
})

describe('Skills', ()=>{
    const appRender = (<MemoryRouter initialEntries={["/Skills"]}><App/></MemoryRouter>);
    afterEach(cleanup)
    
    it('should display Skills Content', ()=>{
        const expectedText = "Skills";
        const {getByTestId} = render(appRender)

        expect(getByTestId("Skills").textContent).toBe(expectedText);

    })
})

describe('Experience', ()=>{
    const appRender = (<MemoryRouter initialEntries={["/Experience"]}><App/></MemoryRouter>);
    afterEach(cleanup)
    
    it('should display Experience Content', ()=>{
        const expectedText = "Experience";
        const {getByTestId} = render(appRender)

        expect(getByTestId("Experience").textContent).toBe(expectedText);

    })
})

describe('PersonalProjects', ()=>{
    const appRender = (<MemoryRouter initialEntries={["/PersonalProjects"]}><App/></MemoryRouter>);
    afterEach(cleanup)
    
    it('should display PersonalProjects Content', ()=>{
        const expectedText = "PersonalProjects";
        const {getByTestId} = render(appRender)

        expect(getByTestId("PersonalProjects").textContent).toBe(expectedText);

    })
})

describe('Education', ()=>{
    const appRender = (<MemoryRouter initialEntries={["/Education"]}><App/></MemoryRouter>);
    afterEach(cleanup)
    
    it('should display Education Content', ()=>{
        const expectedText = "Education";
        const {getByTestId} = render(appRender)

        expect(getByTestId("Education").textContent).toBe(expectedText);

    })
})

describe('Print', ()=>{
    const appRender = (<MemoryRouter initialEntries={["/Print"]}><App/></MemoryRouter>);
    afterEach(cleanup)
    
    it('should display Print Content', ()=>{
        const expectedText = "Print";
        const {getByTestId} = render(appRender)

        expect(getByTestId("Print").textContent).toBe(expectedText);

    })
})