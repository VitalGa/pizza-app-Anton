import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartAction } from '../../store/cart.slice';
import { MouseEventHandler } from 'react';

function ProductCard(props: ProductCardProps) {
	const dispatch = useDispatch<AppDispatch>();

	const add = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(cartAction.add(props.id));
	};

	return (
		<Link to={`/product/${props.id}`} className={styles['link']}>    
			<div  className={styles['card']}>
				<div className={styles['head']} style={{backgroundImage: `url('${props.image}')`}}>
					<div className={styles['price']}>
						{props.price}&nbsp;
						<span className={styles['currency']}>₽</span>
					</div>
					<button className={styles['add-to-card']} onClick={add as unknown as MouseEventHandler<HTMLButtonElement>}>
						<img src="/cart-button-icon.svg" alt="Добавить в корзину" />
					</button>
			
					<div className={styles['rating']}>
						{props.rating}&nbsp;
						<img src="/star-icon.svg" alt="Иконка звезды" />
					</div>
				</div>
				<div className={styles['footer']}>
					<div className={styles['title']}>{props.name}</div>
					<div className={styles['description']}>{props.description}</div>
				</div>      
			</div>
		</Link>
	);
}

export default ProductCard;