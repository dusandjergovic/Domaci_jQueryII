$(document).ready(function() {
    
    
    $('#userName').on('input', function() {
        let elementWidth = $(this).val();
        $('#userElement').css
            ({
                'width': elementWidth
            })
    });

    $('#userPass').on('input', function() {
        let elementHeight = $(this).val();
        $('#userElement').css
            ({
                'height': elementHeight
            });
    })

    $("#userColor").on('input', function() {
        let boja = $(this).val();
        $('#userElement').css
            ({
                'background-color': boja
            })
        })

    $('#volume').on('input', function() {
        let ivica = $(this).val();
        $('#userElement').css
            ({
                'border-radius' : ivica + '%'
            })
    })




})