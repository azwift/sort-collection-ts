import {Sort,SortOptions} from "./sort";

export class InsertionSort extends Sort{
    constructor(){
		super();
    }

    public inPlace(data: any[], options?: SortOptions): boolean{
		if(!this.isArray(data)){
			console.error("data must be of type array");
			return false;
		}
		if(!options){
          const option: SortOptions =  {
            compare : this.defaultCompare,
            order: 'asc'
          };
          this.insertionSort(data, option);
        }
        else{
          if(!options.order)
            options.order = 'asc';
     
          else if(!options.compare)
            options.compare = this.defaultCompare;

          this.insertionSort(data,options);
        } 
        
     return true;
    }
    private insertionSort(data: any[], options: SortOptions){

       // asc order by default
       let asc: boolean = (options && options.order === "desc" ) ? false : true; 

       //start sorting 
        for(let i = 1; i < data.length; i++){
            for(let j = i; j > 0; j--){
                if((asc && options.compare(data[j], data[j-1]) < 0) || (!asc && options.compare(data[j], data[j-1]) > 0)){
                    this.swap(data, j, j-1 );
                }
                else 
                    break;
            }
        }
    }
}