
export class Sort{
	constructor(){}

	protected swap(data: any[], i:number, j:number){
		let temp = data[i];
		data[i] = data[j];
		data[j] = temp;
	}

	protected isArray(data: any[]): boolean{
		return data instanceof Array;
	}

	protected isObject(data: any): boolean{
		return typeof(data) == "object";
	}
	protected defaultCompare (a: number, b: number): number{
		if(a == b)
			return 0;
		return (a < b) ? -1 : 1;
	}

	public rNew(data: any[] , options?: SortOptions): any[]{
		let newArray: any[];
		if(!this.isArray(data)){
			console.error("data must be of type array");
			return null;
		}
		else 
			newArray = data.slice();

		if(newArray.length <= 1)
			return newArray;

		this.inPlace(newArray, options);
		return newArray;
	}
	public inPlace(data: any[] , options?: SortOptions): boolean{
		console.log("Sort not implemented");
		return false;
	}
}

export interface SortOptions{
	order: string;
	compare: Function;
}