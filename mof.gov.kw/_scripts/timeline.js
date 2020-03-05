var timeline = document.querySelector(".timeline"),
    prevMinister = [{
            postedTitle: "المرحوم الأستاذ مشعل خضير المشعان",
            postedContent: "الذي عينه المجلس التشريعي أول رئيس لهذه الدائرة، واستمر فيها من عام 1938م إلى عام 1939م",
            postedTime: "1938",
            postedImage: "../_images/mashel.jpg"
        }, {
            postedTitle: " المغفور له الشيخ عبد الله السالم الصباح",
            postedContent: "عين وزير المالية بالفترة ما بين عام 1939م إلى عام 1940م",
            postedTime: "1939",
            postedImage: "../_images/abduallah.jpg"
        },

        {
            postedTitle: "المغفور له الشيخ أحمد الجابر الصباح",
            postedContent: "عين وزير المالية بالفترة ما بين عام  1940م إلى عام 1950م",
            postedTime: "1940",
            postedImage: "../_images/ahmed-eljaber.jpg"
        },

        {
            postedTitle: "المغفور له الشيخ جابر الأحمد الجابر",
            postedContent: "من 7 فبراير 1959م إلى 16 يناير 1962م عين رئيس لدائرة المالية، ثم وزيراً لها في أول تشكيل وزراي بعد الاستقلال واحتفظ بحقيبة الوزارة من 17 يناير 1962م إلى 28 يناير 1963م تحت اسم (وزارة المالية والصناعة) في التشكيل الوزاري الثاني. واستمر الشيخ جابر الأحمد الجابر وزيراً لهذه الوزارة بالتشكيل الوزاري الثالث (6 ديسمبر 1964م) وكذلك بالتشكيل الوزاري الرابع (3 يناير 1965م) حيث كان سموه وزيراً للمالية والصناعة والتجارة في التشكيل الوزاري الخامس 4 ديسمبر 1965م",
            postedTime: "1959",
            postedImage: "../_images/jaber-alahmed.jpg"
        },

        {
            postedTitle: "الشيخ صباح الأحمد الصباح",
            postedContent: "أسندت له وزارة المالية والنفط بالوكالة إلى جانب وزارة الخارجية في عام 1965م",
            postedTime: "1965",
            postedImage: "../_images/sabah-alahmed.jpg"
        },

        {
            postedTitle: "السيد / عبد الرحمن سالم العتيقي",
            postedContent: "وزيراً للمالية منذ التشكيل الوزاري السادس (4 فبراير 1967م) حتى التشكيل الوزراي العاشر عام 1965م",
            postedTime: "1967",
            postedImage: "../_images/abdualrahman-salem.jpg"
        },

        {
            postedTitle: "السيد / عبد اللطيف يوسف الحمد",
            postedContent: "بالتشكيل الوزاري الحادي عشر (4 مارس 1981م) واستقال في 14 سبتمبر 1983م الشيخ على الخليفة العذبي الصباح: وزيراً للمالية والنفط منذ استقالة عبد اللطيف الحمد وحتى التشكيل الوزاري الثاني عشر 3 مارس 1985م",
            postedTime: "1981",
            postedImage: "../_images/abdullatif-yousef.jpg"
        },

        {
            postedTitle: "الشيخ / علي الخليفة العذبي الصباح",
            postedContent: "وزيراً للمالية والنفط منذ استقالة عبد اللطيف الحمد وحتى التشكيل الوزاري الثاني عشر 3 مارس 1985م.",
            postedTime: "1983",
            postedImage: "../_images/ali-alkhalifa.jpg"
        },

        {
            postedTitle: "السيد / جاسم محمد الخرافي",
            postedContent: "وزيراً للمالية منذ 1985م وحتى 20/6/1990",
            postedTime: "1985",
            postedImage: "../_images/jasem-alkharafy.jpg"
        },


        {
            postedTitle: "السيد / ناصر عبد الله الروضان",
            postedContent: " أصبح وزيراً للمالية بتاريخ 1991م حتى عام 1998",
            postedTime: "1991",
            postedImage: "../_images/naser-alrawdan.jpg"
        },

        {
            postedTitle: "الشيخ / علي سالم العلي الصباح",
            postedContent: " أصبح وزيراً للمالية بتاريخ 1998م حتى عام 1999",
            postedTime: "1998",
            postedImage: "../_images/ali-alsabah.jpg"
        },

        {
            postedTitle: "الشيخ / أحمد عبد الله الأحمد الصباح",
            postedContent: " أصبح وزيراً للمالية بتاريخ 1999 حتى عام 2001",
            postedTime: "1999",
            postedImage: "../_images/ahmed-abdullah.jpg"
        },

        {
            postedTitle: "السيد / د. يوسف حمد الابراهيم",
            postedContent: " أصبح وزيراً للمالية بتاريخ 2001 حتى عام 2003",
            postedTime: "2001",
            postedImage: "../_images/yousef-hamad.jpg"
        },

        {
            postedTitle: "الشيخ / د. محمد صباح السالم الصباح",
            postedContent: " أصبح وزيراً للمالية بتاريخ 25/1/2003",
            postedTime: "2003",
            postedImage: "../_images/mohamed-sabah.jpg"
        },


        {
            postedTitle: "السيد / محمود عبد الخالق النوري",
            postedContent: " أصبح وزيراً للمالية بتاريخ 14/7/2003",
            postedTime: "2003",
            postedImage: "../_images/mahmoud-elnoury.jpg"
        },

        {
            postedTitle: "السيد / بدر مشاري الحميضي",
            postedContent: " أصبح وزيراً للمالية بتاريخ 2005م حتى عام 2007",
            postedTime: "2005",
            postedImage: "../_images/badr-mashary.jpg"
        },

        {
            postedTitle: "السيد / مصطفى جاسم الشمالي",
            postedContent: " أصبح وزيراً للمالية بتاريخ 2007 حتى عام 2012",
            postedTime: "2007",
            postedImage: "../_images/mostafa-jasem.jpg"
        },

        {
            postedTitle: "السيد / د.نايف فلاح الحجرف",
            postedContent: "أصبح وزيراً بالوكالة بتاريخ 28/5/2012",
            postedTime: "2012",
            postedImage: "../_images/naief-alhagraf.jpg"
        },

        {
            postedTitle: "الشيخ / سالم عبدالعزيز سعود الصباح",
            postedContent: "نائب رئيس مجلس الوزراء ووزير المالية بتاريخ نائبا لرئيس مجلس الوزاراء و وزير المالية 4 أغسطس 2013",
            postedTime: "2013",
            postedImage: "../_images/salem-abdelaziz.png"
        },


        {
            postedTitle: "معالي / أنس خالد الصالح ",
            postedContent: "نائب رئيس مجلس الوزراء ووزير المالية بتاريخ نائبا لرئيس مجلس الوزاراء و وزير المالية 4 أغسطس وزير المالية بتاريخ 6/1/2014",
            postedTime: "2014",
            postedImage: "../_images/Anas_AlSaleh.jpg"
        },
         {
             postedTitle: "السيد / د.نايف فلاح الحجرف",
             postedContent: "أصبح وزيراً بتاريخ 12/12/2017 حتى عام 2019",
             postedTime: "2017",
             postedImage: "../_images/naief-alhagraf.jpg"
         }
    ];

prevMinister.forEach(function(item, index) {
    var postedTime = item.postedTime,
        postedContent = item.postedContent,
        postedTitle = item.postedTitle;
    postedImage = item.postedImage;


    var even = index % 2 === 0;

    timeline.innerHTML += "<li class=\"" + (even ? 'timeline-inverted' : '') + "\">\n\t\t\t<div class=\"timeline-badge\"><span> " + postedTime + " </span> </div>\n\t\t\t<div class=\"timeline-panel wow animated zoomIn\">\n\t\t\t\t<div class=\"timeline-heading\"><div class=\"timeline-image\"><img src=\"" + postedImage + "\" alt=\"" + postedTitle + "\"> </div>\n\t\t\t\t\t<h4 class=\"timeline-title\">" + postedTitle + "</h4>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"timeline-body\">\n\t\t\t\t\t<p>\n\t\t" + postedContent + "\t\t\t\t\n\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>";
});

$(function() {
    $(".timeline li[class]").each(function(i) {
        //alert(i);
        var _this = $(this);
        var item = i + 1;
        _this.find('.timeline-panel').addClass('animation-delay-' + item);
    });

})