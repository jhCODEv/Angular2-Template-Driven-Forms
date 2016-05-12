import {Component} from '@angular/core';

@Component ({
    selector: 'app_log_in_fail' ,
    template: '<h3> Algo fallo </h3>'
})

export class AppLogInFail {
    
    pageTitle: string = 'El Usuario o Clave no son correctos.';
}