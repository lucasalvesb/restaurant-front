import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
		"_id": "64aad48a1b30dab4844c4688",
		"table": "123",
		"status": "WAITING",
		"products": [
			{
				"product": {
					"name": "Mozarella Pizza",
					"imagePath": "1688916335604-mozarella.png",
					"price": 45,
				},
				"quantity": 3,
				"_id": "64aad48a1b30dab4844c4689"
			},
			{
				"product": {
					"name": "Coca Cola",
					"imagePath": "1688915845950-coca-cola.png",
					"price": 7,
				},
				"quantity": 6,
				"_id": "64aad48a1b30dab4844c468a"
			}
		],
	}
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕟"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
