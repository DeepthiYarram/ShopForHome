import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  userDetails: any = [];
  
  sample: any;

  constructor(private userService: UserService) {
    this.getUserDetails();
  }

  ngOnInit(): void {
  }

  getUserDetails() {
    this.userService.getUsers().subscribe(
      (resp) => {
        console.log(resp);
        this.sample = resp;

        var count = Object.keys(resp).length;
        var j = 0;
        for (let i = 0; i < count; i++) {

          if (this.sample[i].role[0].roleName === "User") {
            //let demo = this.sample[i];
            //this.userDetails.push(demo);
            this.userDetails[j] = this.sample[i];
            j = j + 1;
            //this.userDetails = this.sample[i];
            console.log(this.userDetails);
          }
          else {
            continue;
          }
        }


      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteUser(userName: string) {
    this.userService.deleteUsers(userName).subscribe(
      (response) => {
        this.getUserDetails();
        
        alert("User -- " + userName + "-- deleted");
        window.location.reload();
      }, (error) => console.log(error)
    );

    //console.log(userName);
    
    //this.getUserDetails();


  }

  updateUser() {

  }
}
