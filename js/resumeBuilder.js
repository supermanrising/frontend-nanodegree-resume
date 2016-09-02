var bio = {
	"name": "Ryan Vrba",
	"role": "Web Developer",
	"welcomeMessage": "I am a Front End Web Developer, Photographer, and Holistic Fitness Coach.  I love to work closely with my clients to design something creative that will work for you and your needs.",
	"contacts": {
		"phone": "604.949.1024",
		"email": "ryan.vrba@gmail.com",
		"github": {
			"name": "supermanrising",
			"url": "https://github.com/supermanrising"
		},
		"location": "Vancouver, BC",
		"instagram": {
			"name": "ryanvrba",
			"url": "https://instagram.com/ryanvrba/"
		}
	},
	"skills": ["HTML", "CSS", "PHP", "Javascript", "Photography"],
	"picture": "images/profile.jpg"

}

bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
	$("#header-content-inner").prepend(formattedRole);
	$("#header-content-inner").prepend(formattedName);
	$("#header-content-inner").append(formattedPicture);

	if (bio.welcomeMessage !== "") {
		var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header-content-inner").append(formattedMessage);
	}

	var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.phone);
	var formattedEmail = HTMLemail.replace(/%data%/gi, bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github.name).replace("%url%", bio.contacts.github.url);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedInstagram = HTMLinstagram.replace("%data%", bio.contacts.instagram.name).replace("%url%", bio.contacts.instagram.url);

	var formattedContacts = formattedPhone + formattedEmail + formattedGithub + formattedInstagram + formattedLocation;

	$("#topContacts").append(formattedContacts);
	$("#footerContacts").append(formattedContacts);

	if (bio.skills.length > 0) {
		$("#header-content-inner").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkill);
	}
}

bio.display();

var education = {
	"schools": [
		{
			"name": "BCIT",
			"location": "Vancouver, BC",
			"degree": "Introduction to Web Development",
			"majors": [],
			"dates": 2009,
			"url": "http://bcit.ca"
		},
		{
			"name": "Douglas College",
			"location": "Coquitlam, BC",
			"degree": "Introduction to Psychology",
			"majors": [],
			"dates": 2009,
			"url": "http://douglas-college.ca"
		}
	],
	"onlineCourses": [
		{
			"title": "Web Development Nanodegree",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://udacity.com"
		},
		{
			"title": "IOS Development with Swift",
			"school": "Treehouse",
			"dates": 2014,
			"url": "http://teamtreehouse.com"
		}
	]
}

education.display = function() {
	for (school in education.schools) {
		$("#education-inner").append(HTMLschoolStart);

		if (education.schools[school].url !== "") {
			var formattedSchoolName = HTMLschoolNameURL.replace("%data%", education.schools[school].name).replace("%url%", education.schools[school].url);
			var formattedSchoolDegree = HTMLschoolDegreeURL.replace("%data%", education.schools[school].degree);
		} else {
			var formattedSchoolName = HTMLschoolNameNoURL.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegreeNoURL.replace("%data%", education.schools[school].degree);
		}

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

		var formattedSchool = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation;

		$(".education-entry:last").append(formattedSchool);

		if (education.schools[school].majors.length > 0) {
			for (major in education.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajor);
			}
		} else {
				$(".education-entry:last").append(newLine);
		}
	}
	if (education.onlineCourses.length > 0){

		$("#education-inner").append(HTMLonlineClasses);

		for (course in education.onlineCourses) {
			$("#education-inner").append(HTMLonlineClassStart);

			var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("%url%", education.onlineCourses[course].url);
			var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			var formattedCourseURL = HTMLonlineURL.replace(/%data%/g, education.onlineCourses[course].url);

			var formattedOnlineCourse = formattedCourseTitle + formattedCourseSchool + formattedCourseDates + formattedCourseURL;

			$(".online-class-entry:last").append(formattedOnlineCourse);
		}
	}
}

education.display();

var work = {
	"jobs": [
		{
			"employer": "Refresh Natural Health",
			"url": "http://refreshnaturalhealth.com",
			"title": "CTO",
			"location": "Burnaby, BC",
			"dates": "2012 - present",
			"description": "I am head of all technical development and marketing strategy for Refresh Natural Health."
		},
		{
			"employer": "Willow Advertising Solutions",
			"url": "",
			"title": "CEO",
			"location": "Coquitlam, BC",
			"dates": "2013 - 2015",
			"description": "Willow Advertising Solutions focuses on lead-based performance marketing for companies world wide."
		},
		{
			"employer": "Footprints Conservation Society",
			"url": "http://footprintseducation.org",
			"title": "CoFounder & CTO",
			"location": "Coquitlam, BC",
			"dates": "2011 - present",
			"description": "Footprints Conservation Society is a Greater Vancouver, BC based charitable organization dedicated to inspiring, educating and encouraging children to make choices that result in a healthy, happy life for themselves and our planet."
		}
	]
}

work.display = function(){
	for (job in work.jobs) {
		$("#work-inner").append(HTMLworkStart);
		if (work.jobs[job].url !== "") {
			var formattedEmployer = HTMLworkEmployerURL.replace("%url%", work.jobs[job].url) + HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title) + HTMLworkTitleEndURL;
		} else {
			var formattedEmployer = HTMLworkEmployerNoURL + HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title) + HTMLworkTitleEndNoURL;
		}
		var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		var formattedJob = formattedEmployer + formattedJobTitle + formattedJobDates + formattedJobLocation + formattedJobDescription;

		$(".work-entry:last").append(formattedJob);
	}
}

work.display();

var projects = {
	"projects": [
		{
			"title": "Landing Page (long form)",
			"dates": "2015",
			"description": "This is an example of a long form product landing page.  This is currently in use by Refresh Natural Health to generate sales for their online program, The 14 Day Liver Reset.",
			"images": ["images/liverreset-1.jpg","images/liverreset-2.jpg"],
			"url": "http://liverreset.com"
		},
		{
			"title": "Lead Capture Page",
			"dates": "2015",
			"description": "This is an example of a splash page used for generating email leads.",
			"images": ["images/splashlp.jpg","images/splashlp-2.jpg"],
			"url": "http://refreshnaturalhealth.com/3dayglowingskindiet/3/"
		}
	]
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects-inner").append(HTMLprojectStart);

		if (projects.projects[project].url !== "") {
			var formattedProjectTitle = HTMLprojectTitleURL.replace("%data%", projects.projects[project].title).replace("%url%", projects.projects[project].url);
		} else {
			var formattedProjectTitle = HTMLprojectTitleNoURL.replace("%data%", projects.projects[project].title);
		}

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		var formattedProject = formattedProjectTitle + formattedProjectDates + formattedProjectDescription;

		$(".project-entry:last").append(formattedProject);

		if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images){
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}

projects.display();

function inName() {
	var name = $("#name").html();
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1]
}

/* Uncomment for internationalize button */

/*$("#main").append(internationalizeButton);*/

$("#mapDiv").append(googleMap);