import { Counter } from './componentes/Counter';
import { RepositoryList } from './componentes/RepositoryList'
import './styles/global.scss'

export function App(){
    return(
        <>
            <RepositoryList />
            <Counter />
        </>
    );
}