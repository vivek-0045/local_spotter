/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('location-list', {
        title: 'local spotter - find a place to make yourself beautiful',
        pageHeader: {
            title: 'local spotter',
        },
        sidebar: "local spotter A salon is a facility which offers beauty services. Salons provide a wide array of services to men and women, and they can be found in many regions of the world. Growth in the salon sector tends to be constantly expanding, as more people grow interested in beauty services and new services are developed to expand the existing customer base",
        locations: [{
            name: 'loreal',
            address: 'panjagutta road no-5/21',
            rating: 3,
            facilities: ['manicure', 'pedicure', 'hair cut'], 
            distance: '82m'
        }, {
            name: 'lakme',
            address: 'banjara hills road no-5/21',
            rating: 4,
            facilities: ['manicure', 'pedicure', 'massage'],
            distance: '100m'
        }, {
            name: 'green trends',
            address: 'kukatpally road no-5/21',
            rating: 2,
            facilities: ['manicure', 'pedicure', 'treatment'],
            distance: '250m'
        }]
    });
};


module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'loreal',
        pageHeader: {
            title: 'loreal'
        },
        sidebar: {
            context: ' A salon is a facility which offers beauty services. Salons provide a wide array of services to men and women, and they can be found in many regions of the world. Growth in the salon sector tends to be constantly expanding, as more people grow interested in beauty services and new services are developed to expand the existing customer base',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'loreal',
            address: 'panjagutta road no-5/21',
            rating: 3,
            facilities: ['manicure', 'pedicure', 'hair cut'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                customer: 'Jawed habib',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                
                rating: 3,
                customer: 'Nora fatehi',
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
};
module.exports.addReview= function(req,res){
    res.render('location-review-form',{title:'review'});
};

 
