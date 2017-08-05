export interface IActivity {
	// Properties for activity
	id: number
	name: string
	date: Date
	comments?: string // Optional parameter with questin mark
	distance?: number
	gpxData: string
}