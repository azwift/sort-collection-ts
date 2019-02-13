import {Sort,SortOptions} from "./sort";

export class HeapSort extends Sort{
	constructor(){
		super();
	}

   /**
   * @description sorts an array in place 
   * @param data - an array of type any
   * @param options - optional parameter, determines the compare function and the sorting order that will be used
   * @returns  true if the input has been succesfully sorted and false otherwise.
   * @modifies data, options
   */
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
      this.sortHeap(data, option);
    }
    else{
      if(!options.order)
        options.order = 'asc';
 
      if(!options.compare)
        options.compare = this.defaultCompare;

      this.sortHeap(data,options);
    } 
		return true;
	}

   /**
   * @description sorts an array in place using the heapsort algorithm
   * @param data - an array of type any
   * @param options - determines the compare function and the sorting order that will be used
   * @returns  void
   * @modifies data
   */
  private sortHeap(data: any[], options: SortOptions): void{

    //turn array into a heap
    this.heapify(data, data.length, options);

    this.swap(data, data.length - 1 , 0);
    for(let i = data.length - 2; i >= 0; i--){
      this.bubbleDown(data, 0, i + 1, options);

      //swap max or min with the last element in the heap
      this.swap(data, i, 0);
    }
  }

  /**
   * @description rearranges an array into in a min or max heap
   * @param data - an array of type any
   * @param length - length of the array
   * @param options - determines the compare function and the sorting order that will be used
   * @returns void
   */
  private heapify(data: any[], length: number, options: SortOptions): void{
      
      //non-leaf nodes only
      for(let i = length/2; i >= 0; i--)
          this.bubbleDown(data, Math.floor(i), length, options);
  }

  /**
   * @description recursively bubbles down the element at the index reprented by the curr variable 
   * @param curr - a number representing the index of the element to bubble down
   * @param length - the length of the subarray that the element will bubble down to
   * @param options - determines the compare function and the sorting order that will be used
   * @returns void
   */
  private bubbleDown(data: any[], curr: number, length: number, options: SortOptions): void{
    
    // if asc build max heap
    const asc: boolean = (options && options.order == "desc") ? false : true;

    //base case
    if(!data || curr >= length)
        return ;

    //indexes for left and right node 
    const l: number = (2 * curr + 1 >= length) ? null : 2 * curr + 1;
    const r: number = (2 * curr + 2 >= length) ? null : 2 * curr + 2;

    //find max or min element
    let maxmin: any;
    if(!data[l] && !data[r])
        return ;
    else if(!data[l])
      maxmin = data[r];
    else if(!data[r])
      maxmin = data[l];
    else{
      const result: number = options.compare(data[l], data[r]);
      maxmin = ((result < 0 && asc) || (result > 0 && !asc)) ? data[r] : data[l];
    }

    //compare max/min of child nodes with current element
    const result: number = options.compare(data[curr], maxmin);
  	if((asc &&  result < 0) ||
     (!asc && result > 0 )) {

      //swap with largest or smallest element (depending on asc) and swap index
      let temp = data[curr];
      data[curr] = maxmin ;

      //swap r or l with curr
      curr = options.compare(maxmin, data[l]) === 0 ? l : r;
      data[curr] = temp;
      return this.bubbleDown(data, curr, length, options);
  	}
    return ;
  }
}


