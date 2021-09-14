import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Profile, RetrieveQuickFacts} from '../../shared/models';
import {Subject, Subscription} from 'rxjs';
import { ResourcesService } from '../../services/resources.service';
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.sass']
})
export class ProfileDetailsComponent implements OnInit, OnDestroy {

  profileDetails: Profile;
  private loadMyFactsLazy = new Subject<RetrieveQuickFacts>();
  quickFacts: RetrieveQuickFacts;
  details = [
    { id: 'prefix', value: 'Prefix'},
    { id: 'first_name', value: 'First Name'},
    { id: 'last_name', value: 'Last Name'},
    { id: 'suffix', value: 'Suffix'},
    { id: 'loyalty_member_id', value: 'Loyalty Member ID'},
    { id: 'phone', value: 'Phone'},
    { id: 'address', value: 'Address'},
    { id: 'birthdate', value: 'Birthdate'},
    { id: 'gender', value: 'Gender'}
  ];
  private subs: Subscription[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private resourcesService: ResourcesService
  ) {}

  ngOnInit(): void {
    this.subs.push(
      this.resourcesService.resources$.subscribe(
      (resources: Profile[]) => {
        const details = resources.find(element => element.localid.toString() === this.route.snapshot.paramMap.get('id'));
        if (details !== undefined) {
          this.profileDetails = details;
        }
      }
    ));
    this.subs.push(this.loadMyFactsLazy.pipe(
     switchMap(params =>
        this.resourcesService.retrieveFacts())
    ).subscribe(facts => this.quickFacts = facts));

    this.loadMyFactsLazy.next();
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}
