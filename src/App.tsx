import { MouseEvent, useState } from 'react'; 
import Button from './components/Button/Button';
import Input from './components/Input/Input';


function App() {
	const [counter, setCounter] = useState<number>(0);

	const addCounter = (e: MouseEvent) => {
		console.log(e);
	};

	return (    
		<>
			<Button onClick={() => {addCounter;}}>Кнопка</Button>    
			<Button appearance='big' onClick={addCounter}>Кнопка</Button> 
			<Input placeholder='Email'/>
			<div>
				<a href="/">Меню</a>
				<a href="cart">Корзина</a>
			</div>
			{/* <Routes>
				<Route path='/' element={<Menu/>}/>
				<Route path='/cart' element={<Cart/>} />
				<Route path='*' element={<Error/>} />
			</Routes> */}
		</>
	);
}

export default App;
