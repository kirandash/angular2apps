import { IActivity } from './activity.model';

// Sample data of type mentioned in IActivity array
export const SAVED_ACTIVITIES: IActivity[] = [
{
	"id" : 1,
	"name" : "Der Klaussee im Ahrntal - wandertour",
	"date" : new Date('01/02/2017'),
	"distance" : 6,
	"comments" : "Nice day, cool temps",
	"gpxData" : '../../assets/gpx/1.gpx'
},
{
	"id" : 2,
	"name" : "Hydepark Toussaud",
	"date" : new Date('03/01/2017'),
	"distance" : 12,
	"comments" : "Cold lide switzerland",
	"gpxData" : '../../assets/gpx/2.gpx'
},
{
	"id" : 3,
	"name" : "Leymen France to Ettingen Switzerland",
	"date" : new Date('04/05/2017'),
	"distance" : 14,
	"comments" : "Humid and rough",
	"gpxData" : '../../assets/gpx/3.gpx'
},
{
	"id" : 4,
	"name" : "La Palma: Vulkane San Antonio und Teneguia",
	"date" : new Date('06/03/2017'),
	"distance" : 7,
	"comments" : "Rainy day",
	"gpxData" : '../../assets/gpx/4.gpx'
}
];