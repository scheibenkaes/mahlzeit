var urlHelmut = 'http://helmuts-imbiss.com/index.php?option=com_content&view=article&id=3&Itemid=3';
var urlBrunner = 'http://www.metzgerei-brunner.org/menu/aktuell.pdf';

function ViewModel () {
    this.menu = ko.observable(null);

    this.onBrunnerMenu = function() {
        chrome.tabs.create({url: urlBrunner, active: true});
    }
}

$(document).ready(function() {
    var viewModel = new ViewModel();
    ko.applyBindings(viewModel);

    $.get(urlHelmut, function(data){
        var html = $(data);
        var table = $("#page table", html);
        viewModel.menu(table.html());
    });
});
