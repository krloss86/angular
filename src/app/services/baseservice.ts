import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

export class BaseService {
    protected baseUrl = environment.apiUrl;

    constructor(protected httpClient: HttpClient) {
        console.log('creando BaseService...');
    }

}
