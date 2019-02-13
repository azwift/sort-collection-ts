import {Sort,SortOptions} from "./sort";

export class BubbleSort extends Sort{
	constructor(){
		super();
	}
	
	public inPlace(data: any[], options?: SortOptions): boolean{
		if(!this.isArray(data)){
			console.error("data must be of type array");
			return false;
		}
		if(data.length <= 1)
			return true;

		if(!options){
      const option: SortOptions =  {
        compare : this.defaultCompare,
        order: 'asc'
      };
      this.bubbleSort(data, option);
    }
  	else{
      if(!options.order)
        options.order = 'asc';
 
      else if(!options.compare)
        options.compare = this.defaultCompare;

      this.bubbleSort(data,options);
    } 
		return true;
	}

	private bubbleSort(data: any[], options: SortOptions): boolean{
	 	let stillSorting: boolean = true;

	 	// asc order by default
		let asc: boolean = (options && options.order === "desc" ) ? false : true; 

		//start sorting
		while(stillSorting){
			stillSorting = false;
			for(let i = 1; i < data.length; i++){
				const result = options.compare(data[i - 1], data[i]);
				if((asc && result > 0) || (!asc && result < 0)){
					this.swap(data, i, i - 1);
					stillSorting = true;
				}
			}
		}
		return true;
	}
	
}
