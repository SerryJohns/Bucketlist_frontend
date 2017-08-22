import { Headers } from '@angular/http';

export const TOKEN = JSON.parse(
    localStorage.getItem('id_token')
    );

export const HEADERS = new Headers({
    "Content-Type": "application/json"
});
