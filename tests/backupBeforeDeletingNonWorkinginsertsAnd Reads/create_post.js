
    Posts = new Mongo.Collection('posts');


if (Meteor.isClient) {

    Template.body.helpers({
        posts: function () {
            return Posts.find();
        }
    });

    Template.body.events({
        'submit .new-resolution': function (event) {//event contains all the data about the event with the class .new-resolution
            var title = event.target.title.value;
            var thebody = event.target.thebody.value;
            alert('OH MY ');
            Posts.insert({
                title: title,
                returnBody: thebody,
                createdAt: new Date()
            });
            alert('ARGGHH');
            //clear the form now...
            event.target.title.value = "";
            return false;
        }
    });

/*
//moved this to home_posts.js

Template.home_posts.events({
        //for the check box. surely we will need this for something.
        'click .toggle-checked': function() {
            Posts.update(this._id, {$set: {checked: !this.checked}}); //so the checkbox shows up "not checked"
        },
        //to delete "this" post
        'click .delete': function() {
            Posts.remove(this._id);
        }
    });*/

}