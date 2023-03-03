import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { catchError, from, map, of, switchMap} from 'rxjs';
import { Router } from '@angular/router';
import { FileService } from 'src/app/service/file.service';
import { FileActions } from '../actions/file.actions';


@Injectable()
export class FileEffects{
    constructor(private actions$: Actions, private fileService: FileService, private route: Router) {}

    createdFile$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(FileActions.createFile),
            switchMap((action) => {
                return from(this.fileService.createFile(action.file)).pipe(
                    map((data:any) => {
                        return FileActions.createFileSuccess({file: data}) 
                    }),
                    catchError((error) => {
                        return of(FileActions.createFileFailure({error: error}))
                    })
                )
            })
        )
    })
}