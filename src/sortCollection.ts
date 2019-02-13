import * as bubbleSort from "./bubbleSort";
import * as heapSort from "./heapSort";
import * as insertionSort from "./insertionSort";
import * as selectionSort from "./selectionSort";
import * as mergeSort from "./mergeSort";
import * as quickSort from "./quickSort";

export class SortCollection {
	
	//all sorts
	public bubbleSort: bubbleSort.BubbleSort;
	public heapSort: heapSort.HeapSort;
	public insertionSort: insertionSort.InsertionSort;
	public selectionSort: selectionSort.SelectionSort;
	public mergeSort: mergeSort.MergeSort;
	public quickSort: quickSort.QuickSort;

	constructor(){

		//construct all sorts
		this.bubbleSort = new bubbleSort.BubbleSort();
		this.heapSort = new heapSort.HeapSort();
		this.insertionSort = new insertionSort.InsertionSort();
		this.selectionSort = new selectionSort.SelectionSort();
		this.mergeSort = new mergeSort.MergeSort();
		this.quickSort = new quickSort.QuickSort();
	}

}