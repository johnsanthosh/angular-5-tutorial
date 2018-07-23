export class LoggingService {
    logStatusChange(status: string) {
        console.log('Account status changed, status= ' + status);
    }
}