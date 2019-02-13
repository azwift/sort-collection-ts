import {Sort,SortOptions} from "./sort";

export class SelectionSort extends Sort{
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
          this.selectionSort(data, option);
        }
        else{
          if(!options.order)
            options.order = 'asc';
     
          if(!options.compare)
            options.compare = this.defaultCompare;

          this.selectionSort(data,options);
        } 
        
        return true;
    }

    private selectionSort(data: any[], options: SortOptions){

        // asc order by default
        let asc: boolean = (options && options.order === "desc" ) ? false : true; 
        
        //init sorting variables
        let ssVars: selectionSortVars = {
            minmax: null,
            minmaxInd: 0
        };

        //start sorting
        for(let i = 0; i < data.length - 1; i++){
            ssVars.minmax = data[i];
            ssVars.minmaxInd = i;
            for(let j = i + 1; j >= 0; j--){
                if((asc && options.compare(data[j], ssVars.minmax) > 0) || (!asc && options.compare(data[j], ssVars.minmax) > 0)){
                    ssVars.minmax = data[j]; 
                    ssVars.minmaxInd = j;
                }
            }
            if(ssVars.minmaxInd !== i)
                this.swap(data, i, ssVars.minmaxInd);
        }
        return true;
    }
}

interface selectionSortVars{
    minmax: any,
    minmaxInd: number
}