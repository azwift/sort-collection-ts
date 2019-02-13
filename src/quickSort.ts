import {Sort,SortOptions} from "./sort";

export class QuickSort extends Sort{
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
      this.quickSort(data, 0, data.length, option);
    }
    else{
      if(!options.order)
        options.order = 'asc';
 
      if(!options.compare)
        options.compare = this.defaultCompare;

      this.quickSort(data, 0, data.length,options);
    } 

		return true;
	}

	private quickSort(data: any[], start: number, end: number,options?: SortOptions){
		if(end - start <= 1){
			return;
		}
		let partitionIndex: number = this.partition(data, start, end, options);
		this.quickSort(data, start, partitionIndex, options);
		this.quickSort(data, partitionIndex + 1, end, options);
	}	
	private partition(data: any[], l: number, r: number, options?: SortOptions): number{
		// check if asc or desc order
    const asc = (options && options.order == "desc") ? false : true;

	  const pivot: number = data[r - 1];
	  let indL: number =  l;
    let indR: number = r - 1;
    while (indL < indR){
     	 if ((options.compare(data[indR -1], pivot) > 0 && asc) || (options.compare(data[indR - 1], pivot) < 0 && !asc)){
          data[indR] = data[indR - 1];
          indR--;
          data[indR] = pivot; 
        }
       else{
           let temp: number = data[indR - 1];
           data[indR - 1] = data[indL];
           data[indL] = temp;
           indL++;
       }
    }
    return indR;
	}
}
