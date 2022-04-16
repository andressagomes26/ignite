import { Container } from "./styles";
import { useEffect } from "react";

export function TransactionsTable(){

    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
        .then(response => response.json())
        .then(data => console.log(data))
    })
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Sites</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Venda</td>
                        <td>10/04/2021</td>
                    </tr>

                    <tr>
                        <td>Hamburguer</td>
                        <td className="withdraw">- R$ 59,00</td>
                        <td>Alimentação</td>
                        <td>10/04/2021</td>
                    </tr>

                    <tr>
                        <td>Aluguel do apartamento</td>
                        <td className="withdraw">- R$ 1.200,00</td>
                        <td>Casa</td>
                        <td>27/03/2021</td>
                    </tr>

                    <tr>
                        <td>Computador</td>
                        <td className="deposit">R$ 5.400,00</td>
                        <td>Venda</td>
                        <td>15/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}