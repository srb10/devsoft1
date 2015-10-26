/*
Posts = new Mongo.Collection('posts');
*/



if (Meteor.isClient) {

    Template.home_posts.helpers({
        posts: function () {
            return posts.find();
        }
    });

    Template.home_posts.events({
        //for the check box. surely we will need this for something.
        'click .toggle-checked': function() {
            Posts.update(this._id, {$set: {checked: !this.checked}}); //so the checkbox shows up "not checked"
        },
        //to delete "this" post
        'click .delete': function() {
            Posts.remove(this._id);
        }
    });

}