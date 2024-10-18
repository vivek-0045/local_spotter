module.exports.homelist = function(req, res){
    res.render('locations-list', { title: 'HOME' });
  };
module.exports.locationInfo = function(req, res){
    res.render('location-info', { title: 'LocationInfo' });
  };
module.exports.locationInfo1 = function(req, res){
    res.render('locations-info2', { title: 'LocationInfo1' });
  };
module.exports.locationInfo2 = function(req, res){
    res.render('locationss-info3', { title: 'LocationInfo2' });
  };
module.exports.addReview = function(req, res){
    res.render('locations-review-form', { title: 'ADD REVIEW' });
  };
  
  