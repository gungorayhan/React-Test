import { cleanup, render, screen } from "@testing-library/react"
import App from "./App"

beforeAll(()=>{ // tek bir kez alışır
    console.log("beforeAll")
    screen.debug();
})


beforeEach(()=>{ // her testten önce birkez çalışır
    render(<App/>);
})

afterAll(()=>{ // tüm testler çalıştıktan sonra birkez çalışır
    console.log("afterAll")
})

afterEach(()=>{// her testten sonra birkez çalışır
    console.log("afterEach")
    cleanup(); //Dom u temizliyoruz. çünkü her testten önce App çalıştı. tabi bu artık otomat,k yapılıyor. bu ayarın yapılmasına gerek yok
})

test("App renders correnctly", () => {
    //    const {debug,container} = render(<App />)
    //    debug(); -> domun bana ne döndürdüğünü gösterir. kullanılması önerilen yazım scrren.debug();
    //    screen kullanımı daha doğru oalcaktır

    // render(<App />)
    

    const headerEl = screen.getByText(/coding with ayhangungor/i)
    expect(headerEl).toBeInTheDocument(); // .not.toBeInTheDocument();
    expect(headerEl).toHaveTextContent("coding with ayhangungor");

})

test("Green color test", ()=>{
    // render(<App/>)

    const colorText= screen.getByText(/Green color/i);
    expect(colorText).toBeInTheDocument();
    expect(colorText).toHaveTextContent("Green Color");
    expect(colorText).toHaveClass("green")
})

test("Disabled button test", ()=>{
    // render(<App/>)

    // const buttonEl= screen.getByRole("button",{
    //     name:"disabled",
    // });
    const buttonEl= screen.getByTestId("btnDisabled")
    expect(buttonEl).toHaveTextContent("Disabled"); 
    expect(buttonEl).toBeDisabled();


})

test("Enabled button test",()=>{
    // render(<App/>)
    // const buttonEl = screen.getByRole("button",{
    //     name:"enabled"
    // })

    const buttonEl= screen.getByTestId("btnEnabled");

    expect(buttonEl).toHaveTextContent("Enabled");

    expect(buttonEl).not.toBeDisabled();

})


// console.log
// beforeAll

//   at src/App.test.js:5:13

// console.log
// <body>
//   <div>
//     <div
//       class="app"
//     >
//       <h1>
//         React Test
//       </h1>
//       <button
//         aria-label="disabled"    
//         data-testid="btnDisabled"
//         disabled=""
//       >
//         Disabled
//       </button>
//       <button
//         aria-label="enabled"
//         data-testid="btnEnabled"
//       >
//         Enabled
//       </button>
//       <h3
//         class="green"
//       >
//         Green Color
//       </h3>
//       <p>
//         coding with ayhangungor
//       </p>
//     </div>
//   </div>
// </body>

// console.log
// beforeAll

//   at src/App.test.js:5:13

// console.log
// <body />

// console.log
// beforeAll

//   at src/App.test.js:5:13

// console.log
// <body />

// console.log
// beforeAll

//   at src/App.test.js:5:13

// console.log
// <body />

//   at logDOM (node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/pretty-dom.js:87:13)

// console.log
// afterAll

// console.log
// beforeAll

//   at src/App.test.js:5:13

// console.log
// <body />

//   at logDOM (node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/pretty-dom.js:87:13)

// console.log
// afterEach

//   at Object.<anonymous> (src/App.test.js:19:13)

// console.log
// afterEach

//   at Object.<anonymous> (src/App.test.js:19:13)

// console.log
// afterEach

//   at Object.<anonymous> (src/App.test.js:19:13)

// console.log
// afterEach

//   at Object.<anonymous> (src/App.test.js:19:13)

// console.log
// afterAll

// console.log
// beforeAll

//   at src/App.test.js:5:13

// console.log
// <body />

//   at logDOM (node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/pretty-dom.js:87:13)

// console.log
// afterEach

//   at Object.<anonymous> (src/App.test.js:19:13)

// console.log
// afterEach

//   at Object.<anonymous> (src/App.test.js:19:13)

// console.log
// afterEach

//   at Object.<anonymous> (src/App.test.js:19:13)

// console.log
// afterEach

//   at Object.<anonymous> (src/App.test.js:19:13)

// console.log
// afterAll

// console.log
// beforeAll

//   at src/App.test.js:5:13

// console.log
// <body />

//   at logDOM (node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/pretty-dom.js:87:13)

// console.log
// afterEach

//   at Object.<anonymous> (src/App.test.js:19:13)

// console.log
// afterEach

//   at Object.<anonymous> (src/App.test.js:19:13)

// console.log
// afterEach

//   at Object.<anonymous> (src/App.test.js:19:13)

// console.log
// afterEach

//   at Object.<anonymous> (src/App.test.js:19:13)

// console.log
// afterAll

// console.log
// beforeAll

//   at src/App.test.js:5:13

// console.log
// <body />

//   at logDOM (node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/pretty-dom.js:87:13)

// console.log
// afterEach

//   at Object.<anonymous> (src/App.test.js:19:13)

// console.log
// afterEach

//   at Object.<anonymous> (src/App.test.js:19:13)

// console.log
// afterEach

//   at Object.<anonymous> (src/App.test.js:19:13)

// console.log
// afterEach

//   at Object.<anonymous> (src/App.test.js:19:13)

// console.log
// afterAll

//   at src/App.test.js:15:13

// PASS  src/App.test.js
// √ App renders correnctly (52 ms)
// √ Green color test (16 ms)
// √ Disabled button test (9 ms)
// √ Enabled button test (13 ms)

// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        4.809 s
// Ran all test suites related to changed files.