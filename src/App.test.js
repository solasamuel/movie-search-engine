import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, mount, configure } from "enzyme";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App", () => {
    it("renders correctly", () => {
    shallow(<App />);
    });

    it("changes the keyword on submit", () => {
        let testInput = 'test-search'
        const wrapper = mount(<App />);
        const submitButton = wrapper.find('#submit-button');
        const input = wrapper.find('#search');
        input.simulate('change', { target: { value: testInput } })
        submitButton.simulate('click');
        expect(wrapper.state().keyword).toEqual(testInput);
    });
});
