export class Upload {
	// represent data being fed to firebase db
	$key: string;
	file: File;
	url: string;
	progress: number;
	createdOn: Date = new Date();
	name: string;

	constructor(file: File) {
		this.file = file;
	}
}