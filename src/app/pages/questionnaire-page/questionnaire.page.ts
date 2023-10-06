import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientModel } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-questionnaire-page',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.css']
})
export class QuestionnairePage {
  public client: ClientModel = {_id: "", name: "", surname: "", last_phase: 1, registration_date: new Date(), active: true};

  constructor(private router: Router, private clientService: ClientService) {
    // this.clientService.selectedClient$.subscribe(value => {
    //   this.clientName = `${value.name} ${value.surname}`;
    //   this.client = value;
    // });
  }

  ngOnInit() {
    this.client = this.clientService.getSelectedClient();
  }
}
