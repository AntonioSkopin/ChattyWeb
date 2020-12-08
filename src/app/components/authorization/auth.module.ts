import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from 'src/app/shared/material.module';
import { authReducer } from './reducers/auth.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        StoreModule.forFeature('AuthState', authReducer),
    ],
    entryComponents: [
        // FilterComponent
    ],
})

export class AuthModule { }