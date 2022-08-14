import {screen,waitFor,fireEvent,render}from "@testing-library/react";
import Header from "../Header"

describe("check header",()=>{
    beforeAll(()=>{
        render(<Header/>)
    })

    test("check header ",()=>{
        let headerText=screen.getByTestId("header");
        expect(headerText.textContent).toBe("RESTy")
    })

})