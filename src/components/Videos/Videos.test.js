import React from "react"
import Videos from "./Videos"
import renderer from "react-test-renderer"

test("Videos empty renders ",()=>{
    const tree= renderer.create(<Videos/>).toJSON();

    expect(tree).toMatchSnapshot();
})

test("Videos 1 item renders",()=>{
    const tree= renderer.create(<Videos videos={["Udemy"]}/>).toJSON();

    expect(tree).toMatchSnapshot();
})