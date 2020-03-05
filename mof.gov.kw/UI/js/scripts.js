function ShowHideEmptyDiv() {
    var contentBlock = $('[data-filter-item]:not(.hidden)');
    if (contentBlock.length > 0) {
        $('.no-content').css('display', 'none');
    }
    else {
        $('.no-content').css('display', 'block');
    }
}

$(function () {

    //  Set Active Link based on URL 
    var current = window.location.pathname;
    var currentpageID = window.location.search;
    var currentLink = current + currentpageID;

    $('.side-nav ul.dropdown li a').each(function () {
        var $this = $(this);
        // if the current path is like this link, make it active
        if ($this.attr('href') === currentLink) {
            $this.addClass('child-active');
            $this.parents('.side-nav ul.navbar-nav li[id*=LIMain]').addClass('active');
        }
    });

    $('.side-nav li[id*=LIMain] > a').each(function () {
        var $this = $(this);
        // if the current path is like this link, make it active
        if ($this.attr('href') === currentLink) {
            //$this.addClass('child-active');
            $this.parent().addClass('active');
        }
    });

    // Set toggle aria expanded item and run collapse and expand for nav items
    $('.side-nav ul.navbar-nav li.has-children').each(function () {
        var $this = $(this);
        var ariaExpanded = 'aria-expanded';
        $this.attr(ariaExpanded, 'false');
        $this.click(function () {
            $this.attr(ariaExpanded, function (i, attr) {
                return attr == 'true' ? 'false' : 'true';
            });
            $this.siblings().removeClass('active');
            $this.siblings().attr(ariaExpanded, 'false');
        });

    });

    // Set search input submit with Enter keyup 
    $(".main-search input[id$=txtSearch]").keypress(function (e) {
        if (e.keyCode === 13) {
            $(".main-search a[id$=lnkSearch] .fa, .main-search a[id$=lnkSearch]").click();
        }
    });

    filterContent();
    ShowHideEmptyDiv();
});


function filterContent() {
    var content = $('.erp-accordion .panel-group .panel');


    content.each(function () {
        var $this = $(this);
        var titleRule = $this.find('.panel-title').text().trim();
        var contentRule = $this.find('.body-content p').text().trim();

        $this.attr('data-filter-item', '');
        $this.attr('data-filter-name', titleRule);

        //$this.find('.body-content').attr('data-filter-item', '');
        //$this.find('.body-content').attr('data-filter-name', contentRule);


    });

    $('[data-search]').on('input', function () {
        var searchVal = $(this).val();
        var filterItems = $('[data-filter-item]');
        var searchKeyword = $('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]');

        if (searchVal != '') {
            filterItems.addClass('hidden');
            $('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');

            $("div.panel-default").each(function (index) {
                if ($(this).text().toLowerCase().indexOf(searchVal.toLowerCase()) >= 0)
                    $(this).removeClass('hidden');
                else
                    $(this).addClass('hidden');
            });

        }
        else {
            filterItems.removeClass('hidden');
        }



        ShowHideEmptyDiv();
    });
}

