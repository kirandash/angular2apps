//Injectable libraries for using services
import {Injectable} from '@angular/core';
//http servers
import {Http, Headers} from '@angular/http';
//Observable
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
	private username:string;
	private client_id = '6823cbc2727f50118de4';
	private client_secret = 'dca744e660055b72d8f5d4af20d07fb64f4696a2';

	constructor(private _http: Http){
		console.log('Github service is now Ready');
		this.username='kirandash';
	}

	getUser(){
		return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
	}
}