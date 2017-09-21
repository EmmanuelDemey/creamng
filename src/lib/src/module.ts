import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

import { Pagination } from './components/pagination/pagination';


@NgModule({
    imports: [CommonModule],
    declarations : [Pagination ],
    exports: [Pagination]
})
export class CreamNgModule {}
