//Links Embeded in the Page
$(document).ready(function() {
    $("#hire-us").attr({"href": "http://formsubmit.co/el/wutomi"}); //Hire us link
    $("#chat-us").attr("href", "#"); //Chat us link

    //Social Media Handles
    $("#wa").attr("href", "https://wa.link/q8tvt4"); //Whatsapp us link
    $("#face").attr("href", "#"); //Facebook us link
    $("#inst").attr("href", "#"); //Instagram us link
    $("#twit").attr("href", "#"); //Twitter us link
    $("#link").attr("href", "#"); //Linkedin us link
});

$(document).ready(function() {
    $("#graphic-txt").text('We transform ideas and concepts into visually stunning creations. We are passionate about collaborating with you to understand your vision and deliver designs that not only meet your objectives but also exceed your expectations.')

    $("#web-design-txt").text('Whether you are looking to establish an online presence, revamp your existing website, or develop a complex web application, we are here to help you achieve your goals. We pride ourselves on delivering solutions that align with your brand, engage your target audience, and drive meaningful results.')

    $("#responsive-layout-txt").text('Make your website accessible responsively to any device irespetive of the device type and size, do not loose Clients for the lack of iresponsive website. We offer you the best Responsive website that is ever accessible in every device.')

    $("#fast-support-txt").text("We help Clients with the fastest emergency support system; 24/7 support system!.")

    $("#cms-txt").text("We give our Clients a powerful content management system that help them to manage their website on the go!")

    $("seo-txt").text("We help Clients to Rank higher to own the organic search results and amplify their search marketing campaigns while keeping your competitors at bay.")

    $("#mobile-app-txt").text("We help develop mobile app for Clients to make your business more handy!")

    $("#ai-video-cont-txt").text("We help Clients to create the most powerful Video Ai that is capable of draging customers to their parms!")

    $("#tech-edu-txt").text("We will help you to acheive your dream in the Tech, Industry with our professional mentorship!")
});

//Service Section slides button
$(document).ready(function() {
    $("div #page2").hide(1000);
    $("div #page3").hide(1000);
    $(".rdb").css({
        "width": '30px',
    });

    $("#pagee1").click(function() {
            $("div #page1").slideDown(1000);
            $("div #page2").hide(1000);
            $("div #page3").hide(1000);
    });
    $("#pagee2").click(function() {
        $("div #page2").fadeIn(1000);
        $("div #page1").hide(1000);
        $("div #page3").hide(1000);
    });
    $("#pagee3").click(function() {
        $("div #page3").slideDown(1000);
        $("div #page1").fadeOut(1000);
        $("div #page2").fadeOut();
    });
});
    //Small Screen Menu Bar
    function navmenu(){
        var opanClose = document.getElementById("menu-icon");
        var nav = document.getElementById("navlist");
        if(nav.style.right == '-100%'){
            nav.style.right = '0';
            opanClose.classList.add("bx-x");
            opanClose.classList.remove("bx-menu");
            document.getElementById("nav-more-li").style.display = "none";
        }else{
            nav.style.right = '-100%';
            opanClose.classList.add("bx-menu");
            opanClose.classList.remove("bx-x");
        };
    };
    //More Nav in the big screen
$(document).ready(function() {
    $("#nav-more-li").click(function() {
        $("#subnav").slideDown(1000)
        $(this).fadeOut(1000);
        $("#nav-more-collapse").fadeIn(1000);
    });
    $("#nav-more-collapse").click(function() {
        $("#subnav").slideUp(1000)
        $(this).slideUp()
        $("#nav-more-li").slideDown()
    });
});
//Welcome Prompt Message
$(document).ready(function() {
    var welcomemsg = "Please Let Us Know Your Name"
    var msg = prompt(welcomemsg);
    $("#visiName").text(" "+msg);
    if(msg != ""){
        $("#comm").show();
    };
    $("#grt").text(txtim+" ");
    $("#pmAm").text(pmam);
});
//Time 
$(document).ready(function() {
    setInterval(function() {
        var date = new Date();
        $("#h").text(date.getHours()+" H")
        $("#m").text(date.getMinutes() +" M")
        $("#s").text(date.getSeconds()+" S")
    },1000);
});

{
    var pmam = ""
    var txtim = "";
    var gritTime = new Date();
    var hour = gritTime.getHours();
    if(hour <= 11 && hour < 12){
         txtim += "Good Morning!";
         pmam += "AM";
    }else if(hour >= 12 && hour < 16){
        txtim += "Good Afternoon!";
        pmam += "PM"
    }else if(hour >= 16 && hour < 24){
        txtim += "Good Evening!";
        pmam += "PM"
    };
};

function social_handles(){
    var close = document.getElementById('close-so-icon');
    var socialn = document.getElementById('social');
        if(socialn.style.display != 'none'){
            socialn.style.display = 'none';
            close.classList.add("bx-share-alt");
            close.classList.remove("bx-x");
        }else{
            close.classList.add("bx-x");
            close.classList.remove("bx-share-alt");
            socialn.style.display = 'block';
        };
};
    $(document).ready(function() {
        setInterval(function() {
            $("#social").fadeIn(3000, function() {
                $("#close-so-icon").addClass('bx-x')
            });
        },15000);
    });

    //Testimonies slide content
$(document).ready(function() {
    $("#testimonier1").text('Victor Johnson');
    $("#hihligt1").text("I noticed the positive results almost immediately");
    $("#comment1").text("InnCoding helped to develop my website. They did a great job and I noticed the positive results almost immediately. They are very professional and very pleasant to work with. I am very happy with the services provided.");

    $("#testimonier2").text("Abudu Prince")
    $("#hihligt2").text("This is SEO Gurus so far")
    $("#comment2").text("I can boldly say that inncoding professionals are the best in seo.")

    $("#testimonier3").text("Linda James");
    $("#hihligt3").text("I must recommend you to inncoding")
    $("#comment3").text("My blog was developed by inncoding Tech Hub and i have realy being meeting up to my expectation since 2022 till date.")

    $("#testimonier4").text("Jonh Faith");
    $("#hihligt4").text("I got massive value at inncoding")
    $("#comment4").text("The instructors are top-notch, and the practical learning approach in their platform is outstanding.")
})