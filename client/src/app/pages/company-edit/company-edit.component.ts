// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CompanyService } from '../../services/company.service';
// Import Models
import { Company } from '../../domain/wakanda_db/company';
import { User } from '../../domain/wakanda_db/user';

// START - USED SERVICES
/**
* CompanyService.create
*	@description CRUD ACTION create
*
* CompanyService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* CompanyService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Company
 */
@Component({
    selector: 'app-company-edit',
    templateUrl: 'company-edit.component.html',
    styleUrls: ['company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
    item: Company;
    listCompany: Company[];
    externalUser: User[];
    model: Company;
    formValid: Boolean;

    constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Company();
        this.externalUser = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.companyService.get(id).subscribe(item => this.item = item);
                this.userService.findByCompany(id).subscribe(list => this.externalUser = list);
            }
            // Get relations
        });
    }


    /**
     * Save Company
     *
     * @param {boolean} formValid Form validity check
     * @param Company item Company to save
     */
    save(formValid: boolean, item: Company): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.companyService.update(item).subscribe(data => this.goBack());
            } else {
                this.companyService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



