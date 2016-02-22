//Data Objects
var bio = {
	"name": "Natalia Forno",
	"role": "Web Developer",
	"contacts": [
		{
			"mobile": "5491132085089",
			"email": "nataforno@gmail.com",
			"github": "natfor",
			"location": "Buenos Aires, Argentina"
		}
	],
	"welcome": "Welcome to my online resume",
	"skills": [
		"programming", "fast learning", "communication", "collaboration", "design", "problem solving"
	],
	"picture": "images/natalia.jpg"
};

var work = {
	"jobs":[
		{
			"employer": "Youth Delegation, La Paz Municipal Gonernment and Trópico, Bolivian Conservation Association",
			"title": "Consultant programmer and designer",
			"location": "La Paz, Bolivia",
			"dates": "October 2012 - May 2013",
			"description": "Design and development of three online interactive apps for education in global warming. Built using Adobe Flash, Adobe Illustrator, Adobe Photoshop, and ActionScript 3",
			"url" : "http://www.lapaz.bo/index.php?option=com_content&view=category&layout=blog&id=192&Itemid=720"
		},
		{
			"employer": "Cognizant Technology Solutions",
			"title": "Programmer Analyst - DoubleClick Studio Specialist",
			"location": "Buenos Aires, Argentina",
			"dates": "September 2013 - July 2015",
			"description": "Technical support for clients using the DoubleClick Studio platform, Studio's JavaScript and ActionScript (2 and 3) components, and Google Web Designer for Rich Media development",
			"url" : "http://www.cognizant.com/"
		},
		{
			"employer": "Cognizant Technology Solutions",
			"title": "Programmer Analyst - DoubleClick Rich Media Quality Assurance Specialist",
			"location": "Buenos Aires, Argentina",
			"dates": "July 2015 -  September 2015",
			"description": "Verifying that Creatives developed using DoubleClick Studio follow the standard Quality guidelines and the publisher's requirements",
			"url" : "http://www.cognizant.com/"
		},
				{
			"employer": "Cognizant Technology Solutions",
			"title": "Programmer Analyst - AstraZeneca Web Services Quality Assurance specialist",
			"location": "Buenos Aires - Argentina",
			"dates": "September 2015 - January 2016",
			"description": "Validating AstraZeneca Websites follow Quality standards set for the project, test script creation, process organization",
			"url" : "http://www.cognizant.com/"
		},
		{
			"employer": "Cognizant Technology Solutions",
			"title": "Associate - AstraZeneca Web Services Quality Assurance specialist and Front-End Developer",
			"location": "Buenos Aires - Argentina",
			"dates": "Januay 2016 - Present",
			"description": "Validating AstraZeneca Websites follow Quality standards set for the project, Front-End Development with Adobe CQ5",
			"url" : "http://www.cognizant.com/"
		}
	]
};

var projects = {
	"projectList":[
		{
			"title" : "Online Potfolio",
			"dates" : "October 2015",
			"description" : "Udacity's Fornt End Developer Nanodegree project 1",
			"image": "images/Natfor_logo.svg",
			"url": "https://github.com/Natfor/Natalia-Forno-Portfolio"
		},
		{
			"title" : "Arcade Game",
			"dates" : "Coming soon",
			"description" : "Udacity's Fornt End Developer Nanodegree project 3",
			"image": "images/arcade_game.svg",
			"url": "https://github.com/Natfor/Classic-Arcade-Game"
		},
		{
			"title" : "Website Optimization",
			"dates" : "Coming soon",
			"description" : "Udacity's Fornt End Developer Nanodegree project 4",
			"image": "images/main_image_min.png",
			"url": "https://github.com/Natfor/Website-Optimization"
		},
		{
			"title" : "Neighborhood Map",
			"dates" : "Coming soon",
			"description" : "Udacity's Fornt End Developer Nanodegree project 5-1",
			"image": "images/bsas_map.png",
			"url": "https://github.com/Natfor/Neighborhood-Map"
		},
		{
			"title" : "Health Tracker",
			"dates" : "Coming soon",
			"description" : "Udacity's Fornt End Developer Nanodegree project 5-2",
			"image": "images/health_tracker.jpg",
			"url": "https://github.com/Natfor/Health-Tracker"
		}


	]
};


