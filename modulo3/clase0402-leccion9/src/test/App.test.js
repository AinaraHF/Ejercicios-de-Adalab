import App from "../components/App";
import { render, screen } from '@testing-library/react';

//describe() es como el paquete de todas las pruebas unitarias
//Tiene 2 parámetros, título y función

describe("Pruebas del componente de APP", () =>{

    //test tb recibe 2 parámetros, descripción y luego ya la prueba
    test("Buscar la palabra React", () =>{
        //preparación
        render(<App/>) //renderizamos el componente

        //actuación
        const arrayReact = screen.getAllByText(/react/i); //ponemos screen para buscar EN lo renderizado y .función, al poner el . debería salir un listado, estaría bien leer la documentación

        //aserción: aquí se pone lo que me debería devolver para comprobar si lo hace o no
        expect(arrayReact.length).toBe(1);

    });
});