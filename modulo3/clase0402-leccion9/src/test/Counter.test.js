import Counter from "../components/Counter";
import { render, screen, fireEvent } from '@testing-library/react';

describe("Componente del contador", ()=>{

    test("Incrementar la variable count al hacer click en el botón", () =>{

        render(<Counter/>);

        const buttonInc = screen.getByText("Incrementar"); //llamamos al botón por nombre
        fireEvent.click(buttonInc); // simulamos el click del botón, fireEvent. debería salir listado de eventos

        const countElement = screen.getAllByText(/Contador: 1/i)
        expect(countElement.length).toBe(1)
    })
})
