/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = { 
            name: 'Abdulwasa Osman',
            role: 'Web Developer',
            contacts: {
                mobile: '017166237909',
                email: 'abduosman150594@gmail.com',
                github: 'abduosman150594@gmail.com',
                twitter: 'Abduosman150594@',
                location: 'Frankfurt'},
            biopic: 'images/meinfoto.jpg',
            welcomeMessage: 'welcome',
            skills: [' service ', 'orintierung'],
            display: function(){
                   
                        $('#header').prepend(
                            HTMLheaderName.replace('%data%', bio.name),
                            HTMLheaderRole.replace('%data%', bio.role)
                        );
                       
                        $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
                        $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
                            
                        
                        $('.flex-box').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
                        $('.flex-box').append(HTMLemail.replace('%data%', bio.contacts.email));
                        $('.flex-box').append(HTMLgithub.replace('%data%', bio.contacts.github));
                        $('.flex-box').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
                        $('.flex-box').append(HTMLlocation.replace('%data%', bio.contacts.location));
                
                        $('#header').append(HTMLskillsStart );
                                bio.skills.forEach(function(e) {
                                     $('#header').append( HTMLskills.replace('%data%', e));
                                });
         }};




var work = {
    jobs: [
        {
            employer: 'Daniel',
            title: '01.05.2018',
            location: 'München',
            dates: '01.05.2017',
            description: 'A web developer is a programmer who specializes '+
            'in or is specifically engaged in, the development of World Wide Web'
        }
    ],
    display: function(){
        $('#workExperience').append(
            HTMLworkStart,
            HTMLworkEmployer.replace('%data%', work.jobs[0].employer),
            HTMLworkTitle.replace('%data%', work.jobs[0].title),
            HTMLworkDates.replace('%data%', work.jobs[0].dates), 
            HTMLworkLocation.replace('%data%', work.jobs[0].location), 
            HTMLworkDescription.replace('%data%', work.jobs[0].description));
    }
};


var projects = {
    projects:[
    {
        title: 'Own website',
        dates: '01.05.2017',
        description: 'Web developers are found working in various '+
        'types of organizations, including large corporations and governments',
        images: ['images/maxresdefault Kopie.jpg']
        }],
        display: function () { 
            $('#projects').append(
                HTMLprojectStart,
                HTMLprojectTitle.replace('%data%', projects.projects[0].title),
                HTMLprojectDates.replace('%data%', projects.projects[0].dates), 
                HTMLprojectDescription.replace('%data%', projects.projects[0].description));
            
            projects.projects[0].images.forEach(function(c){
                        $('#projects').append(HTMLprojectImage.replace('%data%', c));
                                   });
        }   
};

         
var education = {
        schools: [
                {
                name: 'Liebigschule', 
                degree: 'secondary',
                location: 'Berlin',
                majors: ['secondary schools'],
                dates: '01.05.2016',
                }
                ],
   
    
    onlineCourses: [{
        title: 'Front-End Web Developer Nanodegree',
        school: 'Udacity',
        dates: '01.05.2016',
        url: 'https://de.udacity.com/course/front-end-web-developer-nanodegree--nd001/'
     }],
    
    display: function(){
        $('#education').append(
            HTMLschoolStart,
            HTMLschoolName.replace('%data%', education.schools[0].name),
            HTMLschoolLocation.replace('%data%', education.schools[0].location),
            HTMLschoolDegree.replace('%data%', education.schools[0].degree), 
            HTMLschoolDates.replace('%data%', education.schools[0].dates));
        
        education.schools[0].majors.forEach(function(w){
          $('#education').append(HTMLschoolMajor.replace('%data%', w));  
        });
        
    
        
        education.onlineCourses.forEach(function(e){
           $('#education').append(
               HTMLonlineClasses,
               HTMLonlineTitle.replace('%data%', education.onlineCourses[0].title, e), 
               HTMLonlineSchool.replace('%data%', education.onlineCourses[0].school, e),
               HTMLonlineDates.replace('%data%', education.onlineCourses[0].dates, e), 
               HTMLonlineURL.replace('%data%', education.onlineCourses[0].url, e)); 
        });
    }
};



bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv') .append(internationalizeButton, googleMap);
