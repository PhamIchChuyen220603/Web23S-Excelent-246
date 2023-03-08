import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { catchError, from, map, of, switchMap} from 'rxjs';
import { Router } from '@angular/router';
import { FileService } from 'src/app/service/file.service';
import { FileActions } from '../actions/file.actions';


@Injectable()
export class FileEffects{
    constructor(private actions$: Actions, private fileService: FileService, private route: Router) {}

    getAllFiles$ = createEffect(() => this.actions$.pipe(
        ofType(FileActions.getAllFiles),
        switchMap((action) => {
            return from(this.fileService.getAllFiles()).pipe(
                map((result:any) => {
                    return FileActions.getAllFilesSuccess({files: result})
                }),
                catchError((error) => {
                    return of(FileActions.getAllFilesFailure({error: error}))
                })
            )
        })
    ))

    getFileById$ = createEffect(() => this.actions$.pipe(
        ofType(FileActions.getFileById),
        switchMap((action) => {
            return from(this.fileService.getFileById(action.fileId).pipe(
                map((result:any) => {
                    return FileActions.getFileByIdSuccess({file: result});
                }),
                catchError((error) => {
                    return of(FileActions.getFileByIdFailure({error: error}))
                })
            ))
        })
    ))

    getFilesByUserId$ = createEffect(() => this.actions$.pipe(
        ofType(FileActions.getFilesByUserId),
        switchMap((action) => {
            return from(this.fileService.getFilesByOwner(action.userId)).pipe(
                map((result:any) => {
                    return FileActions.getFilesByUserIdSuccess({files: result})
                }),
                catchError((error) => {
                    return of(FileActions.getFilesByUserIdFailure({error: error}))
                })
            )
        })
    ))

    getFilesByMemberId$ = createEffect(() => this.actions$.pipe(
        ofType(FileActions.getFilesByMemberId),
        switchMap((action) => {
            return from(this.fileService.getFilesByMember(action.memberId)).pipe(
                map((result:any) => {
                    return FileActions.getFilesByMemberIdSuccess({files: result});
                }),
                catchError((error) => {
                    return of(FileActions.getFilesByMemberIdFailure({error: error}))
                })
            )
        })
    ))


    createFile$ = createEffect(() => this.actions$.pipe(
        ofType(FileActions.createFile),
        switchMap((action) => {
            return from(this.fileService.createFile(action.file)).pipe(
                map((result:any) => {
                    return FileActions.createFileSuccess({file: result})
                }),
                catchError((error) => {
                    return of(FileActions.createFileFailure({error: error}))
                })
            )
        })
    )) 

    

    deleteFileById$ = createEffect(() => this.actions$.pipe(
        ofType(FileActions.deleteFile),
        switchMap((action) => {
            return from(this.fileService.deleteById(action.fileId)).pipe(
                map((result:any) => {
                    return FileActions.deleteFileSuccess({fileId: action.fileId})
                }),
                catchError((error) => {
                    return of(FileActions.deleteFileFailure({error: error}))
                })
            )
        })
    ))
    
    updateFileById$ = createEffect(() => this.actions$.pipe(
        ofType(FileActions.updateFile),
        switchMap((action) => {
            return from(this.fileService.updateById(action.fileId, action.file)).pipe(
                map(() => {
                    return FileActions.updateFileSuccess({fileId: action.fileId, file: action.file})
                }),
                catchError((error) => {
                    return of(FileActions.updateFileFailure({error: error}))
                })
            )
        })
    ))

}