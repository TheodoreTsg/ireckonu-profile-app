import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Profile } from '../../shared/models';
import { ResourcesService } from '../../services/resources.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.sass']
})
export class SearchPageComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  resources: Profile[] = [];

  displayedColumns: string[] = ['photo', 'localid', 'email', 'name', 'phone', 'address', 'modified', 'view'];
  dataSource: MatTableDataSource<Profile>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private resourcesService: ResourcesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subs.push(this.resourcesService.resources$.subscribe(
      (resources: Profile[]) => {
       this.resources = resources;
        this.dataSource = new MatTableDataSource(this.resources);
        this.paginator._intl.itemsPerPageLabel = 'Rows per page:';
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate = function(data: any, filterValue: string) {
          return data.first_name.trim()
            .toLocaleLowerCase().indexOf(filterValue.trim().toLocaleLowerCase()) >= 0 ||
            data.last_name.trim()
              .toLocaleLowerCase().indexOf(filterValue.trim().toLocaleLowerCase()) >= 0 ||
            data.email.trim()
              .toLocaleLowerCase().indexOf(filterValue.trim().toLocaleLowerCase()) >= 0;
        };
      }
    ));
  }

  applyFilter(event: string, flag: boolean): void {
    if ((event.length === 0 && !flag) || (event.length > 0 && flag)) {
      this.dataSource.filter = event.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }

  onViewDetails(row: Profile): void {
    this.router.navigate(
      // ['details'], {state: {row}}
      ['/details', row.localid]
    );
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}
