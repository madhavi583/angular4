import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

//import { HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { GithubAuthInterceptor }  from './githubauth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS,
    useClass: GithubAuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
