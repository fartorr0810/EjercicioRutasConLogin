import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from '../interfaces/server.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessControlService } from 'src/app/access-control/access-control.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
  ]
})
export class ServersComponent implements OnInit {
  public servers: Server[] = [];
  constructor(private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute,
    private accesscontrol: AccessControlService) { }

  ngOnInit(): void {
    if (this.accesscontrol.getToken()!=null){
      this.servers = this.serversService.getServers();
    }else{
      console.log("No LOG");
      this.router.navigateByUrl("/");
    }
  }

  onReload() {
    this.router.navigate(['servers']), { relativeTo: this.route };
  }

}
