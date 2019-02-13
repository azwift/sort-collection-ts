import {Sort,SortOptions} from "./sort";

export class MergeSort extends Sort{
    constructor(){
			super();
    }

    public rNew(data: any[], options?: SortOptions): any[]{
			if(!this.isArray(data)){
				console.error("data must be of type array");
				return data;
			}
			if(data.length <= 1)
				return data;

			if(!options){
	      const option: SortOptions =  {
	        compare : this.defaultCompare,
	        order: 'asc'
	      };
	      return this.mergeSort(data, option);
	    }
	    else{
	      if(!options.order)
	        options.order = 'asc';
	 
	      if(!options.compare)
	        options.compare = this.defaultCompare;
	      console.log(options.order);
	    	return this.mergeSort(data ,options);
	    } 
    }

    private mergeSort(data: any[], options: SortOptions): any[]{
        if(data.length < 2)
        	return data;

        //find mid point
      	const mid  = Math.floor(data.length / 2);
      	const left = this.mergeSort(data.slice(0, mid), options);
      	const right = this.mergeSort(data.slice(mid), options);

      	return this.merge(left,right, options);
    }

    private merge(left: any[], right: any[], options: SortOptions): any[]{

    	// asc order by default
    	const asc = (options && options.order == "desc") ? false : true;
    	const newArray = new Array(left.length + right.length);
    	
    	//init loop variables
    	let curr = 0;
    	let i = 0; 
    	let j = 0;
	    while (i < left.length && j < right.length){
	    	if(options.compare(left[i], right[j]) > 0) {
					newArray[curr] = asc ? right[j] : left[i];
					if(asc) 
						j++;
					else 
						i++;
	    	}
	    	else{
	    		newArray[curr] = asc ? left[i] : right[j];
					if(asc) 
						i++;
					else 
						j++;
	    	}
	    	curr++;
	    }

	    //left over elements after merging
	    while (i < left.length){
	    	newArray[curr] = left[i];
	    	i++;
	    	curr++;
	    }
	    while (j < right.length){
	    	newArray[curr] = right[j];
	    	j++;
	    	curr++;
	    }

	    return newArray;
	}  
}