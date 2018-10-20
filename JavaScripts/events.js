// SEARCH 
const search = () => {
    $('#search_input').keypress(function() {
    let searchText = $('#search_input').val();
    alert('searchText');
});
};


// FILETR CARDS 

const filetrCards = () => {

    $('morning_btn').click(e) => {
       alert ('This is morning');     
    })

    $('afternoon_btn').click(e) => {
        alert ('This is morning');     
     })

     $('evening_btn').click(e) => {
        alert ('This is morning');     
     })

     $('afterdark_btn').click(e) => {
        alert ('This is morning');     
     })

};

export {search, filetrCards}