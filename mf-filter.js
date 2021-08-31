// Referencing code from: https://stackoverflow.com/questions/39867170/multiple-filter-using-jquery-with-data-attribute

//execute the following function only when document is fully loaded
$(document).ready(function () {
    //when any checkbox is clicked...
    //(filter-item is a class placed on all <input checkboxes> for the dropdown filters)
    $('.filter-item').on('click', function () {

        //store in the variable checked boxes from ALL filters
        //($variableName is a convention for variables with jquery content)
        var $filterItems = $('.filter-item:checked');

        //store in the variable all table rows
        var $rows = $('#myTable tbody tr');

        //show all table rows
        $rows.show();

        //if no filter-items are checked, end function (with all rows showing)
        if ($filterItems.length == 0) {
            return;
        } //end of if-statment

        //for each checked filter item...
        $filterItems.each(function () {

            //a single checked filter item
            var $filterItem = $(this);

            //select all the row items where...
            $rows.filter(function () {

                //$filterItem.data() = all the data-* attribute key-value pairs from a single checked filter item
                //$filterItem.data('col') = the value of the "data-col" attribute from a single checked filter item
                //("data-col" is an attribute placed on all <input checkboxes> for the dropdown filters)

                //$(this) = all the table rows
                //$(this).children("td").eq($filterItem.data('col')) = get from each row the cell from the same column as the filter
                //*preserving html format keeps options within the same cell separate
                //*HOWEVER this method prevents topic names where one is a sub of another (ie, 'care', 'careless')
                //*since the term 'care' would pull up both
                var cell = $(this).children("td").eq($filterItem.data('col')).html().toLowerCase();

                //$filterItem.attr("value") = the value of the "value" attribute from a single checked filter item
                //("value" is an attribute placed on all <input checkboxes> representing the checkbox content)
                var filterItemContent = $filterItem.attr("value").toLowerCase();

                //get all the rows that do NOT have the same filter value (in their cell) as the specific filter item
                return cell.indexOf(filterItemContent) == -1;

                //...and hide them
            }).hide();
        }); //end of for-loop (for each checked item)
    }); //when a checkbox is clicked
}); //when document loads