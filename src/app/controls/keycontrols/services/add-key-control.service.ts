import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../../environments/environment';
import { appConstants } from '../../../core/constants/appConstants';

@Injectable()
export class AddKeyControlService {

  private serverURL = environment.serverUrl + '/internalcontrolservice/addKeyControlDetails';
  constructor(private httpClient: HttpClient) { }

   /* This method will POST the data of addkeycontrol screen to backend */
  addKeyControls(data: any) {
    return this.httpClient.post(this.serverURL,
      data, appConstants.postHeaderOptions).map((res: Response) => res);


  }
}
