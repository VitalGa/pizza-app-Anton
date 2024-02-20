import styles from './CartItem.module.css'; 
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartAction } from '../../store/cart.slice';
import { CartItemProps } from './CartItem.props';

function CartItem(props: CartItemProps) {
	const dispatch = useDispatch<AppDispatch>();

	const increase = () => {		
		dispatch(cartAction.add(props.id));
	};

	const decrease = () => {
		dispatch(cartAction.remove(props.id));
	};

	const remove = () => {
		dispatch(cartAction.delete(props.id));
	};

	return (	    
		<div  className={styles['item']}>			
			<div className={styles['image']} style={{ backgroundImage: `url('${props.image}')`}}></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['price']}>{props.price}&nbsp;₽</div>
			</div>
			<div className={styles['actions']}>
				<button className={styles['minus']} onClick={decrease}>
					<img src="/minus-icon.svg" alt="Удалить из корзины" />
				</button>
				<div className={styles['number']}>{props.count}</div>
				<button className={styles['plus']} onClick={increase}>
					<img src="/plus-icon.svg" alt="Добавить в корзину" />
				</button>
				<button className={styles['remove']} onClick={remove}>
					<img src="/delete-icon.svg" alt="Удалить все" />
				</button>
			</div>			
		</div>		
	);
}

export default CartItem;