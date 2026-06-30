import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Service()
export class AccountService {
    private http = inject(HttpClient);

    baseUrl = 'https://localhost:5001/api/';

    login(creds: any){
        return this.http.post(this.baseUrl + 'account/login', creds);
    }
}
