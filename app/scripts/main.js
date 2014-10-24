 "use strict"
window.fbAsyncInit = function() {
    FB.init({
        appId: '1520230421552557',
        status: true,
        cookie: true,
        xfbml: true,
        oauth: true
    });

    FB.Event.subscribe('auth.login', function(response) {
     
    });

    FB.getLoginStatus(function(response) {
       
        if (response.status=='connected') {
            FB.api('/me',function(response){
                //alert('Welcome back ' + response.name);
            });
        }
    });

};
(function(d) {
    var js, id = 'facebook-jssdk';
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    d.getElementsByTagName('head')[0].appendChild(js);
}(document));