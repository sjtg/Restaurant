export class CreateMenuOrderDto {
	readonly id : number;
	readonly name: string;
	readonly types: string;
	readonly price: number; 
	readonly IsOrdered: boolean;
}