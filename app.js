var url = 'http://helmuts-imbiss.com/index.php?option=com_content&view=article&id=3&Itemid=3';

function ViewModel () {
    this.menu = ko.observable(null);
}

$(document).ready(function() {
    var viewModel = new ViewModel();
    ko.applyBindings(viewModel);

    $.get(url, function(data){
        var html = $(data);
        var table = $("#page table", html);
        viewModel.menu(table.html());
    });
});
