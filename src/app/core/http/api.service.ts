import {Injectable, inject} from '@angular/core'
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {API_URL} from './api-url.token'

@Injectable({providedIn: 'root'})
export class ApiService {
  private readonly http = inject(HttpClient)
  private readonly apiUrl = inject(API_URL)
  // private readonly storageUrl = inject(STORAGE_URL);

  public get<T>(
    url: string,
    params: HttpParams = new HttpParams(),
  ): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${url}`, {
      headers: this.headers,
      params,
    })
  }

  public post<T, D>(url: string, data?: D): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${url}`, JSON.stringify(data), {
      headers: this.headers,
    })
  }

  public put<T, D>(url: string, data: D): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${url}`, JSON.stringify(data), {
      headers: this.headers,
    })
  }

  public delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${url}`, {
      headers: this.headers,
    })
  }
  public patch<T, D>(url: string, data?: D): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}${url}`, JSON.stringify(data), {
      headers: this.headers,
    })
  }

  /*public uploadImage<T, D>(file: File): Observable<T> {
    const formData = new FormData();
    formData.append('image', file);

    const options = {
      headers: new HttpHeaders({
        Authorization: 'Bearer public_FW25by7DQLRjYXxwbUQNU7g8QWbX',
      }),
    };

    // Загрузка файла на сервер
    return this.http.post<T>(`${this.storageUrl}`, formData, options);
  }*/

  private get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }

    return new HttpHeaders(headersConfig)
  }
}