var education = {
	"schools":[
		{
			"name" : "School of Multimedial Arts, Da Vinci",
			"location" : "Buenos Aires, Argentina",
			"degree" : "Video Game Design  (Half of the career completed)",
			"dates" : "March 2010 - November 2011",
			"url" : "https://www.davinci.edu.ar/cursos/formacion/game-design"
		},
		{
			"name" : "Education IT",
			"location" : "Buenos Aires, Argentina",
			"degree" : "Web programming - Course",
			"dates" : "October 2012 - May 2013",
			"url" : "http://www.educacionit.com/carrera-prog-web"
		},
		{
			"name" : "School of Multimedial Arts, Da Vinci",
			"location" : "Buenos Aires, Argentina",
			"degree" : "Web Design - Course",
			"dates" : "March 2012 - June 2012",
			"url" : "https://www.davinci.edu.ar/cursos/formacion/diseno-y-maquetado-web-y-mobile"
		}
	],
	"onlineCourses":[
		{
			"title" : "Front-End Development Nanodegree",
			"school" : "Udacity",
			"dates" : "May 2015 - present",
			"courseUrl" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
			"schoolUrl": "https://www.udacity.com"
		}
	]
};

/********BIO OBJECT DISPLAY***********/

bio.display = function(){
//Header
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcome);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").prepend(formattedPic);
	$("#header").append(formattedMessage);

//Contacts
	var contactarray = [];
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[0].mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts[0].email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[0].github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[0].location);
	contactarray.push(formattedMobile, formattedEmail, formattedGithub, formattedLocation);


	for(var i = 0; i<contactarray.length; i++){
		$("#topContacts").append(contactarray[i]);
		$("#footerContacts").append(contactarray[i]);
	};

//Skills
	$("#skillsDiv").append(HTMLskillsStart);
	for(var i=0; i<bio.skills.length; i++){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
		console.log(formattedSkill);
	};
};

bio.display();


/********WORK OBJECT DISPLAY***********/
work.display = function(){
	console.log(work.jobs.length);
$("#workExperience").append(HTMLworkStart);

work.jobs.forEach(function(job){
	var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url);
	$(".work-entry").append(formattedEmployer);

	var formattedTitle = HTMLprojectTitle.replace("%data%", job.title).replace("#", job.url);;
	$(".work-entry").append(formattedTitle);

	var formattedDates = HTMLworkDates.replace("%data%", job.dates);
	$(".work-entry").append(formattedDates);

	var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
	$(".work-entry").append(formattedLocation);

	var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
	$(".work-entry").append(formattedDescription);
 })
};
work.display();

/********PROJECTS OBJECT DISPLAY***********/

projects.display = function(){
	console.log("projects display");
	$("#projects").append(HTMLprojectStart);

	projects.projectList.forEach(function(project){
		var fomattedTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
		$(".project-entry").append(fomattedTitle);

		var fomattedDate = HTMLprojectDates.replace("%data%", project.dates);
		$(".project-entry").append(fomattedDate);

		var fomattedDescription = HTMLprojectDescription.replace("%data%", project.description);
		$(".project-entry").append(fomattedDescription);

		var fomattedImage = HTMLprojectImage.replace("%data%", project.image);
		$(".project-entry").append(fomattedImage);

 })
};
projects.display();


/********EDUCATION OBJECT DISPLAY***********/
education.display = function(){
	$("#education").append(HTMLschoolStart);

	education.schools.forEach(function(school){
		var formattedName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
		$(".education-entry").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree).replace("#", school.url);;
		$(".education-entry").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
		$(".education-entry").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
		$(".education-entry").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", "");
		$(".education-entry").append(formattedMajor);
 })

	$(".education-entry").append(HTMLonlineClasses);

	education.onlineCourses.forEach(function(course){
		var formattedTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.courseUrl);
		$(".education-entry").append(formattedTitle);

		var formattedSchool = HTMLonlineSchool.replace("%data%", course.school).replace("#", course.courseUrl);
		$(".education-entry").append(formattedSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
		$(".education-entry").append(formattedDates);

		var formattedUrl = HTMLonlineURL.replace("%data%", course.schoolUrl).replace("#", course.schoolUrl);
		$(".education-entry").append(formattedUrl);
	})
};
education.display();


//Internationalize button
//OTHER
$('#lets-connect').append(internationalizeButton);

function inName(){
	var newName = bio.name;
	console.log(newName);
	var names = newName.split(" ");
	console.log(names[0]);
	var firstName = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	var lastName = names[1].toUpperCase();
	newName = firstName + " " + lastName;
	console.log(newName);
	return newName;
}

//map
$("#mapDiv").append(googleMap);