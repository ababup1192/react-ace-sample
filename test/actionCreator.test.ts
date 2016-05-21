import { Dispatcher } from "../src/scripts/dispatcher";
import { ActionCreator } from "../src/scripts/actionCreator";

describe("ActionCreator", () => {
    let dispatcher: Dispatcher;
    let action: ActionCreator;

    beforeEach(() => {
        dispatcher = new Dispatcher();
        action = new ActionCreator(dispatcher);
    });

    describe("change", () => {
        it("should push `change` event", () => {
            let actualText: string = "";
            const expectedText: string = "Hello";

            action.createProperty("").onValue((state: string) => {
                actualText = state;
            });
            action.changeText(expectedText);

            chai.assert.strictEqual(actualText, expectedText);
        });
    });
});
