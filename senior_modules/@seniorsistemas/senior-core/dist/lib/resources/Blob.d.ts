import { RequestClient } from '../base/RequestClient';
import { SeniorApi } from '../SeniorApi';
import { BlobRequest, CommitFileInput, BlobDetails, CommitFileOutput, UploadFileAndCommitOutput } from '../dto/Blob';
import { RequestReturn } from '../model';
export declare class Blob extends RequestClient {
    constructor(seniorApi: SeniorApi);
    uploadFile(blobRequest: BlobRequest): Promise<RequestReturn<BlobDetails>>;
    commitFile(commitFileInput: CommitFileInput): Promise<RequestReturn<CommitFileOutput>>;
    uploadAndCommitFile(blobRequest: BlobRequest, file: File): Promise<UploadFileAndCommitOutput>;
}
