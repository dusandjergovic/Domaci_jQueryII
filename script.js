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
        let elementColor = $(this).val();
        $('#userElement').css
            ({
                'background-color': elementColor
            })
        })

    $('#volume').on('input', function() {
        let elementBorder = $(this).val();
        $('#userElement').css
            ({
                'border-radius' : elementBorder + '%'
            })
    })




})