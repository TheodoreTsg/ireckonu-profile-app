import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from '../../shared/models';
import { Subscription } from 'rxjs';
import { ResourcesService } from '../../services/resources.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.sass']
})
export class ProfileDetailsComponent implements OnInit {

  profileDetails: Profile;
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
  ) {
    // this.profileDetails = this.router.getCurrentNavigation()?.extras.state as Profile;
    // console.log(this.profileDetails);
  }

  ngOnInit(): void {
    this.subs.push(this.resourcesService.resources$.subscribe(
      (resources: Profile[]) => {
        const details = resources.find(element => element.localid.toString() === this.route.snapshot.paramMap.get('id'));
        if (details !== undefined) {
          this.profileDetails = details;
        }
      }
    ));
  }
}
