import calcularor from "../pages/calculator";


const testowyTest = (a: number, b:number) => a + b;

describe("calculator render", () => {
    test("simple test", () => {

        let component;

        beforeEach(() => {

        })

        expect(testowyTest(123, 321)).toBe(444);
    
    
    })
});