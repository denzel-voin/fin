import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import { Transaction } from '../../transaction/entities/transaction.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Category {
	@PrimaryGeneratedColumn({ name: 'category_id' })
	id: number;
	@Column()
	title: string;
	@CreateDateColumn()
	createAt: Date;
	@UpdateDateColumn()
	updateAt: Date;
	@ManyToOne(() => User, (user) => user.categories)
	@JoinColumn({ name: 'user_id' })
	user: User;
	@OneToMany(() => Transaction, (transaction) => transaction.category)
	transactions: Transaction[];
}
