import { Document } from 'mongoose';

export interface MenuOrder extends Document {
	readonly id: number;
	readonly name: string;
	readonly types: string;
	readonly price: number;
	readonly IsOrdered: boolean;

}