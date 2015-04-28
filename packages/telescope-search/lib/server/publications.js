Meteor.publish('searches', function(limit) {
  var limit = typeof limit === undefined ? 20 : limit;
  if(Users.is.adminById(this.userId)){
   return Searches.find({}, {limit: limit, sort: {timestamp: -1}});
  }
  return [];
});