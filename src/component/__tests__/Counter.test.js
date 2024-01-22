import react from "react"
import {render,screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import Counter from "../Counter";


beforeEach(()=>{
    render(<Counter/>)
});

test("counter is initially 0",()=>{

    const counterEl = screen.getByTestId("counter")

    expect(counterEl).toHaveTextContent(0)

})

test("Increment button works correnctly",async ()=>{
    const user = userEvent.setup();
    const counterEl = screen.getByTestId("counter")
    const incrementBtn = screen.getByRole("button",{
        name:/increment/i,
    })

    expect(counterEl).toHaveTextContent(0);

   await user.click(incrementBtn)

    expect(counterEl).toHaveTextContent(1);
})
test("Decrement button works correnctly",async()=>{
    const user= userEvent.setup();
    const counterEl = screen.getByTestId("counter")

    const decrementBtn = screen.getByRole("button",{
        name:/decrement/i,
    });

    expect(counterEl).toHaveTextContent(0);

    await user.click(decrementBtn);
   
    expect(counterEl).toHaveTextContent(-1)
   
})

// PASS  src/component/__tests__/Counter.test.js
// √ counter is initially 0 (27 ms)
// √ Increment button works correnctly (153 ms)
// √ Decrement button works correnctly (62 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        3.021 s
// Ran all test suites related to changed files.