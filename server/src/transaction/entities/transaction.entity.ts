import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Transaction {
	@PrimaryColumn({ name: 'transaction_id' })
	id: number;
	@Column()
	title: string;
	@Column({ nullable: true })
	type: string;
	@Column()
	amount: number;
	@CreateDateColumn()
	createAt: Date;
	@UpdateDateColumn()
	updateAt: Date;
	@ManyToOne(() => User, (user) => user.transactions)
	@JoinColumn({ name: 'user_id' })
	user: User;
	@ManyToOne(() => Category, (category) => category.transactions)
	@JoinColumn({ name: 'category_id' })
	category: Category;
}
