import {render,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event" 
import Secret from "../Secret"


beforeEach(()=>{
    render(<Secret/>)
})


test("tets secret message is initially empty",()=>{
    const inputEl = screen.getByLabelText(/secret/i);

    expect(inputEl).toHaveTextContent("");
})

test("tets input change",async()=>{
    const user = userEvent.setup();
    const inputEl = screen.getByLabelText(/secret/i);

    expect(inputEl).toHaveTextContent("");

    await user.type(inputEl,"Bu bir sır");

    expect(inputEl).toHaveValue("Bu bir sır")
})


describe("checkbox",()=>{

    test("Checkbox initially",()=>{
        const checkEl=screen.getByRole("checkbox");
        expect(checkEl).not.toBeChecked();
    });

    test("checkbox work corrently",async()=>{
        const user = userEvent.setup();
        const checkEl= screen.getByRole("checkbox");
        expect(checkEl).not.toBeChecked()
        await user.click(checkEl)
        expect(checkEl).toBeChecked()
    })

})

// PASS  src/component/__tests__/Secret.test.js
// √ tets secret message is initially empty (35 ms)
// √ tets input change (451 ms)
// checkbox
//   √ Checkbox initially (51 ms)
//   √ checkbox work corrently (83 ms)
//   Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        5.916 s
// Ran all test suites related to changed files.