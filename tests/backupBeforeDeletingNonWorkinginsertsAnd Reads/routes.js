//so we do not need to have "index.html", ust a template
/*Router.route(‘/’, {
name: 'home'
})*/

Router.route('/', function() {
    this.layout('masterLayout');
    this.render('home'); //use the yield, and place the posts in the template called 'home'
});

/* Maybe use this to return the posts.
Router.route('/', function() {
    this.render('home', {
        data: function () {
            return posts.findOne({_id: this.params._id});
        }
    });
});
*/



/*Router.route('/admin', function() {
    this.layout('adminViewLayout');
    this.render('adminBody'); //use the yield, and place the posts in the template called 'home'
});*/


//#################################


Router.route('/create_post', function() { //will need to verify that user
    this.layout('masterLayout');
    this.render('create_post');
});

//note the next to take you to the same view; one just directs from the home page.
//they could be combined, but this way the link just says "admin" underneath
//if someone inspects the code behind the home page
Router.route('/admin', function() {
    this.layout('adminViewLayout');
    this.render('review_posts');
});

Router.route('/review_posts', function() {
    this.layout('adminViewLayout');
    this.render('review_posts');
});

Router.route('/review_comments', function() {
    this.layout('adminViewLayout');
    this.render('review_comments');
});

