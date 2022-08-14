import {render,screen,waitFor,fireEvent} from "@testing-library/react"
import Form from "../form"


describe("form test",()=>{
    beforeAll(()=>{
        render(<Form/>);
    })

    test('check if the button are get',async () => {
        waitFor(()=>{
            const get=screen.getByTestId("get");
            fireEvent.click(get)
            expect(get.textContent).toBe("GET")
        })
    })
    test('check if the button are post',async () => {
        waitFor(()=>{
            const get=screen.getByTestId("post");
            const teste=screen.getByTestId("methodType")
            fireEvent.click(get)
            console.log(teste.textContent)
            expect(teste.textContent).toBe("POST")
        })
    })

    test('check if the button are put',async () => {
        waitFor(()=>{
            const get=screen.getByTestId("get");
            const teste=screen.getByTestId("methodType")
            fireEvent.click(get)
            expect(teste.textContent).toBe("GET")
        })
    })
    test('check if the button are delete',async () => {
        waitFor(()=>{
            const get=screen.getByTestId("put");
            const teste=screen.getByTestId("methodType")
            fireEvent.click(get)
            expect(teste.textContent).toBe("PUT")
        })
    })

    test("url test now ",async()=>{
        waitFor(()=>{
            const url=screen.getByTestId("url");
            fireEvent.change(url, { target: { value: 'www.google.com' } });
            expect(url.value).toBe('www.google.com')

        })
    })


})



