
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/toArray';


@Component({
	selector: 'c3m-pagination',
	templateUrl: './pagination.html',
	styleUrls: ['./pagination.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class Pagination implements OnInit {

	@Input("startPage")
	currentPage: number = 1;

	@Output()
	pageChange: EventEmitter<number> = new EventEmitter();

	private _totalNbItems: number;
	private _nbItemsPerPage: number;
	private _nbPages: number;

	nbPagesSet: number[];
	firstItem: number = 0;
	lastItem: number = 0;

	@Input()
	set totalNbItems(val: number) {
		this._totalNbItems = val;
		this.updateComputedAttrs();
	}

	get totalNbItems(): number { return this._totalNbItems; }

	@Input()
	set nbItemsPerPage(val: number) {
		this._nbItemsPerPage = val;
		this.updateComputedAttrs();
	}

	get nbItemsPerPage(): number { return this._nbItemsPerPage; }

	set nbPages(val: number) {
		this._nbPages = val;
		Observable.range(1, val).toArray()
			.subscribe((theRange: number[]) => {
				this.nbPagesSet = theRange;
			});
	}

	get nbPages() {
		return this._nbPages;
	}

	ngOnInit() {
		this.updateComputedAttrs();
	}


	// ######### View Methods
	// ##### Go To Page
	switchPage(page: number): boolean {
		this.currentPage = page;
		this.updateItemsIndexesFromPage();
		this.pageChange.next(page);

		//Disable standard link behavior
		return false;
	}

	switchToFirst(): boolean {
		return this.switchPage(1);
	}

	switchToPrev(): boolean {
		const prev = Math.max(1, this.currentPage - 1);
		return this.switchPage(prev);
	}

	switchToNext(): boolean {
		const next = Math.min(this.nbPages, this.currentPage + 1);
		return this.switchPage(next);
	}

	switchToLast(): boolean {
		return this.switchPage(this.nbPages);
	}

	// ##### Get appropriated image
	getFirstPageImage = () => `pic_first${this.currentPage === 1 ? '_off' : ''}.gif`;
	getPrevPageImage = () => `pic_prev${this.currentPage === 1 ? '_off' : ''}.gif`;
	getNextPageImage = () => `pic_next${this.currentPage === this.nbPages ? '_off' : ''}.gif`;
	getLastPageImage = () => `pic_last${this.currentPage === this.nbPages ? '_off' : ''}.gif`;

	//Utils
	private updateItemsIndexesFromPage(): void {
		this.firstItem = this.nbItemsPerPage * (this.currentPage - 1) + 1;
		this.lastItem = Math.min(this.nbItemsPerPage * this.currentPage, this.totalNbItems);
	}

	private updateComputedAttrs(): void {
		if (this._totalNbItems && this._nbItemsPerPage) {
			this.nbPages = Math.ceil(this._totalNbItems / this._nbItemsPerPage);
		}
		this.updateItemsIndexesFromPage();
	}
}