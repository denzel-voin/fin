import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { Transaction } from '../../transaction/entities/transaction.entity';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	email: string;
	@Column()
	password: string;
	@CreateDateColumn()
	createAt: Date;
	@UpdateDateColumn()
	updateAt: Date;
	@OneToMany(() => Category, (category) => category.user, {
		onDelete: 'CASCADE'
	})
	categories: Category[];
	@OneToMany(() => Transaction, (transaction) => transaction.user, {
		onDelete: 'CASCADE'
	})
	transactions: Transaction[];
}
