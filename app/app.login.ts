import {Component} from '@angular/core';


@Component ({
    selector: 'app_log_in',
    templateUrl: './app/templates/login.html'
})


export class AppLogIn {
    
    pageTitle: string = 'Ingrese su Usuario y Password';
    
     vm = {user: '', password: ''};

    onSubmitLogIn() {
        alert('User: ' + this.vm.user + ' Password: ' + this.vm.password);
    }
}