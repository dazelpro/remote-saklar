import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';  //Tambahkan baris ini
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { SharesModule } from './shares/shares.module';
import { DeviceModule } from './modules/device/device.module';
import { ProfileModule } from './modules/profile/profile.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        RoutingModule,
        AuthModule,
        DashboardModule,
        DeviceModule,
        ProfileModule,
        SharesModule,
        SocialLoginModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                            provider: new GoogleLoginProvider(
                                environment.googleAuthKey
                        )
                    }
                ]
            } as SocialAuthServiceConfig,
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
